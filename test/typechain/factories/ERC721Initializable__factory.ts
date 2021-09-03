/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721Initializable,
  ERC721InitializableInterface,
} from "../ERC721Initializable";

const _abi = [
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
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
        internalType: "bytes32",
        name: "c__0xe8b1499b",
        type: "bytes32",
      },
    ],
    name: "c_0xe8b1499b",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "name",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        name: "tokenId",
        type: "uint256",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
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
    inputs: [],
    name: "symbol",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506139f9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063b88d4fde11610066578063b88d4fde1461025b578063c87b56dd14610277578063d8d5d48b146102a7578063e985e9c5146102c3576100ea565b806370a08231146101f157806395d89b4114610221578063a22cb4651461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190612f98565b6102f3565b60405161011691906132a9565b60405180910390f35b610127610459565b60405161013491906132c4565b60405180910390f35b61015760048036038101906101529190612fea565b61056f565b6040516101649190613242565b60405180910390f35b61018760048036038101906101829190612f33565b610728565b005b6101a3600480360381019061019e9190612e2d565b610a6e565b005b6101bf60048036038101906101ba9190612e2d565b610bfb565b005b6101db60048036038101906101d69190612fea565b610c9f565b6040516101e89190613242565b60405180910390f35b61020b60048036038101906102069190612dc8565b610d60565b6040516102189190613406565b60405180910390f35b610229610f4d565b60405161023691906132c4565b60405180910390f35b61025960048036038101906102549190612ef7565b611063565b005b61027560048036038101906102709190612e7c565b6110f6565b005b610291600480360381019061028c9190612fea565b611285565b60405161029e91906132c4565b60405180910390f35b6102c160048036038101906102bc9190612f6f565b6114b8565b005b6102dd60048036038101906102d89190612df1565b6114bb565b6040516102ea91906132a9565b60405180910390f35b60006103217f06be85ae5fd59d81793d986f179226210cd2a451584470871fe766d858f9093660001b6114b8565b61034d7f956aa1d11c4b80776523b0330d724ab8225eb75a9a507fbab769b5448116e55160001b6114b8565b6103797fcfbdb3ed594628a20355a66d48294a44f2d662e941156ddc6d723d4a75dfe28b60001b6114b8565b7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061044257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104525750610451826115d3565b5b9050919050565b60606104877f695655d038e8cf2d972c949df8fed2e65cf582e0a68fe089f5ac6a0d7f8b4d6d60001b6114b8565b6104b37f9f2dd065037fbdba984ed4080c89eb2bdc0d4df39c1085e74eabeb9c450f408e60001b6114b8565b6104df7f5f147e0a216ef8cc26dcdca939d4a59d93a0333b6e8d03ffb3de66c4c1f7fa3f60001b6114b8565b600180546104ec90613635565b80601f016020809104026020016040519081016040528092919081815260200182805461051890613635565b80156105655780601f1061053a57610100808354040283529160200191610565565b820191906000526020600020905b81548152906001019060200180831161054857829003601f168201915b5050505050905090565b600061059d7fdfb566ab6238487451799fca8dff8a07c1cce4d05b95f8e5c52e42579f69767160001b6114b8565b6105c97f209e8aa4d59854f7b63718cd781fe13a63ecbe3eb0c8218b8528da3e689cd54f60001b6114b8565b6105f57fb6c08503564881fb9f8b905e76d27930a437bc502991ddd0a58ee4c1c7e3b51160001b6114b8565b6106217fd1feb9f8c93ab3eef4d8a5b0876d9bb7c639abd9f48a1c08a65450a63fd2ecce60001b6114b8565b61062a8261163d565b610669576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066090613346565b60405180910390fd5b6106957ff51937b132194f88dbaf9fd3da4d6b423ac25cf94189e62f63709f82f426ca7f60001b6114b8565b6106c17fb0e5826354eefe7f38e068b0be91533ee1ba43dcb2e1233f9564c2b64c86292560001b6114b8565b6106ed7f96a1716b47fa3869eaa1912657be9f8174a32ec65e382817fbde7d75a0b551c360001b6114b8565b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6107547f41a069a82c9be95ad3e0aca047a05e43f1671eeb778cfde8cd036d8de0688d4860001b6114b8565b6107807f8bd17eec7747eb514802b688206a6d768a961a4bcdd8127245b45835ef1d1ee360001b6114b8565b6107ac7f72e05733fc8949ddb9a70bfc007b078af5562535f78905b7d969d652296eb77f60001b6114b8565b60006107b782610c9f565b90506107e57fefdfe976746a1a7470fd5baff7a1503ec4f7357cd5db104b4c4040db2ab2d83660001b6114b8565b6108117ff7c8985d6cf6a60f7c0471b0eb4b4434f4d7f421c9266955809a46223f7596cd60001b6114b8565b61083d7f5cb574f53c2a3efaaf0d168b1368c131722d377c42b0b63b87a5a0820d37c50060001b6114b8565b8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a3906133a6565b60405180910390fd5b6108d87fa784dbc33ba98a861490a440424a5f7a267ebc2130f5ca091c0e4883149b38b460001b6114b8565b6109047fd7ba29912f09eb469cd3f9d5ed125248421eaa767036be3903a12163912f4eb360001b6114b8565b6109307fcfebaa317b464fc14bbdf881b76f45c655e0f6782af5a45dd6167e13336702ee60001b6114b8565b61095c7f05943e02e9c32c806dd9925e5122e0a8e654034f91f40ab5aa15f58e38c3c2a360001b6114b8565b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061099c575061099b81336114bb565b5b6109db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d290613306565b60405180910390fd5b610a077fb5474aa309b43d40f02c514123c37c4eab5ed88b162e1f44908a9ed24361dd3f60001b6114b8565b610a337ff7e70b1afe4851405c73f6739daeb33a7fedb29ed429ce01cda82f638a6aa63b60001b6114b8565b610a5f7fcdfd30de0cfaa8e5b03e3e77ece7d69151706414a733fe6ad0256a26d94df9d960001b6114b8565b610a69838361172e565b505050565b610a9a7fab8efa127f17f879f62aa860369fb684bfb7867630ddb40a73dc62c25de3d55660001b6114b8565b610ac67f5bc92207e4bf5c5253c0f9d72f3813106d8d08c1d512b133e84a06060d952eab60001b6114b8565b610af27f015b2036f442de95c64d960c4d4c5d62104ccf108b59696edc1136ac011800dc60001b6114b8565b610b1e7f7d37e1837769e90d19ca147470721ae88b97b0bf3f58d27084b17f264f566b2e60001b6114b8565b610b2833826118c3565b610b67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5e906133e6565b60405180910390fd5b610b937f1c2a27dce7c8a6a6808a4f040f7aba18fce2e6820994c4d4aea90c394431905c60001b6114b8565b610bbf7fbbabd742a3847259662bfbd0f667e50e36e0023b439d8cdf7058997c279e371060001b6114b8565b610beb7f434c16a5cea352e344f922d983e4773a02ca50e8d4cf51e0d79f6845fa6a7e3060001b6114b8565b610bf6838383611b2d565b505050565b610c277f797f38df31521673b631201625ba75b9f27510b85b736772c7ab047cadb4d7ab60001b6114b8565b610c537f5bde06d2b442960d496fb307b099523a4f92919ebdc9a61538acf69a1186986060001b6114b8565b610c7f7fd16e12817721218c6c157082440fdd3fd6877f4ced8d25dcef3cbf65279357c060001b6114b8565b610c9a838383604051806020016040528060008152506110f6565b505050565b6000610ccd7f1b9fd9638d68cc0e73a638f49a42de5d9d89f131ed50a353c8dfc022bf5ae39360001b6114b8565b610cf97f1135e43b6050912513bc3a12b19df101af9298e5e4bb50333f7fc7f984da65fa60001b6114b8565b610d257f2a3c34435dc1a70e874d83afed7062ea21500fb09eb47959b02cae3f4c273f4c60001b6114b8565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610d8e7f55c3156d6352103369ab6d028324f383ed8dc26e9ce30ca23ea2ad205dc1de3160001b6114b8565b610dba7f24457ef149789f0aa6880c8dc1e062f1e215484283fbbc1ee930e4f295ce85ab60001b6114b8565b610de67fd79835ed273ee9be739792ec623c8665918f3dbc4d250ac23037dae72e8981d360001b6114b8565b610e127f98cb5ecf464e8439618d9f567033c882e97f382939fc5552385b34eae8d7538360001b6114b8565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7990613366565b60405180910390fd5b610eae7f3884e1f1754d33d1583b136c48ab25affa42166e8f817087ad99dd6e443b590860001b6114b8565b610eda7fecae44efd2a6770a93f2daee3cb930c8c73c5f9612c2abda0107fe56b16c538660001b6114b8565b610f067ff8aaf908a859d8dde2c669f6371267e26792de4bd1a10b4d6bd91ce7377c70a560001b6114b8565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060610f7b7f5b08929cd57e48d0b4f5cc4c58902c38e7483ce9cd7442c44e9c087e0f294cd460001b6114b8565b610fa77f850a586ba62489bfbcf50d220790525f483a771a9474c483c3303eeeda9478fc60001b6114b8565b610fd37f4377345b291bd9d14fc1731bf120fba102d1bc0b87bf3319556d27ba6c09677d60001b6114b8565b60028054610fe090613635565b80601f016020809104026020016040519081016040528092919081815260200182805461100c90613635565b80156110595780601f1061102e57610100808354040283529160200191611059565b820191906000526020600020905b81548152906001019060200180831161103c57829003601f168201915b5050505050905090565b61108f7f249e588126bfce611b5f7aa05ce0b0dd87ef713f8c3f72b6cea3bcb8b7a5f87a60001b6114b8565b6110bb7fca15e2625572417e244c0aa71f35ed14bb63e0af5e13d6e77654f909ed21f72860001b6114b8565b6110e77fb17ca1dc349a2efbb182a3569545ee4adae6b9a1a02f28559964a1f8e00003cb60001b6114b8565b6110f2338383612125565b5050565b6111227f40c4ea1f387154cf605882a4212fb5d7e19c4fc7e9b3d2771fe5225486ef8e1f60001b6114b8565b61114e7f783ea8778893d5ba69243b4bda75be0d886518c9723589ace5c700c37d706b7460001b6114b8565b61117a7f607283fee36a2bf822e5542ccd367217265e2fc239cbac1a753a9da3e315540b60001b6114b8565b6111a67f342bf3a79ab38abb29beff33802b6d592904e142d45cbb1ccad630b86cb6a80d60001b6114b8565b6111b033836118c3565b6111ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e690613306565b60405180910390fd5b61121b7ff101bc0d057de8228e6258285433cf42eeecf44fb0603aaabb0966d5b5361ce560001b6114b8565b6112477f5107e9f1700a5fc9e7f7ea4149db6669b7b01b1ef2cc457c1f93caac36606bf560001b6114b8565b6112737f66e1dce1ddf2cf487631f86ee7b77f29724c510788852ae89c11bad009b133b060001b6114b8565b61127f8484848461241e565b50505050565b60606112b37fddfcbfd611e4c73f8a77e63a3959d4733dfe6d44610838a456b72ff79cbddd1c60001b6114b8565b6112df7f4fb0bbf26d0e6cab03aa715c03039dfb5eb58c41f70a3cc369629b8f94a1a6b360001b6114b8565b61130b7fc7982f93218a43d78daee66ec6314f85952dc491d21cdd138ac0ab33438ce74460001b6114b8565b6113377f40f7b8d430f12d7cf1ff4751e0df7e94c5061438925252e09fec5be93188257b60001b6114b8565b6113408261163d565b61137f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137690613346565b60405180910390fd5b6113ab7fbd9973de94f83e24b47e18426ad8028d3cf63ff8f0638b47cee7e6a84da753ec60001b6114b8565b6113d77ffd2bf9345dbcefa4ba3be189c66ac50528796c82412240eb2f491395699e0bca60001b6114b8565b6114037f8c1fde316eeba62afdd63aa235a531492dd243d4f712509f3196d0b0f51d99dd60001b6114b8565b600061140d6125ae565b905061143b7f2a63eb0e1191867794f2bb101311accd1dcfc6315e5c6d448e5cb4c372e67a0760001b6114b8565b6114677fe7f3a00a49304a406b70ea14be6489b6164b5bcabf25d3fa254fe2604f3934d960001b6114b8565b600081511161148557604051806020016040528060008152506114b0565b8061148f84612649565b6040516020016114a092919061321e565b6040516020818303038152906040525b915050919050565b50565b60006114e97f327b656fbe6e2d2b8026947cdc9d5bc880383cc1b07c1509662026cc4b1c789260001b6114b8565b6115157fc70047a3e1453be573f88961a30b82c7353b66fb37b8e14a75b06625ea2f287c60001b6114b8565b6115417fb872bb1a3c824e0124acb7df8de147f6c75fe6f76020035d3ec80ff5f25323d160001b6114b8565b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600061166b7f305e071d0a5f9fe8ca9070b7acde765b4b4ca5f4f8acb16ad33ff3bf7cf81a6560001b6114b8565b6116977ff0d520add4b26d53308b85754b2e1524db6b356b79a1104670705083313a996a60001b6114b8565b6116c37f46aec8d83c9dadd81dae66e730d3393e0034b2f8e8adbaa2a80c7f5dae1535ff60001b6114b8565b600073ffffffffffffffffffffffffffffffffffffffff166004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b61175a7fbe20140c22b867d0b7749db030e80eec3389be9371baca76078e8baf1ea842ac60001b6114b8565b6117867f3255f60e6ed1efbf9011b56fdfe80db1ed0d9b93f24a95ad140b2673a40930dd60001b6114b8565b6117b27fa0d6d288a63f2629b649655fb13308dbabb5155922b1524ae8b44a260f5273ed60001b6114b8565b816006600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506118307f4ce8c32fb44d542c1a5500d7d3929ea4aac734609043ccd6dca34e9d9045d3d660001b6114b8565b61185c7f8475bddeba0faed49a1df3a406c71fb971f894afd4985bafd34a6b5af6181dbb60001b6114b8565b808273ffffffffffffffffffffffffffffffffffffffff1661187d83610c9f565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006118f17f857931b26fd4edb94985e0340b0dc7c6c15c001e65b893d08ea7fd2e5039376d60001b6114b8565b61191d7fdbe5cb984c95efb3a876ad239672854701bde98cf55e4fc69cb030c4cf1bc0c560001b6114b8565b6119497f61715517966044678f98bf09627a7f62b8f245359280440a115c94b00abdc80760001b6114b8565b6119757f7d72782f25ff0d12c9b5f23194ec6e97652c98d66ac32721c1ad8082bfc6d62460001b6114b8565b61197e8261163d565b6119bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119b490613346565b60405180910390fd5b6119e97f4084ba6cf1cb07b827bf4e6900343f1aebac8076d4760ae7f4c4e780ed87f9b660001b6114b8565b611a157fc8f95b8823a6d0f5c28aa91b66902b411c2ebbfb61a5b904a3af1fb10d8ecb4960001b6114b8565b611a417fa7ae03625e98f9a2290a1043b0a4ce0c10728bb8255ad0d9f2496cc51e4fa7fd60001b6114b8565b6000611a4c83610c9f565b9050611a7a7fac861f2950d1a550c758f861afcc361d3a868da94229a284cc176cfc1649ca2a60001b6114b8565b611aa67f406042f9e4a6de73c2e7da574c12cc2690919e33a070a567ffdb380ea260bdf860001b6114b8565b8073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611b1357508373ffffffffffffffffffffffffffffffffffffffff16611afb8461056f565b73ffffffffffffffffffffffffffffffffffffffff16145b80611b245750611b2381856114bb565b5b91505092915050565b611b597f512baa5bc17064fc6baca61996f5ef6cee872e915687fec9526b4e428a1b6a4c60001b6114b8565b611b857f5562726f0e4981b36ca155249ebb41b3297936cd518bdcd3720de97699b9788660001b6114b8565b611bb17fccf6ebd2d8eca5d9c0d1ed8f1e350b7ce3b8a25f0a0cec6b0dc93f93d7fa22f460001b6114b8565b611bdd7f3f92bb1ea48837cebda954070e066173613abc5d9a134437cbd8cdca9bbc64f060001b6114b8565b8273ffffffffffffffffffffffffffffffffffffffff16611bfd82610c9f565b73ffffffffffffffffffffffffffffffffffffffff1614611c53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c4a906133c6565b60405180910390fd5b611c7f7f40538ff5d2735bd9aa524d30ac5eb6f6ed40247fb00ac2ef2e589bdee3a7a70560001b6114b8565b611cab7f47a85c70ff0cbd9044ef55b319b935d9d6ae7e342d1e3c964f711dd7f48b921c60001b6114b8565b611cd77fc1122535a86e3a949f2f906ad4142b2be40728f0e54d859c3d15469dc3d787f360001b6114b8565b611d037f5144c41e90d0849ef28d132eed2182b8c4d8becdb5be3c670d52d4235a13b5d660001b6114b8565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d6a90613386565b60405180910390fd5b611d9f7fd882e71e9ec61eace0da70b2d217f479b9b3e3b47f963c06af39bea28f3c642460001b6114b8565b611dcb7f56b287e3a31a758431787c1b461f204d77314079db95430836ad6283126158a860001b6114b8565b611df77f961dd10c4850d0f4661d84bfb9a8a71730b9ae482caef3784ea0ce4ba3b410bc60001b6114b8565b611e028383836127f6565b611e2e7f3e5d2565d50a7505443097516240df683173bbf1ce5ac0595c2242e3fe232f4d60001b6114b8565b611e5a7f0ac91a2bf20d91617981d1e35adad422e28b9e866df3ee897f833e8f7d22990860001b6114b8565b611e6560008261172e565b611e917f64298c9c450649df96dc411807069b351d1db2f9dda4529e7bf59ff2d5edaec960001b6114b8565b611ebd7f51371a3f2ee048ac1ca9e65a1e08d5a48d34016e84771e6859968932fc0d8d9460001b6114b8565b6001600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611f0d9190613541565b92505081905550611f407f5867ba8eca823df68527b0e10c9ccb38c1eb6ba5abd4e7600772ba18abd8cd0b60001b6114b8565b611f6c7fb58ee8a053eb8e0be8a38397074114c2de16f5cced716232899d46d18e060b7460001b6114b8565b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611fbc91906134ba565b92505081905550611fef7f65d9223da53ab341c0f833c72c1cc1f562ca76c852cf3c9ad128489152364e7460001b6114b8565b61201b7f0c8bc2d9744105e14ee6557f4a8267c6fb0b30fc5ffef4b49d1a6d51cafbab3b60001b6114b8565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506120997f38f64288dd61391a4415bdbd4f1942c4bc75de9bc11e0586117be6936d0cacf460001b6114b8565b6120c57fe2c90e80e65f4ee89a97e1172edc6dc97637f58841ff8dbcecdd0e83d07971a560001b6114b8565b808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6121517f374b7daa1cba92c7f0433b493d2ce22d765ea67c7f2b84268b90f9eb47a7e16760001b6114b8565b61217d7f032ba232ddcfd3f91da9f96f98a1b9cf12e878bc734c73899af5508f2103c63c60001b6114b8565b6121a97f41b66232c3d3cb7de03a13b07e17aab0385fa657f6f45ba53d6b09854ca647dd60001b6114b8565b6121d57ff6ca825d6c71fa2bf892df8d25ec2d65547045afe9afb50bffd6096eb386e93c60001b6114b8565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612244576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161223b906132e6565b60405180910390fd5b6122707ffcd4df504d3c0200a6160d838d2ed4db0f84132f0b6cf6a33a86ba1b6bb91dc260001b6114b8565b61229c7f92118ad740cacda7b5e83467c167339266d43a368f7ae2da3515aa12df7706b160001b6114b8565b6122c87f1b972be5226db18b2aad4cce61705754e850237fd5316e5b008fe7a85ec788d760001b6114b8565b80600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506123887f0defc27a5247595f8152a6a50ff33e08b347bbb11e0f224ef26573ee322181ac60001b6114b8565b6123b47f2db1ed436728b3dd5131929eb6c014d417231d7654df1adedd45585d702e63ca60001b6114b8565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161241191906132a9565b60405180910390a3505050565b61244a7fa0b5ca4b86d5fed31a3c5f54aa057ca5239835bb002c7ee34559ca83c624c37660001b6114b8565b6124767f1b4d56954227bac1be010832a38d3555dc3aa46507c625a096791415c37e56b360001b6114b8565b6124a27f26275e9ce37ed1199500fd83736e533eddfda90268e167379320aaf509ea260960001b6114b8565b6124ad848484611b2d565b6124d97fc13589e41e0bc1daaa64301dbcee0e61f7180802400cc31cf056f185766dd8a960001b6114b8565b6125057f5baa36fa02617f5e7cb9b8e9e484b6d5fc276202e169b6ef9ed8cb0f79a6a31f60001b6114b8565b6125317fe4ded55837496ff28911df60bd8d835a709b6bd8cb2b022045d651f7dd99d7a160001b6114b8565b61253d84848484612827565b61257c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161257390613326565b60405180910390fd5b6125a87f5d461b6fc9682c0a79ea5dbf0c385085bff822b333e81eb752666be1794a17b460001b6114b8565b50505050565b60606125dc7f66da3359c269db5cf7b04be63798329151a0a14b111225351d8788debc7b208160001b6114b8565b6126087fa44a71f8ea0e8375b08f15a52cdafc4a4a774f60d88e4f45d88cb53a5d5cbd7f60001b6114b8565b6126347f639583e381cbea199a84b6ea707ad3f47d23d44d196b77de88f072da18f7c2f960001b6114b8565b60405180602001604052806000815250905090565b60606000821415612691576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506127f1565b600082905060005b600082146126c35780806126ac90613698565b915050600a826126bc9190613510565b9150612699565b60008167ffffffffffffffff811115612705577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156127375781602001600182028036833780820191505090505b5090505b600085146127ea576001826127509190613541565b9150600a8561275f91906136e1565b603061276b91906134ba565b60f81b8183815181106127a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856127e39190613510565b945061273b565b8093505050505b919050565b6128227f7dd6aadd7d8af09d32bcf41c3c7e9aecc7e657ea33f7524b66a1db4b582851f560001b6114b8565b505050565b60006128557f469d9382dfff6717029f67dcbe0274b4786d9b7f472a0dbc2c9f0ccd9903349d60001b6114b8565b6128817f6adbaddec3c1d066d487cd3e9e74cdd5f18889f6ca8869cd718539d76b3da6e960001b6114b8565b6128ad7f3a4ae9d238f823e0b9592d437dd81145a85bae74b1ed80f90647a499236ef93a60001b6114b8565b6128cc8473ffffffffffffffffffffffffffffffffffffffff16612ccf565b15612c3e576128fd7fff89877585a82bbdccec2929f03b601ff1e5af5fe1f9b2e62df3ddec34bd574c60001b6114b8565b6129297fbef97464844aad73e0f6ba92c7cec48b3722d25ce79facef2a92e745586082b660001b6114b8565b6129557f363a5528e30fe4f3209d9ea35f97833102974113e68f98e073e949b14eae831d60001b6114b8565b8373ffffffffffffffffffffffffffffffffffffffff1663150b7a02338786866040518563ffffffff1660e01b8152600401612994949392919061325d565b602060405180830381600087803b1580156129ae57600080fd5b505af19250505080156129df57506040513d601f19601f820116820180604052508101906129dc9190612fc1565b60015b612b96573d8060008114612a0f576040519150601f19603f3d011682016040523d82523d6000602084013e612a14565b606091505b50612a417fe47654b89f97c5af22a719eb86aa66cd6e106d6569f2e5e1d599ca47723ac9e560001b6114b8565b612a6d7f8204b01df4fd7c40abadc618358f004c5c4304c6a41459f91e2e95a69aa9f3bb60001b6114b8565b600081511415612b3657612aa37fb3252e206ca997ab05527a6f43e6810d4abdef4e2767169a8f9a9c6a72eee12460001b6114b8565b612acf7fc276eede0056aa0db173ca7723d4db5887bd859a0416a337a6db289a2116397560001b6114b8565b612afb7f93b93ce73abb09b2d8e2c351797b67ae9e311c52d231c4739888553e2260197660001b6114b8565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b2d90613326565b60405180910390fd5b612b627f8311818072424820c1933682f0d836eeb7a6baf0be3f32465251b8e7170d2b1360001b6114b8565b612b8e7fca83494680112b67bb839b5caab558070c953f3ff4ce29e510c5c5fcc42679eb60001b6114b8565b805181602001fd5b612bc27f01bf4ed034afc72dc69dbf34746722bb585e59f6c6bd76236aded2282316943f60001b6114b8565b612bee7fd6cf83fc446ce59b0591199e0ac72acc7e1df2b8489ad9268fa1e5d0f833544b60001b6114b8565b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612cc7565b612c6a7fc1cea5e4d50c6d7a7253158b666347d039381ca62c58f0492b8303052323dfe560001b6114b8565b612c967fc41b9a4036d3fa7f82ad8b04d54c422d9ee45aac958eb82b4d511f84d2465cb460001b6114b8565b612cc27fced0e3a903e1cadb32af632f5fad041f7559037f9032a8677bf4a895eb13fa7460001b6114b8565b600190505b949350505050565b600080823b905060008111915050919050565b6000612cf5612cf084613446565b613421565b905082815260208101848484011115612d0d57600080fd5b612d188482856135f3565b509392505050565b600081359050612d2f81613950565b92915050565b600081359050612d4481613967565b92915050565b600081359050612d598161397e565b92915050565b600081359050612d6e81613995565b92915050565b600081519050612d8381613995565b92915050565b600082601f830112612d9a57600080fd5b8135612daa848260208601612ce2565b91505092915050565b600081359050612dc2816139ac565b92915050565b600060208284031215612dda57600080fd5b6000612de884828501612d20565b91505092915050565b60008060408385031215612e0457600080fd5b6000612e1285828601612d20565b9250506020612e2385828601612d20565b9150509250929050565b600080600060608486031215612e4257600080fd5b6000612e5086828701612d20565b9350506020612e6186828701612d20565b9250506040612e7286828701612db3565b9150509250925092565b60008060008060808587031215612e9257600080fd5b6000612ea087828801612d20565b9450506020612eb187828801612d20565b9350506040612ec287828801612db3565b925050606085013567ffffffffffffffff811115612edf57600080fd5b612eeb87828801612d89565b91505092959194509250565b60008060408385031215612f0a57600080fd5b6000612f1885828601612d20565b9250506020612f2985828601612d35565b9150509250929050565b60008060408385031215612f4657600080fd5b6000612f5485828601612d20565b9250506020612f6585828601612db3565b9150509250929050565b600060208284031215612f8157600080fd5b6000612f8f84828501612d4a565b91505092915050565b600060208284031215612faa57600080fd5b6000612fb884828501612d5f565b91505092915050565b600060208284031215612fd357600080fd5b6000612fe184828501612d74565b91505092915050565b600060208284031215612ffc57600080fd5b600061300a84828501612db3565b91505092915050565b61301c81613575565b82525050565b61302b81613587565b82525050565b600061303c82613477565b613046818561348d565b9350613056818560208601613602565b61305f816137ce565b840191505092915050565b600061307582613482565b61307f818561349e565b935061308f818560208601613602565b613098816137ce565b840191505092915050565b60006130ae82613482565b6130b881856134af565b93506130c8818560208601613602565b80840191505092915050565b60006130e160178361349e565b91506130ec826137df565b602082019050919050565b600061310460108361349e565b915061310f82613808565b602082019050919050565b600061312760178361349e565b915061313282613831565b602082019050919050565b600061314a60178361349e565b91506131558261385a565b602082019050919050565b600061316d60148361349e565b915061317882613883565b602082019050919050565b600061319060188361349e565b915061319b826138ac565b602082019050919050565b60006131b360118361349e565b91506131be826138d5565b602082019050919050565b60006131d660198361349e565b91506131e1826138fe565b602082019050919050565b60006131f9601d8361349e565b915061320482613927565b602082019050919050565b613218816135e9565b82525050565b600061322a82856130a3565b915061323682846130a3565b91508190509392505050565b60006020820190506132576000830184613013565b92915050565b60006080820190506132726000830187613013565b61327f6020830186613013565b61328c604083018561320f565b818103606083015261329e8184613031565b905095945050505050565b60006020820190506132be6000830184613022565b92915050565b600060208201905081810360008301526132de818461306a565b905092915050565b600060208201905081810360008301526132ff816130d4565b9050919050565b6000602082019050818103600083015261331f816130f7565b9050919050565b6000602082019050818103600083015261333f8161311a565b9050919050565b6000602082019050818103600083015261335f8161313d565b9050919050565b6000602082019050818103600083015261337f81613160565b9050919050565b6000602082019050818103600083015261339f81613183565b9050919050565b600060208201905081810360008301526133bf816131a6565b9050919050565b600060208201905081810360008301526133df816131c9565b9050919050565b600060208201905081810360008301526133ff816131ec565b9050919050565b600060208201905061341b600083018461320f565b92915050565b600061342b61343c565b90506134378282613667565b919050565b6000604051905090565b600067ffffffffffffffff8211156134615761346061379f565b5b61346a826137ce565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006134c5826135e9565b91506134d0836135e9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561350557613504613712565b5b828201905092915050565b600061351b826135e9565b9150613526836135e9565b92508261353657613535613741565b5b828204905092915050565b600061354c826135e9565b9150613557836135e9565b92508282101561356a57613569613712565b5b828203905092915050565b6000613580826135c9565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015613620578082015181840152602081019050613605565b8381111561362f576000848401525b50505050565b6000600282049050600182168061364d57607f821691505b6020821081141561366157613660613770565b5b50919050565b613670826137ce565b810181811067ffffffffffffffff8211171561368f5761368e61379f565b5b80604052505050565b60006136a3826135e9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156136d6576136d5613712565b5b600182019050919050565b60006136ec826135e9565b91506136f7836135e9565b92508261370757613706613741565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f53484f59553a20494e56414c49445f4f50455241544f52000000000000000000600082015250565b7f53484f59553a20464f5242494444454e00000000000000000000000000000000600082015250565b7f53484f59553a20494e56414c49445f5245434549564552000000000000000000600082015250565b7f53484f59553a20494e56414c49445f544f4b454e5f4944000000000000000000600082015250565b7f53484f59553a20494e56414c49445f4f574e4552000000000000000000000000600082015250565b7f53484f59553a20494e56414c49445f524543495049454e540000000000000000600082015250565b7f53484f59553a20494e56414c49445f544f000000000000000000000000000000600082015250565b7f53484f59553a205452414e534645525f464f5242494444454e00000000000000600082015250565b7f53484f59553a204e4f545f415050524f5645445f4e4f525f4f574e4552000000600082015250565b61395981613575565b811461396457600080fd5b50565b61397081613587565b811461397b57600080fd5b50565b61398781613593565b811461399257600080fd5b50565b61399e8161359d565b81146139a957600080fd5b50565b6139b5816135e9565b81146139c057600080fd5b5056fea264697066735822122084b27ee270945a8dd50e37a8cd0b5f0b5802a0d6d263ec373cda2bf4b713786764736f6c63430008030033";

export class ERC721Initializable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Initializable> {
    return super.deploy(overrides || {}) as Promise<ERC721Initializable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Initializable {
    return super.attach(address) as ERC721Initializable;
  }
  connect(signer: Signer): ERC721Initializable__factory {
    return super.connect(signer) as ERC721Initializable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721InitializableInterface {
    return new utils.Interface(_abi) as ERC721InitializableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Initializable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Initializable;
  }
}