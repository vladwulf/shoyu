/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155Mock, ERC1155MockInterface } from "../ERC1155Mock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xc7250efb",
        type: "bytes32",
      },
    ],
    name: "c_0xc7250efb",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600481526020017f4d4f434b0000000000000000000000000000000000000000000000000000000081525062000059816200006060201b60201c565b5062000191565b8060029080519060200190620000789291906200007c565b5050565b8280546200008a906200012c565b90600052602060002090601f016020900481019282620000ae5760008555620000fa565b82601f10620000c957805160ff1916838001178555620000fa565b82800160010185558215620000fa579182015b82811115620000f9578251825591602001919060010190620000dc565b5b5090506200010991906200010d565b5090565b5b80821115620001285760008160009055506001016200010e565b5090565b600060028204905060018216806200014557607f821691505b602082108114156200015c576200015b62000162565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b612e1980620001a16000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c80634e1273f4116100715780634e1273f414610175578063731133e9146101a5578063a22cb465146101c1578063e985e9c5146101dd578063f242432a1461020d578063fdd94ed314610229576100a8565b8062fdd58e146100ad57806301ffc9a7146100dd5780630e89341c1461010d5780631f7fdffa1461013d5780632eb2c2d614610159575b600080fd5b6100c760048036038101906100c29190611e2b565b610245565b6040516100d4919061254f565b60405180910390f35b6100f760048036038101906100f29190611f77565b61030e565b60405161010491906123b2565b60405180910390f35b61012760048036038101906101229190611fc9565b6103f0565b60405161013491906123cd565b60405180910390f35b61015760048036038101906101529190611d44565b610484565b005b610173600480360381019061016e9190611bf6565b61051a565b005b61018f600480360381019061018a9190611ee2565b610910565b60405161019c9190612359565b60405180910390f35b6101bf60048036038101906101ba9190611e67565b610ac1565b005b6101db60048036038101906101d69190611def565b610b57565b005b6101f760048036038101906101f29190611bba565b610cd8565b60405161020491906123b2565b60405180910390f35b61022760048036038101906102229190611cb5565b610d6c565b005b610243600480360381019061023e9190611f4e565b611084565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156102b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad9061242f565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d957507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e957506103e882611087565b5b9050919050565b6060600280546103ff906127fc565b80601f016020809104026020016040519081016040528092919081815260200182805461042b906127fc565b80156104785780601f1061044d57610100808354040283529160200191610478565b820191906000526020600020905b81548152906001019060200180831161045b57829003601f168201915b50505050509050919050565b6104b07f0244a8f67b4f6e1ed15a3340f58758d7ef41af9b725c4f8a4b77f969bec0913060001b611084565b6104dc7fdbfd76eebd953ba896324e00d6cf5df755d4687237161b72fb394151d92d059160001b611084565b6105087f3c74b45429260d12a65bb014fd0add83815a82b00c4db1490d077cd3346e6a0260001b611084565b610514848484846110f1565b50505050565b815183511461055e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105559061250f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156105ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c59061246f565b60405180910390fd5b6105d661135b565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061061c575061061b8561061661135b565b610cd8565b5b61065b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106529061248f565b60405180910390fd5b600061066561135b565b9050610675818787878787611363565b60005b845181101561087b5760008582815181106106bc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190506000858381518110610701577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156107a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610799906124af565b60405180910390fd5b81816107ae9190612708565b60008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461086091906126b2565b92505081905550505050806108749061285f565b9050610678565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516108f292919061237b565b60405180910390a461090881878787878761136b565b505050505050565b60608151835114610956576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094d906124ef565b60405180910390fd5b6000835167ffffffffffffffff811115610999577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156109c75781602001602082028036833780820191505090505b50905060005b8451811015610ab657610a60858281518110610a12577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151858381518110610a53577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151610245565b828281518110610a99577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080610aaf9061285f565b90506109cd565b508091505092915050565b610aed7fe9bd52a1180e5bf81be87b44c3d0cc4e6b2b42fd6a0c6a24668d3d71a0f2645c60001b611084565b610b197f82d9df1b99d6860f0d42e86331907ef3c03c237b1cf2974969ba93965835c33f60001b611084565b610b457f7d7bb5af212da694c5c1e1a36f8400d4187303d8ebc5a07fe5db6566cebdbf7260001b611084565b610b5184848484611552565b50505050565b8173ffffffffffffffffffffffffffffffffffffffff16610b7661135b565b73ffffffffffffffffffffffffffffffffffffffff161415610bcd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc4906124cf565b60405180910390fd5b8060016000610bda61135b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610c8761135b565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ccc91906123b2565b60405180910390a35050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610ddc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd39061246f565b60405180910390fd5b610de461135b565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610e2a5750610e2985610e2461135b565b610cd8565b5b610e69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e609061244f565b60405180910390fd5b6000610e7361135b565b9050610e93818787610e84886116e8565b610e8d886116e8565b87611363565b600080600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610f2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f21906124af565b60405180910390fd5b8381610f369190612708565b60008087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360008087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fe891906126b2565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62888860405161106592919061256a565b60405180910390a461107b8288888888886117ae565b50505050505050565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611161576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111589061252f565b60405180910390fd5b81518351146111a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119c9061250f565b60405180910390fd5b60006111af61135b565b90506111c081600087878787611363565b60005b84518110156112c557838181518110611205577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600080878481518110611249577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112ab91906126b2565b9250508190555080806112bd9061285f565b9150506111c3565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161133d92919061237b565b60405180910390a46113548160008787878761136b565b5050505050565b600033905090565b505050505050565b61138a8473ffffffffffffffffffffffffffffffffffffffff16611995565b1561154a578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b81526004016113d0959493929190612297565b602060405180830381600087803b1580156113ea57600080fd5b505af192505050801561141b57506040513d601f19601f820116820180604052508101906114189190611fa0565b60015b6114c157611427612935565b806308c379a01415611484575061143c612cda565b806114475750611486565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147b91906123cd565b60405180910390fd5b505b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b8906123ef565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611548576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153f9061240f565b60405180910390fd5b505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156115c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115b99061252f565b60405180910390fd5b60006115cc61135b565b90506115ed816000876115de886116e8565b6115e7886116e8565b87611363565b8260008086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461164c91906126b2565b925050819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6287876040516116ca92919061256a565b60405180910390a46116e1816000878787876117ae565b5050505050565b60606000600167ffffffffffffffff81111561172d577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561175b5781602001602082028036833780820191505090505b5090508281600081518110611799577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080915050919050565b6117cd8473ffffffffffffffffffffffffffffffffffffffff16611995565b1561198d578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b81526004016118139594939291906122ff565b602060405180830381600087803b15801561182d57600080fd5b505af192505050801561185e57506040513d601f19601f8201168201806040525081019061185b9190611fa0565b60015b6119045761186a612935565b806308c379a014156118c7575061187f612cda565b8061188a57506118c9565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118be91906123cd565b60405180910390fd5b505b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118fb906123ef565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461198b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119829061240f565b60405180910390fd5b505b505050505050565b600080823b905060008111915050919050565b60006119bb6119b6846125b8565b612593565b905080838252602082019050828560208602820111156119da57600080fd5b60005b85811015611a0a57816119f08882611abe565b8452602084019350602083019250506001810190506119dd565b5050509392505050565b6000611a27611a22846125e4565b612593565b90508083825260208201905082856020860282011115611a4657600080fd5b60005b85811015611a765781611a5c8882611ba5565b845260208401935060208301925050600181019050611a49565b5050509392505050565b6000611a93611a8e84612610565b612593565b905082815260208101848484011115611aab57600080fd5b611ab68482856127ba565b509392505050565b600081359050611acd81612d70565b92915050565b600082601f830112611ae457600080fd5b8135611af48482602086016119a8565b91505092915050565b600082601f830112611b0e57600080fd5b8135611b1e848260208601611a14565b91505092915050565b600081359050611b3681612d87565b92915050565b600081359050611b4b81612d9e565b92915050565b600081359050611b6081612db5565b92915050565b600081519050611b7581612db5565b92915050565b600082601f830112611b8c57600080fd5b8135611b9c848260208601611a80565b91505092915050565b600081359050611bb481612dcc565b92915050565b60008060408385031215611bcd57600080fd5b6000611bdb85828601611abe565b9250506020611bec85828601611abe565b9150509250929050565b600080600080600060a08688031215611c0e57600080fd5b6000611c1c88828901611abe565b9550506020611c2d88828901611abe565b945050604086013567ffffffffffffffff811115611c4a57600080fd5b611c5688828901611afd565b935050606086013567ffffffffffffffff811115611c7357600080fd5b611c7f88828901611afd565b925050608086013567ffffffffffffffff811115611c9c57600080fd5b611ca888828901611b7b565b9150509295509295909350565b600080600080600060a08688031215611ccd57600080fd5b6000611cdb88828901611abe565b9550506020611cec88828901611abe565b9450506040611cfd88828901611ba5565b9350506060611d0e88828901611ba5565b925050608086013567ffffffffffffffff811115611d2b57600080fd5b611d3788828901611b7b565b9150509295509295909350565b60008060008060808587031215611d5a57600080fd5b6000611d6887828801611abe565b945050602085013567ffffffffffffffff811115611d8557600080fd5b611d9187828801611afd565b935050604085013567ffffffffffffffff811115611dae57600080fd5b611dba87828801611afd565b925050606085013567ffffffffffffffff811115611dd757600080fd5b611de387828801611b7b565b91505092959194509250565b60008060408385031215611e0257600080fd5b6000611e1085828601611abe565b9250506020611e2185828601611b27565b9150509250929050565b60008060408385031215611e3e57600080fd5b6000611e4c85828601611abe565b9250506020611e5d85828601611ba5565b9150509250929050565b60008060008060808587031215611e7d57600080fd5b6000611e8b87828801611abe565b9450506020611e9c87828801611ba5565b9350506040611ead87828801611ba5565b925050606085013567ffffffffffffffff811115611eca57600080fd5b611ed687828801611b7b565b91505092959194509250565b60008060408385031215611ef557600080fd5b600083013567ffffffffffffffff811115611f0f57600080fd5b611f1b85828601611ad3565b925050602083013567ffffffffffffffff811115611f3857600080fd5b611f4485828601611afd565b9150509250929050565b600060208284031215611f6057600080fd5b6000611f6e84828501611b3c565b91505092915050565b600060208284031215611f8957600080fd5b6000611f9784828501611b51565b91505092915050565b600060208284031215611fb257600080fd5b6000611fc084828501611b66565b91505092915050565b600060208284031215611fdb57600080fd5b6000611fe984828501611ba5565b91505092915050565b6000611ffe8383612279565b60208301905092915050565b6120138161273c565b82525050565b600061202482612651565b61202e818561267f565b935061203983612641565b8060005b8381101561206a5781516120518882611ff2565b975061205c83612672565b92505060018101905061203d565b5085935050505092915050565b6120808161274e565b82525050565b60006120918261265c565b61209b8185612690565b93506120ab8185602086016127c9565b6120b481612957565b840191505092915050565b60006120ca82612667565b6120d481856126a1565b93506120e48185602086016127c9565b6120ed81612957565b840191505092915050565b60006121056034836126a1565b915061211082612975565b604082019050919050565b60006121286028836126a1565b9150612133826129c4565b604082019050919050565b600061214b602b836126a1565b915061215682612a13565b604082019050919050565b600061216e6029836126a1565b915061217982612a62565b604082019050919050565b60006121916025836126a1565b915061219c82612ab1565b604082019050919050565b60006121b46032836126a1565b91506121bf82612b00565b604082019050919050565b60006121d7602a836126a1565b91506121e282612b4f565b604082019050919050565b60006121fa6029836126a1565b915061220582612b9e565b604082019050919050565b600061221d6029836126a1565b915061222882612bed565b604082019050919050565b60006122406028836126a1565b915061224b82612c3c565b604082019050919050565b60006122636021836126a1565b915061226e82612c8b565b604082019050919050565b612282816127b0565b82525050565b612291816127b0565b82525050565b600060a0820190506122ac600083018861200a565b6122b9602083018761200a565b81810360408301526122cb8186612019565b905081810360608301526122df8185612019565b905081810360808301526122f38184612086565b90509695505050505050565b600060a082019050612314600083018861200a565b612321602083018761200a565b61232e6040830186612288565b61233b6060830185612288565b818103608083015261234d8184612086565b90509695505050505050565b600060208201905081810360008301526123738184612019565b905092915050565b600060408201905081810360008301526123958185612019565b905081810360208301526123a98184612019565b90509392505050565b60006020820190506123c76000830184612077565b92915050565b600060208201905081810360008301526123e781846120bf565b905092915050565b60006020820190508181036000830152612408816120f8565b9050919050565b600060208201905081810360008301526124288161211b565b9050919050565b600060208201905081810360008301526124488161213e565b9050919050565b6000602082019050818103600083015261246881612161565b9050919050565b6000602082019050818103600083015261248881612184565b9050919050565b600060208201905081810360008301526124a8816121a7565b9050919050565b600060208201905081810360008301526124c8816121ca565b9050919050565b600060208201905081810360008301526124e8816121ed565b9050919050565b6000602082019050818103600083015261250881612210565b9050919050565b6000602082019050818103600083015261252881612233565b9050919050565b6000602082019050818103600083015261254881612256565b9050919050565b60006020820190506125646000830184612288565b92915050565b600060408201905061257f6000830185612288565b61258c6020830184612288565b9392505050565b600061259d6125ae565b90506125a9828261282e565b919050565b6000604051905090565b600067ffffffffffffffff8211156125d3576125d2612906565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156125ff576125fe612906565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561262b5761262a612906565b5b61263482612957565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006126bd826127b0565b91506126c8836127b0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156126fd576126fc6128a8565b5b828201905092915050565b6000612713826127b0565b915061271e836127b0565b925082821015612731576127306128a8565b5b828203905092915050565b600061274782612790565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156127e75780820151818401526020810190506127cc565b838111156127f6576000848401525b50505050565b6000600282049050600182168061281457607f821691505b60208210811415612828576128276128d7565b5b50919050565b61283782612957565b810181811067ffffffffffffffff8211171561285657612855612906565b5b80604052505050565b600061286a826127b0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561289d5761289c6128a8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060033d11156129545760046000803e612951600051612968565b90505b90565b6000601f19601f8301169050919050565b60008160e01c9050919050565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600060443d1015612cea57612d6d565b612cf26125ae565b60043d036004823e80513d602482011167ffffffffffffffff82111715612d1a575050612d6d565b808201805167ffffffffffffffff811115612d385750505050612d6d565b80602083010160043d038501811115612d55575050505050612d6d565b612d648260200185018661282e565b82955050505050505b90565b612d798161273c565b8114612d8457600080fd5b50565b612d908161274e565b8114612d9b57600080fd5b50565b612da78161275a565b8114612db257600080fd5b50565b612dbe81612764565b8114612dc957600080fd5b50565b612dd5816127b0565b8114612de057600080fd5b5056fea2646970667358221220da82f129225a93e32c95ef7e4be4d43f02d1e1e21e6896f90d35748309f1be6f64736f6c63430008030033";

export class ERC1155Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155Mock> {
    return super.deploy(overrides || {}) as Promise<ERC1155Mock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155Mock {
    return super.attach(address) as ERC1155Mock;
  }
  connect(signer: Signer): ERC1155Mock__factory {
    return super.connect(signer) as ERC1155Mock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155MockInterface {
    return new utils.Interface(_abi) as ERC1155MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Mock;
  }
}