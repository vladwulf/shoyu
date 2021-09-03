/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ReentrancyGuardInitializable,
  ReentrancyGuardInitializableInterface,
} from "../ReentrancyGuardInitializable";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x5c8d7c6e",
        type: "bytes32",
      },
    ],
    name: "c_0x5c8d7c6e",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

export class ReentrancyGuardInitializable__factory {
  static readonly abi = _abi;
  static createInterface(): ReentrancyGuardInitializableInterface {
    return new utils.Interface(_abi) as ReentrancyGuardInitializableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyGuardInitializable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReentrancyGuardInitializable;
  }
}
