/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PaymentSplitterFactory,
  PaymentSplitterFactoryInterface,
} from "../PaymentSplitterFactory";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "shares",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "splitter",
        type: "address",
      },
    ],
    name: "DeployPaymentSplitter",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x99326011",
        type: "bytes32",
      },
    ],
    name: "c_0x99326011",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x9aa6d367",
        type: "bytes32",
      },
    ],
    name: "c_0x9aa6d367",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares",
        type: "uint256[]",
      },
    ],
    name: "deployPaymentSplitter",
    outputs: [
      {
        internalType: "address",
        name: "splitter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "query",
        type: "address",
      },
    ],
    name: "isPaymentSplitter",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50620000467fa8fe8e99786a5470828a9e74756a18e7b2d3c35067c894073dfb96212c49b03360001b620005b360201b60201c565b6200007a7ff3e7660d1b14667e41c7cc38ddaa8f0a02a54c4e05081d21c4ac525603feeb9d60001b620005b360201b60201c565b620000ae7f8e42a9d26fc1c51f30e0938edf5d65f7c1be6cf8cb93cf8fa98faea907df9d9c60001b620005b360201b60201c565b6000604051620000be90620005b6565b604051809103906000f080158015620000db573d6000803e3d6000fd5b509050620001127fc6a48256da2ec5aaa7f87bf50f6dff95fb3a72fe688a212c9ff2c7ba8cb1b1fb60001b620005b360201b60201c565b620001467f3229055b8833b98a8fc0e98f74199fb74596a1d21baa34b7a39961c8cddbc46460001b620005b360201b60201c565b6000600167ffffffffffffffff8111156200018a577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015620001b95781602001602082028036833780820191505090505b509050620001f07fe9af8c7bf1812179cba06f0b89133cfa21b71fd2d3a81ea1effa7d74e1efce0460001b620005b360201b60201c565b620002247f327d2d1b9f2d507769a550e885b9f81a3ad47361220ddb95dca7bf445b86219560001b620005b360201b60201c565b338160008151811062000260577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050620002ce7f21ad0642584f38dd79f1282257121bb5d0d002fcc749f6a6f3d352f789bdd1ee60001b620005b360201b60201c565b620003027fe1c88934b31721ec2588d2f096ab802f27e151a7abf29b5d53cfc1d0d2a425ba60001b620005b360201b60201c565b6000600167ffffffffffffffff81111562000346577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015620003755781602001602082028036833780820191505090505b509050620003ac7febf26ccf91a77ecbc45d2ae3c115bf8af96b39ad2bfc016c08de4ea51ae9e34c60001b620005b360201b60201c565b620003e07ffe87bb0cf0362c74927666119f06fb405ef730707278f7a1b7b466768778f2b260001b620005b360201b60201c565b6001816000815181106200041d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250506200045d7fdefae943e5952af44b5321b8107c79ede19f6ab3e9ba751bb616099eeccc34f160001b620005b360201b60201c565b620004917f8f86fb004a6c9a543c33cd790e7510fa98361164be0bd321ddb1b6b9f0d1bd0d60001b620005b360201b60201c565b8273ffffffffffffffffffffffffffffffffffffffff166324f3ae7883836040518363ffffffff1660e01b8152600401620004ce92919062000715565b600060405180830381600087803b158015620004e957600080fd5b505af1158015620004fe573d6000803e3d6000fd5b50505050620005367f600e622203ea3a616b2faac495861eb53d853cb45ce71189881b2a958f5a0f8f60001b620005b360201b60201c565b6200056a7f42d675909011b02bdb74e0180b6ff3b732d77975c2e14c7f5c09910512228b7660001b620005b360201b60201c565b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000829565b50565b612bb780620016f683390190565b6000620005d28383620005f8565b60208301905092915050565b6000620005ec838362000704565b60208301905092915050565b6200060381620007e8565b82525050565b6000620006168262000785565b620006228185620007b5565b93506200062f8362000765565b8060005b83811015620006665781516200064a8882620005c4565b975062000657836200079b565b92505060018101905062000633565b5085935050505092915050565b6000620006808262000790565b6200068c8185620007c6565b9350620006998362000775565b8060005b83811015620006d0578151620006b48882620005de565b9750620006c183620007a8565b9250506001810190506200069d565b5085935050505092915050565b6000620006ec600083620007d7565b9150620006f98262000826565b600082019050919050565b6200070f816200081c565b82525050565b600060608201905081810360008301526200073081620006dd565b9050818103602083015262000746818562000609565b905081810360408301526200075c818462000673565b90509392505050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000620007f582620007fc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b50565b610ebd80620008396000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063041235681461005157806328da4a791461006d578063360740601461009d578063838e970c146100b9575b600080fd5b61006b60048036038101906100669190610a5b565b6100e9565b005b61008760048036038101906100829190610979565b6100ec565b6040516100949190610c31565b60405180910390f35b6100b760048036038101906100b29190610a5b565b6101a3565b005b6100d360048036038101906100ce91906109a2565b6101a6565b6040516100e09190610c16565b60405180910390f35b50565b600061011a7fbcbe2d8d4bc37d3098447bc5fbc374d656b93d4adc57e7c29008224026a6d9b960001b6101a3565b6101467f7b67ccb9daff1522051253548d7bc65f0e0ac154b114b49380ac9b6a89d3694d60001b6101a3565b6101727fdd890679d04e4c756729fa1df42c0820fb094c70e10d7b7cc7707cbda8e4e81060001b6101a3565b61019c60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836103ac565b9050919050565b50565b60006101d47fe5d7e28d3612411b6b379a9c6aedea53343a35cbf9e5b136f841cfdc62dfc98960001b6101a3565b6102007f4a06b3fe85b29a4d57105638d5f49774c6bc3ae111afd683c0a0ac677a9493cf60001b6101a3565b61022c7f38cd7f6242d99bf8124043f83e8ea4cd651e675549f981daf9324bf2a66cf1fe60001b6101a3565b6102ed60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1688888888888860405160240161026b96959493929190610c4c565b6040516020818303038152906040527f24f3ae78000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104df565b905061031b7fc0fc4844b203a7bf78baed6d8cb7824001b6a490085825affb27ad595337be9760001b6101a3565b6103477f935b7fc55e983cbce65dc7fe2d3486fcce731ed089c996d0f96142b3c16ac0c360001b6101a3565b8773ffffffffffffffffffffffffffffffffffffffff167f89bac4a62a028c1569fa1634d2c4f9c8f0685844f9f48689be50bfa7fbb7429e888888888888886040516103999796959493929190610c9e565b60405180910390a2979650505050505050565b60006103da7f7fbf64094e7cc07bade2254ef7b365e8c1cedd4f633dd3fe5d60e229588eaaaf60001b6100e9565b6104067f6902fc9937ed5e71ae483a7c85b25398c9409c3848ec7e3db7f768377e69f3e760001b6100e9565b6104327faf7c37db65c7a5d325773e06820fa59061fa792280a37ee354dcc7717cb389b960001b6100e9565b60008360601b90506104667f44ea22d352b655419ea7a9b90621b4560dc93085be3a7efb394c6750f05941c360001b6100e9565b6040517f363d3d373d3d3d363d7300000000000000000000000000000000000000000000815281600a8201527f5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000601e82015260408101602d600082873c600d810151600d83015114815183511416935050505092915050565b600061050d7f8832962e412b498c39f40f6bdc2c560f31b6907214ec40a247e26bda5916ba7160001b6100e9565b6105397f9ef60c4585ae725bcd492201fba8d4ca4f8cbc03820ce2f003dd72ca2e7c06ac60001b6100e9565b6105657f317bcd2e60f2f699454cd29968120aa8d3179db56673fd57ccf5d4b399983ad960001b6100e9565b60008360601b90506105997f10daa8745d54107d16bae8b478287f8974b96e1cf2bc7e2b113f6d9e80a760ed60001b6100e9565b6040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f09250506106207fec8079f94f561862547800871dbaf7fc640d70d643b55f656d1c01ea83fd03cb60001b6100e9565b61064c7f2ef7bf48850e00e8fa8d07bb626171eedd1028571f70e0c98aa715d8b53506fc60001b6100e9565b60008351111561083d576106827f5a384f12afd8aeb090d0310095bcb9c9856943bc6bd7a1a370e1f0c64f16eca460001b6100e9565b6106ae7fbef74bd1dcac299680828e80e61009245f4ce331bdc1c87a0d641883e5d806c060001b6100e9565b6106da7fcdabf522660e79e953b7753393eb35b91c6b8374100e1e6b591aaa5be1dd4dde60001b6100e9565b60008273ffffffffffffffffffffffffffffffffffffffff16846040516107019190610bff565b6000604051808303816000865af19150503d806000811461073e576040519150601f19603f3d011682016040523d82523d6000602084013e610743565b606091505b505090506107737ffa4f4a09334632b9b93f62821d144434e5c454cd211600cedb9786f2bb033ab960001b6100e9565b61079f7fadae25519c60a3948ec8082a29928b70333ecee94a3ee4bce17ef700f601c91560001b6100e9565b6107cb7f3739682b9908826024b17bb3eb862b611bb152011436b1e6e6479d46d3737f3360001b6100e9565b8061080b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080290610cfe565b60405180910390fd5b6108377fa85803583886453be72a0a352580fe893270d9a5670546946dcf0560d2e2701f60001b6100e9565b5061086a565b6108697fcbb2ca704683288d310aa0b0a710aaf4c2e171d5c88d9e60993e869026dbfa5b60001b6100e9565b5b5092915050565b60008135905061088081610e59565b92915050565b60008083601f84011261089857600080fd5b8235905067ffffffffffffffff8111156108b157600080fd5b6020830191508360208202830111156108c957600080fd5b9250929050565b60008083601f8401126108e257600080fd5b8235905067ffffffffffffffff8111156108fb57600080fd5b60208301915083602082028301111561091357600080fd5b9250929050565b60008135905061092981610e70565b92915050565b60008083601f84011261094157600080fd5b8235905067ffffffffffffffff81111561095a57600080fd5b60208301915083600182028301111561097257600080fd5b9250929050565b60006020828403121561098b57600080fd5b600061099984828501610871565b91505092915050565b60008060008060008060006080888a0312156109bd57600080fd5b60006109cb8a828b01610871565b975050602088013567ffffffffffffffff8111156109e857600080fd5b6109f48a828b0161092f565b9650965050604088013567ffffffffffffffff811115610a1357600080fd5b610a1f8a828b01610886565b9450945050606088013567ffffffffffffffff811115610a3e57600080fd5b610a4a8a828b016108d0565b925092505092959891949750929550565b600060208284031215610a6d57600080fd5b6000610a7b8482850161091a565b91505092915050565b6000610a908383610a9c565b60208301905092915050565b610aa581610d95565b82525050565b610ab481610d95565b82525050565b6000610ac68385610d40565b9350610ad182610d1e565b8060005b85811015610b0a57610ae78284610d7e565b610af18882610a84565b9750610afc83610d33565b925050600181019050610ad5565b5085925050509392505050565b6000610b238385610d51565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115610b5257600080fd5b602083029250610b63838584610ddd565b82840190509392505050565b610b7881610da7565b82525050565b6000610b8982610d28565b610b938185610d62565b9350610ba3818560208601610dec565b80840191505092915050565b6000610bbb8385610d6d565b9350610bc8838584610ddd565b610bd183610e1f565b840190509392505050565b6000610be9601383610d6d565b9150610bf482610e30565b602082019050919050565b6000610c0b8284610b7e565b915081905092915050565b6000602082019050610c2b6000830184610aab565b92915050565b6000602082019050610c466000830184610b6f565b92915050565b60006060820190508181036000830152610c6781888a610baf565b90508181036020830152610c7c818688610aba565b90508181036040830152610c91818486610b17565b9050979650505050505050565b60006080820190508181036000830152610cb981898b610baf565b90508181036020830152610cce818789610aba565b90508181036040830152610ce3818587610b17565b9050610cf26060830184610aab565b98975050505050505050565b60006020820190508181036000830152610d1781610bdc565b9050919050565b6000819050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000610d8d6020840184610871565b905092915050565b6000610da082610dbd565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015610e0a578082015181840152602081019050610def565b83811115610e19576000848401525b50505050565b6000601f19601f8301169050919050565b7f53484f59553a2043414c4c5f4641494c55524500000000000000000000000000600082015250565b610e6281610d95565b8114610e6d57600080fd5b50565b610e7981610db3565b8114610e8457600080fd5b5056fea2646970667358221220ccd12f26e5a76792f2306d6066f64434146e7bffa10a4de29ddbdccb5de11e4164736f6c63430008030033608060405234801561001057600080fd5b50612b97806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80634a79d50c116100665780634a79d50c1461011e57806363037b0c1461013c578063ce7c2ac21461016c578063d79779b21461019c578063f7604acc146101cc57610093565b806324f3ae78146100985780633a98ef39146100b4578063406072a9146100d257806348b7504414610102575b600080fd5b6100b260048036038101906100ad9190612016565b6101e8565b005b6100bc6106b3565b6040516100c991906125a4565b60405180910390f35b6100ec60048036038101906100e79190611f88565b6106b9565b6040516100f991906125a4565b60405180910390f35b61011c60048036038101906101179190611f88565b6106de565b005b610126610def565b6040516101339190612402565b60405180910390f35b610156600480360381019061015191906120ba565b610e7d565b6040516101639190612387565b60405180910390f35b61018660048036038101906101819190611f5f565b610ebc565b60405161019391906125a4565b60405180910390f35b6101b660048036038101906101b19190611f5f565b610ed4565b6040516101c391906125a4565b60405180910390f35b6101e660048036038101906101e19190611fed565b610eec565b005b600060019054906101000a900460ff168061020e575060008054906101000a900460ff16155b61024d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610244906124c4565b60405180910390fd5b60008060019054906101000a900460ff16159050801561029d576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6102c97f1599aca61f113ff5d2438893f1c00b0eb87a43fd0892eb2dd938e8c30c8584b260001b610eec565b6102f57f1ee6941d76b8fc58aae06c8a5b6ad0cd45d695fd7d54e1a4cf42626cea27f6c560001b610eec565b6103217f9cc07808cc809019d811da3c3087ffd8cf4afa3a386dc78e3d963d7100f0ba7560001b610eec565b61034d7f9e56ca1ee8585f8e387a41c7ea3b69c366bdab50d537f74290b715b3ea0acb3060001b610eec565b828290508585905014610395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038c90612544565b60405180910390fd5b6103c17f7b3a4285d4648fa6aa8b79efccf5317e14b9750e48aef05128455df4b9fed13f60001b610eec565b6103ed7f8988d0416126a67443b21e94edd39e3f31b7eb24762c5720508324edbf3edc6e60001b610eec565b6104197fda97e1d648f390bb428d03ecb4de23d63d4a0cdd6ac6a06304719d9cfac4147260001b610eec565b6104457f4d4ca1b711b24a219008253fc2da88d52cb0f6382c961109e375d987c6e6d87d60001b610eec565b6000858590501161048b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048290612424565b60405180910390fd5b6104b77f48ea68b1e28e7f5a742dfce9a886b04fb855bd40744a57dca9af3a7c3e5fafc860001b610eec565b6104e37fa3e03d40726bb2f5480e01926d80d2d0389747b47ee35f4b182b12454859d24060001b610eec565b61050f7f322bfaee1d44805b9654e085237aba0f201a3a2a1199dab7af481e13a1cd4e9b60001b610eec565b868660019190610520929190611d75565b5061054d7fced635eed5a838e48c83424a7920dd7b93e6e0889ccb6caa20e22f7a201f7e4160001b610eec565b6105797f57f0f4cf676bca2dc863a674c9edc33c13ab053745388634a207c0c51b29b6d660001b610eec565b60005b85859050811015610688576105b37f5af3d4c062ac48d345ebe118cffa3a4188913b5d366aeb9052d3ca81c13e8a5360001b610eec565b6105df7f3ff2062695de4dc0457036f97d6f34243073a2fda602de03135150b80d769a0260001b610eec565b61067586868381811061061b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906106309190611f5f565b858584818110610669577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135610eef565b8080610680906127bd565b91505061057c565b5080156106aa5760008060016101000a81548160ff0219169083151502179055505b50505050505050565b60025481565b6005602052816000526040600020602052806000526040600020600091509150505481565b61070a7f079628dfd1f5b6552e13719e2bcdc93da88c68e83baee3a66c392d2a87cc2b1760001b610eec565b6107367fec2a9057b1185dc1d6de49672b767320492a4b5cfdd909e5e083a692ba07c27b60001b610eec565b6107627f8445a4d725f64dd13dd083e76d91acb19d6722bcb92197b261c7279290697d7a60001b610eec565b61078e7fcd370d3d61add20eea87f9e25c799fc67b1a33409e44d294a84fd6b96aa5c23960001b610eec565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610810576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080790612444565b60405180910390fd5b61083c7fd544618b288912038aa56e6a2c2d81bb44acfa2958c656245a70728cdc69a79360001b610eec565b6108687f76e941be6b6b3e442bb25703e665644d359dea4043180da3ac0ce7a41086b12b60001b610eec565b6108947f86def2cc640768bba8399abed1917d26480b81bc53971c80621c96e9c590058960001b610eec565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108ff308573ffffffffffffffffffffffffffffffffffffffff166114b890919063ffffffff16565b61090991906125f1565b90506109377fda0f2d1ba45d5afae6ca51f72803624bdfb70c1a8937f39812480bc5812085b060001b610eec565b6109637f1f75bad3e9789a7299b5a6134f49026f40737f26dda1c85c6ee22a0851bcd71160001b610eec565b6000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600254600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484610a309190612678565b610a3a9190612647565b610a4491906126d2565b9050610a727fc7d388929576b095754d6d4d7890bcad1e58568f375138de24b9d0630485508160001b610eec565b610a9e7f58984f0f85439c5faf27a4b66453dbe1f50d637aba25fae2bdf942c0f603057560001b610eec565b610aca7f7498ed6ce0345a0f97eb5aa0e086cd338d723ef0b7183cd04c444c32335405a660001b610eec565b6000811415610b0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0590612464565b60405180910390fd5b610b3a7ffb54f4d069fb924650dab8fbcdc307c75ff937d4e8de38ea36524d983cc1845f60001b610eec565b610b667feff32a948ebdd11bf19f1c66bc5b9bff42190135fea7641827fc9055cd2820e060001b610eec565b610b927f6956ee8fb72434ea0e09b492390a5ab0fbc653899445fee822b59c3261467cc560001b610eec565b80600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c1e91906125f1565b92505081905550610c517f20dd3051d2916ddbd2d6a351d33c0d0c19f5d5b8b6ae8e10b6cd5f4f0dacd66760001b610eec565b610c7d7f1d6adae435cb5242fdc1bdeaa69bdefe364ea8a92068ee3d9e0762e479a0756660001b610eec565b80600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ccc91906125f1565b92505081905550610cff7f1721af41df4424f81902e5f8afe1a6e08a6845e876a7c792894e70783c9bafa760001b610eec565b610d2b7fb09820ce8f8465d4cc28dab0676e5f13102ec3996c719552bb817f7e7e4a7ab860001b610eec565b610d5683828673ffffffffffffffffffffffffffffffffffffffff1661172c9092919063ffffffff16565b610d827f9d3d8019537bce8d809ab0e05d0917c634bd5dd160d31fadacfebe242b09a35160001b610eec565b610dae7ffb2eb3f9ffef7b70968e8f849d587800cb73345ad6dfd944ec0cc395018a347660001b610eec565b7f8ac5b3c2902b21b6bbb4d99ec195e28a242cb6a1777804db10b84d91e2006429848483604051610de1939291906123a2565b60405180910390a150505050565b60018054610dfc9061278b565b80601f0160208091040260200160405190810160405280929190818152602001828054610e289061278b565b8015610e755780601f10610e4a57610100808354040283529160200191610e75565b820191906000526020600020905b815481529060010190602001808311610e5857829003601f168201915b505050505081565b60068181548110610e8d57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b60036020528060005260406000206000915090505481565b50565b610f1b7f50d5f08751830826f50fba4e703347cadda885d765efc6eaee187cecee42434560001b610eec565b610f477f5ec932bdfbf1ad072235dfc2c87824d3db438332437cfa09b4c4cdaf705d6ad960001b610eec565b610f737f6128a9496547c3d3abd667c9d327fbc54ee337f59ef8cf7b937e212181d957e260001b610eec565b610f9f7fd36c62f8aa183bdbc68f1980944bf9a69c8ae4461a7fc81cd6518dba6c928aee60001b610eec565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561100f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100690612524565b60405180910390fd5b61103b7f30b550e20483f9001a87f4f7646c226c860f8c3999270a6cf23897aec49cbec960001b610eec565b6110677f0a21f660915c776b0e6fca255385630d6d68154243196f18410777cd561945c460001b610eec565b6110937fe36aa0f941932fe6e2a90fa2c85ec7d2677e7df134109caa7d8103743409f59c60001b610eec565b6110bf7f733627f8513a8bb412137eb31d575305c6737722b3a02fb4354cd21980e7fd6b60001b610eec565b60008111611102576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f9906124e4565b60405180910390fd5b61112e7f0e6134660588731542765a67a022a55e88fe0c56eed7d2fb8a327f517615c9bf60001b610eec565b61115a7fb74b437acda7b96f405c476e087f03900aa6f1532a13230894bc35c47475f59160001b610eec565b6111867f4ef6c9e041657ea09227f7f3481a8c65a8abb0da7e6b6a545c716ee4c7f87f1560001b610eec565b6111b27fcbb71e066b4fa2a0cfdf4f8e815ef1142fa6959588caf730e7ae6184cc40843c60001b610eec565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611234576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122b90612484565b60405180910390fd5b6112607f9393322b105fa956347e34ab9a3a1bb7898f3f8227c1c60512ee3340ca909fcb60001b610eec565b61128c7fb73b940734009ac179c805c0e0fe3ae05d1b59df819b7a25071d48805e98f8ee60001b610eec565b6112b87fe4a8b7a78785626aa0ff5dfe9e4555f7babaad3fe82d57460c92a460b986e05860001b610eec565b6006829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506113477fb48d20c64af9c622a6feebc56fd921f53fe7c759e08b5c8b0efa5ecbaebce3a760001b610eec565b6113737fbc55a258521a9712f455774bd08075bb066a3539fd7775d50072512f95a380d560001b610eec565b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113e37ff2a7de59bd7ac7fb14fde2b22273b94571745f71262cc499b81089b81a09b83060001b610eec565b61140f7f688230d6d63f98711b5ad12ad4bdefda6778aac222905913a524504aab93cff060001b610eec565b8060025461141d91906125f1565b60028190555061144f7fd049412e2176e6bf08e65c459249e6e50c59c6587a4ab05bed5d294df213b42360001b610eec565b61147b7f4409d8ab78f33a84836f5a515acf85e383a5a24c005d59c7872598e01b08d8f160001b610eec565b7f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac82826040516114ac9291906123d9565b60405180910390a15050565b60006114e67f53f5c679b3719a6e35894071071fa65e5d2c0c6e14105bfcce03c116a6223c6060001b611a7f565b6115127fd315a08d9fd0d27d5f6d7f48e9ae755e558faa8af22e45bd658382d69be1b2d560001b611a7f565b61153e7f251a508c42030b61ad81109b2f3142fe79306df32afe90627f764d1ff706374e60001b611a7f565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156116165761159f7fa7d9bd985506201ef5718670a11967fc36a9750d71e7b05ba6d76fb3d3afbf7660001b611a7f565b6115cb7f16b5b7f613063d6381dbe89d96640768ae6ac976ef8941aa972796bfb2a8c47360001b611a7f565b6115f77fd887092c113198ad83694bf67d00c83ecc21d5468134a2378e5d3012a6d7abd860001b611a7f565b8173ffffffffffffffffffffffffffffffffffffffff16319050611726565b6116427f7941c9e23fc991788e64efba8c691afe4a30b78fbb38d2f639c85ede292de0ff60001b611a7f565b61166e7f71823448abedbcd69c0b205ad5b4b120c21f25b7d9c1769a91200c8cfaf73b4c60001b611a7f565b61169a7fd1cc4e31801653c0567d3b17c7403adcb4744140c149a240bb58943a9f8853f960001b611a7f565b8273ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016116d39190612387565b60206040518083038186803b1580156116eb57600080fd5b505afa1580156116ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172391906120e3565b90505b92915050565b6117577e4919f202f0b5d9b5fb9c8e9598660a5cc72f40b3a30b4c1ce5674c91d9260660001b611a7f565b6117837feb7c8d203fc5c7e9b3e0deae64dc2d6f226b4d64180bc75051cff15c189f220860001b611a7f565b6117af7f3ad2cac724f926c5f34fdc81d40f286fdc0dca9c07a46d80c792b7f506fa8a6060001b611a7f565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156119ca576118107f550f3a89a4bd9e7e157f338bdaa9126287bc3ced510065bc5ca7da04bf1d576160001b611a7f565b61183c7fbbebaf8edb8b74f4846629dd10c8f4ff97cabf9e6409e073b35d903ba7218c5760001b611a7f565b6118687f28ea9d21bdaeb29622d7c25f212968cd2ec8b1a76b4f13a3d800d82b38f2822260001b611a7f565b60008273ffffffffffffffffffffffffffffffffffffffff168260405161188e90612372565b60006040518083038185875af1925050503d80600081146118cb576040519150601f19603f3d011682016040523d82523d6000602084013e6118d0565b606091505b505090506119007f8df42889fa59c56d6af223c92b8dbad5c481b9c5699e422ed8c39a8371013d8460001b611a7f565b61192c7ffbdb32416e9a02f3a44879f1accc089271c14c9d490027612f6508defcfb87b460001b611a7f565b6119587ff447186a2cd8854240f10ea553f9e3789acdcf2360dbdcc93d9493f706c0e42160001b611a7f565b80611998576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198f90612504565b60405180910390fd5b6119c47f04dd6eecd4a54f78e5b1d8403d1254776c6806d4488fc8f619fc1325f7fdf05b60001b611a7f565b50611a7a565b6119f67f208c6b4808b13d92badabdfefc859e2e09c11b93385582db70606bb8ea31235560001b611a7f565b611a227f502780ff74c7d864d0d641539a13e81b59f318a243a3e44d5df4bb793b87ba2b60001b611a7f565b611a4e7fa0b3c13703a75de54fd91258f0aa59b254198d1ac3c0d4e6ecf31e470240ab0d60001b611a7f565b611a7982828573ffffffffffffffffffffffffffffffffffffffff16611a829092919063ffffffff16565b5b505050565b50565b611b038363a9059cbb60e01b8484604051602401611aa19291906123d9565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611b08565b505050565b6000611b6a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611bcf9092919063ffffffff16565b9050600081511115611bca5780806020019051810190611b8a9190611fc4565b611bc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bc090612584565b60405180910390fd5b5b505050565b6060611bde8484600085611be7565b90509392505050565b606082471015611c2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c23906124a4565b60405180910390fd5b611c3585611cfb565b611c74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6b90612564565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611c9d919061235b565b60006040518083038185875af1925050503d8060008114611cda576040519150601f19603f3d011682016040523d82523d6000602084013e611cdf565b606091505b5091509150611cef828286611d0e565b92505050949350505050565b600080823b905060008111915050919050565b60608315611d1e57829050611d6e565b600083511115611d315782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d659190612402565b60405180910390fd5b9392505050565b828054611d819061278b565b90600052602060002090601f016020900481019282611da35760008555611dea565b82601f10611dbc57803560ff1916838001178555611dea565b82800160010185558215611dea579182015b82811115611de9578235825591602001919060010190611dce565b5b509050611df79190611dfb565b5090565b5b80821115611e14576000816000905550600101611dfc565b5090565b600081359050611e2781612b05565b92915050565b60008083601f840112611e3f57600080fd5b8235905067ffffffffffffffff811115611e5857600080fd5b602083019150836020820283011115611e7057600080fd5b9250929050565b60008083601f840112611e8957600080fd5b8235905067ffffffffffffffff811115611ea257600080fd5b602083019150836020820283011115611eba57600080fd5b9250929050565b600081519050611ed081612b1c565b92915050565b600081359050611ee581612b33565b92915050565b60008083601f840112611efd57600080fd5b8235905067ffffffffffffffff811115611f1657600080fd5b602083019150836001820283011115611f2e57600080fd5b9250929050565b600081359050611f4481612b4a565b92915050565b600081519050611f5981612b4a565b92915050565b600060208284031215611f7157600080fd5b6000611f7f84828501611e18565b91505092915050565b60008060408385031215611f9b57600080fd5b6000611fa985828601611e18565b9250506020611fba85828601611e18565b9150509250929050565b600060208284031215611fd657600080fd5b6000611fe484828501611ec1565b91505092915050565b600060208284031215611fff57600080fd5b600061200d84828501611ed6565b91505092915050565b6000806000806000806060878903121561202f57600080fd5b600087013567ffffffffffffffff81111561204957600080fd5b61205589828a01611eeb565b9650965050602087013567ffffffffffffffff81111561207457600080fd5b61208089828a01611e2d565b9450945050604087013567ffffffffffffffff81111561209f57600080fd5b6120ab89828a01611e77565b92509250509295509295509295565b6000602082840312156120cc57600080fd5b60006120da84828501611f35565b91505092915050565b6000602082840312156120f557600080fd5b600061210384828501611f4a565b91505092915050565b61211581612706565b82525050565b6000612126826125bf565b61213081856125d5565b9350612140818560208601612758565b80840191505092915050565b6000612157826125ca565b61216181856125e0565b9350612171818560208601612758565b61217a81612893565b840191505092915050565b60006121926017836125e0565b915061219d826128a4565b602082019050919050565b60006121b56010836125e0565b91506121c0826128cd565b602082019050919050565b60006121d86011836125e0565b91506121e3826128f6565b602082019050919050565b60006121fb6014836125e0565b91506122068261291f565b602082019050919050565b600061221e6026836125e0565b915061222982612948565b604082019050919050565b6000612241602e836125e0565b915061224c82612997565b604082019050919050565b60006122646015836125e0565b915061226f826129e6565b602082019050919050565b60006122876017836125e0565b915061229282612a0f565b602082019050919050565b60006122aa6016836125e0565b91506122b582612a38565b602082019050919050565b60006122cd6018836125e0565b91506122d882612a61565b602082019050919050565b60006122f06000836125d5565b91506122fb82612a8a565b600082019050919050565b6000612313601d836125e0565b915061231e82612a8d565b602082019050919050565b6000612336602a836125e0565b915061234182612ab6565b604082019050919050565b6123558161274e565b82525050565b6000612367828461211b565b915081905092915050565b600061237d826122e3565b9150819050919050565b600060208201905061239c600083018461210c565b92915050565b60006060820190506123b7600083018661210c565b6123c4602083018561210c565b6123d1604083018461234c565b949350505050565b60006040820190506123ee600083018561210c565b6123fb602083018461234c565b9392505050565b6000602082019050818103600083015261241c818461214c565b905092915050565b6000602082019050818103600083015261243d81612185565b9050919050565b6000602082019050818103600083015261245d816121a8565b9050919050565b6000602082019050818103600083015261247d816121cb565b9050919050565b6000602082019050818103600083015261249d816121ee565b9050919050565b600060208201905081810360008301526124bd81612211565b9050919050565b600060208201905081810360008301526124dd81612234565b9050919050565b600060208201905081810360008301526124fd81612257565b9050919050565b6000602082019050818103600083015261251d8161227a565b9050919050565b6000602082019050818103600083015261253d8161229d565b9050919050565b6000602082019050818103600083015261255d816122c0565b9050919050565b6000602082019050818103600083015261257d81612306565b9050919050565b6000602082019050818103600083015261259d81612329565b9050919050565b60006020820190506125b9600083018461234c565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006125fc8261274e565b91506126078361274e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561263c5761263b612806565b5b828201905092915050565b60006126528261274e565b915061265d8361274e565b92508261266d5761266c612835565b5b828204905092915050565b60006126838261274e565b915061268e8361274e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156126c7576126c6612806565b5b828202905092915050565b60006126dd8261274e565b91506126e88361274e565b9250828210156126fb576126fa612806565b5b828203905092915050565b60006127118261272e565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561277657808201518184015260208101905061275b565b83811115612785576000848401525b50505050565b600060028204905060018216806127a357607f821691505b602082108114156127b7576127b6612864565b5b50919050565b60006127c88261274e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156127fb576127fa612806565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f53484f59553a204c454e4754485f544f4f5f53484f5254000000000000000000600082015250565b7f53484f59553a20464f5242494444454e00000000000000000000000000000000600082015250565b7f53484f59553a204e4f5f5041594d454e54000000000000000000000000000000600082015250565b7f53484f59553a20414c52454144595f4144444544000000000000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f53484f59553a20494e56414c49445f5348415245530000000000000000000000600082015250565b7f53484f59553a205452414e534645525f4641494c555245000000000000000000600082015250565b7f53484f59553a20494e56414c49445f4144445245535300000000000000000000600082015250565b7f53484f59553a204c454e475448535f4e4f545f455155414c0000000000000000600082015250565b50565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b612b0e81612706565b8114612b1957600080fd5b50565b612b2581612718565b8114612b3057600080fd5b50565b612b3c81612724565b8114612b4757600080fd5b50565b612b538161274e565b8114612b5e57600080fd5b5056fea26469706673582212204221e284338588a59257151b59fb74ab232ca4a188f093dabdb4dd091e11095764736f6c63430008030033";

export class PaymentSplitterFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PaymentSplitterFactory> {
    return super.deploy(overrides || {}) as Promise<PaymentSplitterFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PaymentSplitterFactory {
    return super.attach(address) as PaymentSplitterFactory;
  }
  connect(signer: Signer): PaymentSplitterFactory__factory {
    return super.connect(signer) as PaymentSplitterFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentSplitterFactoryInterface {
    return new utils.Interface(_abi) as PaymentSplitterFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentSplitterFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PaymentSplitterFactory;
  }
}