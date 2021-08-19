import {
    TokenFactory,
    ERC721ExchangeV0,
    ERC1155ExchangeV0,
    NFT721V0,
    NFT1155V0,
    SocialTokenV0,
    ERC721Mock,
    ERC1155Mock,
    ERC20Mock,
} from "../typechain";

import { domainSeparator, getMint1155Digest, getMint721Digest, sign } from "./utils/sign-utils";
import { ethers, getNamedAccounts } from "hardhat";
import { expect, assert } from "chai";
import { ContractReceipt } from "@ethersproject/contracts";

const { BigNumber, utils, constants, Contract } = ethers;
const { AddressZero } = constants;

ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR); // turn off warnings

const setupTest = async () => {
    const signers = await ethers.getSigners();
    const [deployer, protocolVault, operationalVault, alice, bob, carol] = signers;

    const TokenFactoryContract = await ethers.getContractFactory("TokenFactory");
    const factory = (await TokenFactoryContract.deploy(
        protocolVault.address,
        25,
        operationalVault.address,
        5,
        "https://nft721.sushi.com/",
        "https://nft1155.sushi.com/"
    )) as TokenFactory;

    const ERC721ExchangeContract = await ethers.getContractFactory("ERC721ExchangeV0");
    const erc721Exchange = (await ERC721ExchangeContract.deploy(factory.address)) as ERC721ExchangeV0;

    const ERC1155ExchangeContract = await ethers.getContractFactory("ERC1155ExchangeV0");
    const erc1155Exchange = (await ERC1155ExchangeContract.deploy(factory.address)) as ERC1155ExchangeV0;

    const NFT721Contract = await ethers.getContractFactory("NFT721V0");
    const nft721 = (await NFT721Contract.deploy()) as NFT721V0;

    const NFT1155Contract = await ethers.getContractFactory("NFT1155V0");
    const nft1155 = (await NFT1155Contract.deploy()) as NFT1155V0;

    const SocialTokenContract = await ethers.getContractFactory("SocialTokenV0");
    const socialToken = (await SocialTokenContract.deploy()) as SocialTokenV0;

    const ERC721MockContract = await ethers.getContractFactory("ERC721Mock");
    const erc721Mock = (await ERC721MockContract.deploy()) as ERC721Mock;

    const ERC1155MockContract = await ethers.getContractFactory("ERC1155Mock");
    const erc1155Mock = (await ERC1155MockContract.deploy()) as ERC1155Mock;

    const ERC20MockContract = await ethers.getContractFactory("ERC20Mock");
    const erc20Mock = (await ERC20MockContract.deploy()) as ERC20Mock;

    return {
        deployer,
        protocolVault,
        operationalVault,
        factory,
        erc721Exchange,
        erc1155Exchange,
        nft721,
        nft1155,
        socialToken,
        alice,
        bob,
        carol,
        erc721Mock,
        erc1155Mock,
        erc20Mock,
    };
};

function getAddressNFT721(res: ContractReceipt, n: number): string {
    assert.isDefined(res.events);
    if (res.events !== undefined) {
        const args = res.events[n].args;
        assert.isDefined(args);
        if (args !== undefined) {
            return args[0];
        }
    }
    return "";
}

async function getAddressNFT1155(factory: TokenFactory): Promise<string> {
    const events = await factory.queryFilter(factory.filters.DeployNFT1155(), "latest");
    return events[0].args[0];
}

async function getAddressSocialToken(factory: TokenFactory): Promise<string> {
    const events = await factory.queryFilter(factory.filters.DeploySocialToken(), "latest");
    return events[0].args[0];
}

describe("TokenFactory", () => {
    beforeEach(async () => {
        await ethers.provider.send("hardhat_reset", []);
    });

    it("should be FeeInfo functions return proper value", async () => {
        const { protocolVault, operationalVault, factory } = await setupTest();

        expect((await factory.protocolFeeInfo())[0]).to.be.equal(protocolVault.address);
        expect((await factory.protocolFeeInfo())[1]).to.be.equal(25);
        expect((await factory.operationalFeeInfo())[0]).to.be.equal(operationalVault.address);
        expect((await factory.operationalFeeInfo())[1]).to.be.equal(5);
    });

    it("should be fail if non-owner calls onlyOwner functions", async () => {
        const { factory, alice } = await setupTest();

        await expect(factory.connect(alice).setBaseURI721("https://shoyu.sushi.com/nft721/")).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).setBaseURI1155("https://shoyu.sushi.com/nft1155/")).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).setProtocolFeeRecipient(alice.address)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).setOperationalFeeRecipient(alice.address)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).setOperationalFee(10)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).setDeployerWhitelisted(alice.address, true)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).setStrategyWhitelisted(alice.address, true)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).upgradeNFT721(alice.address)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).upgradeNFT1155(alice.address)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).upgradeSocialToken(alice.address)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).upgradeERC721Exchange(alice.address)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
        await expect(factory.connect(alice).upgradeERC1155Exchange(alice.address)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
    });

    it("should be that NFT721, NFT1155, SocialToken can't be deployed if upgradeXXX functions are not called before", async () => {
        const { factory, alice, bob, carol, erc20Mock, nft721, nft1155, socialToken } = await setupTest();

        await factory.setDeployerWhitelisted(AddressZero, true);

        await expect(
            factory
                .connect(alice)
                ["deployNFT721(address,string,string,uint256[],address,uint8)"](
                    alice.address,
                    "N",
                    "S",
                    [0, 2],
                    bob.address,
                    10
                )
        ).to.be.reverted;
        await expect(
            factory
                .connect(bob)
                ["deployNFT721(address,string,string,uint256,address,uint8)"](
                    carol.address,
                    "N",
                    "S",
                    10,
                    alice.address,
                    10
                )
        ).to.be.reverted;
        await expect(factory.connect(carol).deployNFT1155(alice.address, [0, 2], [11, 33], bob.address, 10)).to.be
            .reverted;
        await expect(factory.deploySocialToken(alice.address, "N", "S", erc20Mock.address)).to.be.reverted;

        await factory.upgradeNFT721(nft721.address);
        await factory
            .connect(alice)
            ["deployNFT721(address,string,string,uint256[],address,uint8)"](
                alice.address,
                "N",
                "S",
                [0, 2],
                bob.address,
                10
            );
        await factory
            .connect(bob)
            ["deployNFT721(address,string,string,uint256,address,uint8)"](
                carol.address,
                "N",
                "S",
                10,
                alice.address,
                10
            );
        await expect(factory.connect(carol).deployNFT1155(alice.address, [0, 2], [11, 33], bob.address, 10)).to.be
            .reverted;
        await expect(factory.deploySocialToken(alice.address, "N", "S", erc20Mock.address)).to.be.reverted;

        await factory.upgradeNFT1155(nft1155.address);
        await factory.connect(carol).deployNFT1155(alice.address, [0, 2], [11, 33], bob.address, 10);
        await expect(factory.deploySocialToken(alice.address, "N", "S", erc20Mock.address)).to.be.reverted;

        await factory.upgradeSocialToken(socialToken.address);
        await factory.deploySocialToken(alice.address, "N", "S", erc20Mock.address);
    });

    it("should be that only accounts in DeployerWhitelist can deploy proxies if isDeployerWhitelisted(address(0)) is false", async () => {
        const { factory, alice, bob, nft721 } = await setupTest();

        await factory.upgradeNFT721(nft721.address);
        expect(await factory.isDeployerWhitelisted(AddressZero)).to.be.false;

        expect(await factory.isDeployerWhitelisted(bob.address)).to.be.false;
        await expect(
            factory
                .connect(bob)
                ["deployNFT721(address,string,string,uint256[],address,uint8)"](
                    alice.address,
                    "N",
                    "S",
                    [0, 2],
                    bob.address,
                    10
                )
        ).to.be.revertedWith("SHOYU: FORBIDDEN");

        await factory.setDeployerWhitelisted(alice.address, true);
        expect(await factory.isDeployerWhitelisted(alice.address)).to.be.true;
        await factory
            .connect(alice)
            ["deployNFT721(address,string,string,uint256[],address,uint8)"](
                alice.address,
                "N",
                "S",
                [0, 2],
                bob.address,
                10
            );
    });

    it("should be that accounts not in DeployerWhitelist can deploy proxies if isDeployerWhitelisted(address(0)) is true", async () => {
        const { factory, alice, bob, carol, nft721, nft1155 } = await setupTest();

        await factory.setDeployerWhitelisted(AddressZero, true);
        expect(await factory.isDeployerWhitelisted(AddressZero)).to.be.true;

        expect(await factory.isDeployerWhitelisted(alice.address)).to.be.false;
        expect(await factory.isDeployerWhitelisted(bob.address)).to.be.false;

        await factory.upgradeNFT721(nft721.address);
        await factory
            .connect(alice)
            ["deployNFT721(address,string,string,uint256[],address,uint8)"](
                alice.address,
                "N",
                "S",
                [0, 2],
                bob.address,
                10
            );
        await factory
            .connect(bob)
            ["deployNFT721(address,string,string,uint256,address,uint8)"](
                carol.address,
                "N",
                "S",
                10,
                alice.address,
                10
            );

        await factory.upgradeNFT1155(nft1155.address);
        await factory.connect(alice).deployNFT1155(alice.address, [0, 2], [11, 33], bob.address, 10);
        await factory.connect(bob).deployNFT1155(bob.address, [11, 25], [1, 2], carol.address, 5);
    });

    it("should be that someone who has NFT721 contract owner's signature can call mint721, mintWithTags721 functions", async () => {
        const { factory, alice, bob, carol, nft721 } = await setupTest();

        const signer = ethers.Wallet.createRandom();

        await factory.setDeployerWhitelisted(AddressZero, true);
        await factory.upgradeNFT721(nft721.address);
        let tx = await factory
            .connect(alice)
            ["deployNFT721(address,string,string,uint256[],address,uint8)"](
                signer.address,
                "N",
                "S",
                [0, 2],
                bob.address,
                10
            );
        let res = await tx.wait();
        const nft721_0 = getAddressNFT721(res, 5);
        tx = await factory
            .connect(bob)
            ["deployNFT721(address,string,string,uint256,address,uint8)"](
                signer.address,
                "N",
                "S",
                10,
                alice.address,
                10
            );
        res = await tx.wait();
        const nft721_1 = getAddressNFT721(res, 4);

        const digest721_0 = await getMint721Digest(ethers.provider, nft721_0, alice.address, 1, [], factory.address, 0);
        const { v: v0, r: r0, s: s0 } = sign(digest721_0, signer.privateKey);

        await expect(factory.connect(bob).mint721(nft721_0, bob.address, 1, [], v0, r0, s0)).to.be.revertedWith(
            "SHOYU: UNAUTHORIZED"
        );
        await expect(factory.connect(alice).mint721(nft721_0, alice.address, 2, [], v0, r0, s0)).to.be.revertedWith(
            "SHOYU: UNAUTHORIZED"
        );
        await factory.connect(alice).mint721(nft721_0, alice.address, 1, [], v0, r0, s0);

        const digest721_1 = await getMint721Digest(ethers.provider, nft721_1, alice.address, 3, [], factory.address, 1);
        const { v: v1, r: r1, s: s1 } = sign(digest721_1, signer.privateKey);

        const fakeSigner = ethers.Wallet.createRandom();
        const { v: fv1, r: fr1, s: fs1 } = sign(digest721_1, fakeSigner.privateKey);

        await expect(factory.connect(bob).mint721(nft721_1, alice.address, 3, [], fv1, fr1, fs1)).to.be.revertedWith(
            "SHOYU: UNAUTHORIZED"
        );
        await factory.connect(bob).mint721(nft721_1, alice.address, 3, [], v1, r1, s1);

        const digest721_2 = await getMint721Digest(
            ethers.provider,
            nft721_1,
            carol.address,
            123,
            [],
            factory.address,
            2
        );
        const { v: v2, r: r2, s: s2 } = sign(digest721_2, signer.privateKey);
        const { v: fv2, r: fr2, s: fs2 } = sign(digest721_2, fakeSigner.privateKey);

        await expect(
            factory.connect(carol).mintWithTags721(nft721_1, carol.address, 123, [], ["foo", "bar"], fv2, fr2, fs2)
        ).to.be.revertedWith("SHOYU: UNAUTHORIZED");
        await factory.connect(carol).mintWithTags721(nft721_1, carol.address, 123, [], ["hello", "world"], v2, r2, s2);
    });

    it("should be that someone who has NFT1155 contract owner's signature can call mint1155, mintWithTags1155 functions", async () => {
        const { factory, alice, bob, carol, nft1155 } = await setupTest();

        const signer = ethers.Wallet.createRandom();

        await factory.setDeployerWhitelisted(AddressZero, true);

        await factory.upgradeNFT1155(nft1155.address);
        await factory.connect(alice).deployNFT1155(signer.address, [0, 2], [11, 33], bob.address, 10);
        const nft1155_0 = await getAddressNFT1155(factory);
        await factory.connect(bob).deployNFT1155(signer.address, [11, 25], [1, 2], signer.address, 5);
        const nft1155_1 = await getAddressNFT1155(factory);

        const digest1155_0 = await getMint1155Digest(
            ethers.provider,
            nft1155_0,
            alice.address,
            12,
            345,
            [],
            factory.address,
            0
        );
        const { v: v0, r: r0, s: s0 } = sign(digest1155_0, signer.privateKey);

        await expect(
            factory.connect(bob).mint1155(nft1155_0, alice.address, 12, 3450, [], v0, r0, s0)
        ).to.be.revertedWith("SHOYU: UNAUTHORIZED");
        await expect(
            factory.connect(bob).mint1155(nft1155_0, alice.address, 12, 123, [], v0, r0, s0)
        ).to.be.revertedWith("SHOYU: UNAUTHORIZED");
        await expect(
            factory.connect(alice).mint1155(nft1155_0, bob.address, 12, 345, [], v0, r0, s0)
        ).to.be.revertedWith("SHOYU: UNAUTHORIZED");
        await factory.connect(alice).mint1155(nft1155_0, alice.address, 12, 345, [], v0, r0, s0);

        const digest1155_1 = await getMint1155Digest(
            ethers.provider,
            nft1155_1,
            carol.address,
            11,
            1,
            [],
            factory.address,
            1
        );
        const { v: v1, r: r1, s: s1 } = sign(digest1155_1, signer.privateKey);

        const fakeSigner = ethers.Wallet.createRandom();
        const { v: fv1, r: fr1, s: fs1 } = sign(digest1155_1, fakeSigner.privateKey);

        await expect(
            factory.connect(bob).mint1155(nft1155_1, carol.address, 11, 1, [], fv1, fr1, fs1)
        ).to.be.revertedWith("SHOYU: UNAUTHORIZED");
        await factory.connect(bob).mint1155(nft1155_1, carol.address, 11, 1, [], v1, r1, s1);

        const digest1155_2 = await getMint1155Digest(
            ethers.provider,
            nft1155_0,
            bob.address,
            1,
            193,
            [],
            factory.address,
            2
        );
        const { v: v2, r: r2, s: s2 } = sign(digest1155_2, signer.privateKey);
        const { v: fv2, r: fr2, s: fs2 } = sign(digest1155_2, fakeSigner.privateKey);

        await expect(
            factory.connect(carol).mintWithTags1155(nft1155_0, bob.address, 1, 193, [], ["foo", "bar"], fv2, fr2, fs2)
        ).to.be.revertedWith("SHOYU: UNAUTHORIZED");
        await factory
            .connect(carol)
            .mintWithTags1155(nft1155_0, bob.address, 1, 193, [], ["hello", "world"], v2, r2, s2);
    });

    it("should be fail when users try to setTags to unpossessed NFT721/1155", async () => {
        const { factory, alice, bob, carol, nft721, nft1155 } = await setupTest();

        await factory.setDeployerWhitelisted(AddressZero, true);
        await factory.upgradeNFT721(nft721.address);
        await factory
            .connect(bob)
            ["deployNFT721(address,string,string,uint256[],address,uint8)"](
                alice.address,
                "N",
                "S",
                [7, 2],
                carol.address,
                10
            );
        await factory
            .connect(carol)
            ["deployNFT721(address,string,string,uint256,address,uint8)"](bob.address, "N", "S", 10, alice.address, 10);
    });

    it("should be fail when users try to deploy NFT721/1155/SocialToken with invalid parameters", async () => {
        const { factory, alice, bob, carol, nft721, nft1155 } = await setupTest();
    });

    it.only("should work well checking isNFT721/1155/SocialToken functions", async () => {
        const { factory, alice, bob, carol, nft721, nft1155, socialToken, erc20Mock } = await setupTest();

        await factory.setDeployerWhitelisted(AddressZero, true);
        await factory.upgradeNFT721(nft721.address);
        await factory.upgradeNFT1155(nft1155.address);
        await factory.upgradeSocialToken(socialToken.address);

        let tx = await factory
            .connect(bob)
            ["deployNFT721(address,string,string,uint256[],address,uint8)"](
                alice.address,
                "N",
                "S",
                [7, 2],
                carol.address,
                10
            );
        let res = await tx.wait();
        const nft721_0 = getAddressNFT721(res, 5);

        await factory.connect(alice).deployNFT1155(alice.address, [0, 2], [11, 33], bob.address, 10);
        const nft1155_0 = await getAddressNFT1155(factory);

        await factory.connect(alice).deploySocialToken(alice.address, "N", "S", erc20Mock.address);
        const socialT_0 = await getAddressSocialToken(factory);

        const NFT721Contract = await ethers.getContractFactory("NFT721V0");
        const nft721_new = (await NFT721Contract.deploy()) as NFT721V0;

        const NFT1155Contract = await ethers.getContractFactory("NFT1155V0");
        const nft1155_new = (await NFT1155Contract.deploy()) as NFT1155V0;

        const SocialTokenContract = await ethers.getContractFactory("SocialTokenV0");
        const socialToken_new = (await SocialTokenContract.deploy()) as SocialTokenV0;

        await factory.upgradeNFT721(nft721_new.address);
        await factory.upgradeNFT1155(nft1155_new.address);
        await factory.upgradeSocialToken(socialToken_new.address);

        tx = await factory
            .connect(carol)
            ["deployNFT721(address,string,string,uint256,address,uint8)"](bob.address, "N", "S", 10, alice.address, 10);
        res = await tx.wait();
        const nft721_1 = getAddressNFT721(res, 4);

        await factory.connect(bob).deployNFT1155(alice.address, [11, 25], [1, 2], alice.address, 5);
        const nft1155_1 = await getAddressNFT1155(factory);

        await factory.connect(bob).deploySocialToken(bob.address, "N", "S", erc20Mock.address);
        const socialT_1 = await getAddressSocialToken(factory);

        assert.isTrue(await factory.isNFT721(nft721_0));
        assert.isTrue(await factory.isNFT721(nft721_1));
        assert.isFalse(await factory.isNFT721(nft1155_0));
        assert.isFalse(await factory.isNFT721(nft1155_1));
        assert.isFalse(await factory.isNFT721(socialT_0));
        assert.isFalse(await factory.isNFT721(socialT_1));

        assert.isFalse(await factory.isNFT1155(nft721_0));
        assert.isFalse(await factory.isNFT1155(nft721_1));
        assert.isTrue(await factory.isNFT1155(nft1155_0));
        assert.isTrue(await factory.isNFT1155(nft1155_1));
        assert.isFalse(await factory.isNFT1155(socialT_0));
        assert.isFalse(await factory.isNFT1155(socialT_1));

        assert.isFalse(await factory.isSocialToken(nft721_0));
        assert.isFalse(await factory.isSocialToken(nft721_1));
        assert.isFalse(await factory.isSocialToken(nft1155_0));
        assert.isFalse(await factory.isSocialToken(nft1155_1));
        assert.isTrue(await factory.isSocialToken(socialT_0));
        assert.isTrue(await factory.isSocialToken(socialT_1));
    });

    //contract signing test
});