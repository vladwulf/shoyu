/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DutchAuction, DutchAuctionInterface } from "../DutchAuction";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "canBid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bidPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "canClaim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610395806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635f11a72b1461003b578063651199511461006a575b600080fd5b6100566100493660046101bd565b6000979650505050505050565b604051901515815260200160405180910390f35b6100566100783660046101bd565b6000806000808980602001905181019061009291906102b0565b9250925092508183116100ec5760405162461bcd60e51b815260206004820152601a60248201527f53484f59553a20494e56414c49445f50524943455f52414e474500000000000060448201526064015b60405180910390fd5b8a811061013b5760405162461bcd60e51b815260206004820152601a60248201527f53484f59553a20494e56414c49445f53544152545f424c4f434b00000000000060448201526064016100e3565b6000610147828d61031c565b610151848661031c565b61015b91906102dd565b905060008161016a844361031c565b61017491906102fd565b61017e908661031c565b90508c43111580156101905750808a10155b9d9c50505050505050505050505050565b80356001600160a01b03811681146101b857600080fd5b919050565b600080600080600080600060e0888a0312156101d7578283fd5b87359650602088013567ffffffffffffffff808211156101f5578485fd5b818a0191508a601f830112610208578485fd5b81358181111561021a5761021a610349565b604051601f8201601f19908116603f0116810190838211818310171561024257610242610349565b816040528281528d602084870101111561025a578788fd5b8260208601602083013791820160200187905250975061027f915050604089016101a1565b945060608801359350610294608089016101a1565b925060a0880135915060c0880135905092959891949750929550565b6000806000606084860312156102c4578283fd5b8351925060208401519150604084015190509250925092565b6000826102f857634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561031757610317610333565b500290565b60008282101561032e5761032e610333565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220a72b6e7f223b38af7a67e933c473a49b342adcf81caa07fd583c7a06006b155464736f6c63430008030033";

export class DutchAuction__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DutchAuction> {
    return super.deploy(overrides || {}) as Promise<DutchAuction>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DutchAuction {
    return super.attach(address) as DutchAuction;
  }
  connect(signer: Signer): DutchAuction__factory {
    return super.connect(signer) as DutchAuction__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DutchAuctionInterface {
    return new utils.Interface(_abi) as DutchAuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DutchAuction {
    return new Contract(address, _abi, signerOrProvider) as DutchAuction;
  }
}
