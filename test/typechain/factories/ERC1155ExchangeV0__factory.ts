/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155ExchangeV0,
  ERC1155ExchangeV0Interface,
} from "../ERC1155ExchangeV0";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "Bid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "Cancel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "amountFilled",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "bestBid",
    outputs: [
      {
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
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
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Orders.Ask",
        name: "askOrder",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bidPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "bidRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "bidReferrer",
        type: "address",
      },
    ],
    name: "bid",
    outputs: [
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
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
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Orders.Ask",
        name: "askOrder",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "askHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Orders.Bid",
        name: "bidOrder",
        type: "tuple",
      },
    ],
    name: "bid",
    outputs: [
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nft",
        type: "address",
      },
    ],
    name: "canTrade",
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
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
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
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Orders.Ask",
        name: "order",
        type: "tuple",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
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
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Orders.Ask",
        name: "askOrder",
        type: "tuple",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "isCancelledOrClaimed",
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
  "0x60e06040523480156200001157600080fd5b5060405162002c6838038062002c68833981016040819052620000349162000562565b6200003e620000fd565b606081901b6001600160601b03191660c0524660a0527f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6200008c30620001b2602090811b62000a4917901c565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160408051601f1981840301815291905280516020909101206080525062000616565b600054610100900460ff168062000117575060005460ff16155b6200016f5760405162461bcd60e51b815260206004820152602e602482015260008051602062002c4883398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b600054610100900460ff1615801562000192576000805461ffff19166101011790555b6200019c62000219565b8015620001af576000805461ff00191690555b50565b606081620001dc57506040805180820190915260048152630307830360e41b602082015262000214565b8160005b8115620002035780620001f381620005e2565b915050600882901c9150620001e0565b6200020f8482620002b4565b925050505b919050565b600054610100900460ff168062000233575060005460ff16155b620002875760405162461bcd60e51b815260206004820152602e602482015260008051602062002c4883398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840162000166565b600054610100900460ff16158015620002aa576000805461ffff19166101011790555b6200019c620004b0565b60606000620002c5836002620005a6565b620002d29060026200058b565b6001600160401b03811115620002f857634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801562000323576020820181803683370190505b509050600360fc1b816000815181106200034d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106200038b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000620003b1846002620005a6565b620003be9060016200058b565b90505b600181111562000458576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106200040257634e487b7160e01b600052603260045260246000fd5b1a60f81b8282815181106200042757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c936200045081620005c8565b9050620003c1565b508315620004a95760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640162000166565b9392505050565b600054610100900460ff1680620004ca575060005460ff16155b6200051e5760405162461bcd60e51b815260206004820152602e602482015260008051602062002c4883398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840162000166565b600054610100900460ff1615801562000541576000805461ffff19166101011790555b6000805462ff0000191690558015620001af576000805461ff001916905550565b60006020828403121562000574578081fd5b81516001600160a01b0381168114620004a9578182fd5b60008219821115620005a157620005a162000600565b500190565b6000816000190483118215151615620005c357620005c362000600565b500290565b600081620005da57620005da62000600565b506000190190565b6000600019821415620005f957620005f962000600565b5060010190565b634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160601c6125ea6200065e600039600081816101dc0152818161087d01528181610d82015261104c0152600061070a0152600061073201526125ea6000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c80635771f997116100665780635771f9971461011b57806375e6590f146101af578063c45a0155146101cf578063def2716414610206578063e331a715146102195761009d565b8062893bf8146100a25780630935d663146100b75780633644e515146100ca57806344f09d11146100e5578063559f05dc14610108575b600080fd5b6100b56100b03660046121b3565b61023c565b005b6100b56100c53660046121b3565b610338565b6100d2610704565b6040519081526020015b60405180910390f35b6100f86100f33660046122b9565b6107ed565b60405190151581526020016100dc565b6100f86101163660046120d1565b61085b565b610170610129366004612173565b60016020819052600091825260409091208054918101546002820154600383015460048401546005909401546001600160a01b039586169593949293918216929091169086565b604080516001600160a01b03978816815260208101969096528501939093529084166060840152909216608082015260a081019190915260c0016100dc565b6100d26101bd366004612173565b60036020526000908152604090205481565b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016100dc565b6100f86102143660046121e6565b610902565b6100f8610227366004612173565b60026020526000908152604090205460ff1681565b80516001600160a01b0316331461028d5760405162461bcd60e51b815260206004820152601060248201526f29a427acaa9d102327a92124a22222a760811b60448201526064015b60405180910390fd5b600061029882610aa6565b6000818152600160205260409020549091506001600160a01b0316156102f45760405162461bcd60e51b815260206004820152601160248201527053484f59553a204249445f45584953545360781b6044820152606401610284565b600081815260026020526040808220805460ff191660011790555182917fe8d9861dbc9c663ed3accd261bbe2fe01e0d3d9e5f51fa38523b265c7757a93a91a25050565b60005460ff62010000909104161515600114156103675760405162461bcd60e51b8152600401610284906123ed565b6000805462ff000019166201000017905560208101516103869061085b565b6103cc5760405162461bcd60e51b815260206004820152601760248201527653484f59553a20494e56414c49445f45584348414e474560481b6044820152606401610284565b60006103d782610aa6565b90506103e38282610b84565b61040b818360000151846101200151856101400151866101600151610406610704565b610e6f565b600081815260016020818152604092839020835160c08101855281546001600160a01b0390811680835294830154938201939093526002820154818601819052600383015484166060830152600480840154851660808085019190915260059094015460a084018190529389015160e08a01516101008b01519851636511995160e01b8152949891909616966365119951966104b4969095929491939192849284929101612417565b60206040518083038186803b1580156104cc57600080fd5b505afa1580156104e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105049190612153565b6105415760405162461bcd60e51b815260206004820152600e60248201526d53484f59553a204641494c55524560901b6044820152606401610284565b60c08301516001600160a01b038116610558575082515b600083815260026020908152604091829020805460ff19166001179055858101518683015160a0880151865193870151948701516105a8959394929391929187916105a391906124cd565b61102e565b6105f45760405162461bcd60e51b815260206004820152601f60248201527f53484f59553a204641494c45445f544f5f5452414e534645525f46554e4453006044820152606401610284565b602080830151600085815260039092526040909120546106149190612495565b60008481526003602052604090205560608201516001600160a01b03811661063a575081515b6106578560200151866000015183886040015187602001516112aa565b600084815260016020818152604080842080546001600160a01b031990811682559381018590556002810185905560038101805485169055600481018054909416909355600590920192909255845191850151858201516080870151925188947f0642c67a22e8657a7126bb3b9fb3f01965503642f884e4c6a1efd8ed24f46c0d946106e9949193919288919061238f565b60405180910390a250506000805462ff000019169055505050565b600080467f0000000000000000000000000000000000000000000000000000000000000000141561075657507f00000000000000000000000000000000000000000000000000000000000000006107e8565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61078030610a49565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c0016040516020818303038152906040528051906020012090505b905090565b6000805460ff620100009091041615156001141561081d5760405162461bcd60e51b8152600401610284906123ed565b6000805462ff00001916620100001790556108458661083b81610aa6565b3388888888611330565b6000805462ff0000191690559695505050505050565b6040516345943ee160e01b81526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906345943ee19060240160206040518083038186803b1580156108c157600080fd5b505afa1580156108d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f99190612153565b1590505b919050565b6000805460ff62010000909104161515600114156109325760405162461bcd60e51b8152600401610284906123ed565b6000805462ff000019166201000017815561094c84610aa6565b835190915081146109975760405162461bcd60e51b81526020600482015260156024820152740a6909eb2aa7440aa9c9a82a886908a88be9082a69605b1b6044820152606401610284565b60208301516001600160a01b03166109e95760405162461bcd60e51b815260206004820152601560248201527429a427acaa9d1024a72b20a624a22fa9a4a3a722a960591b6044820152606401610284565b610a126109f5846117d4565b84602001518560c001518660e00151876101000151610406610704565b610a35848285602001518660400151876060015188608001518960a00151611330565b6000805462ff000019169055949350505050565b606081610a7157506040805180820190915260048152630307830360e41b60208201526108fd565b8160005b8115610a945780610a8581612546565b915050600882901c9150610a75565b610a9e848261185f565b949350505050565b80516020808301516040808501516060860151608087015160a088015160c089015160e08a01516101008b01518051908a0120965160009a610b679a7f17fdf8831f8bd77353b30f42ba9bc64e7144545a42a890389f298feeb45dec889a9199919897969594939201998a526001600160a01b0398891660208b015296881660408a01526060890195909552608088019390935290851660a0870152841660c086015290921660e08401526101008301919091526101208201526101400190565b604051602081830303815290604052805190602001209050919050565b60008181526002602052604090205460ff1615610be35760405162461bcd60e51b815260206004820152601b60248201527f53484f59553a2043414e43454c4c45445f4f525f434c41494d454400000000006044820152606401610284565b81516001600160a01b0316610c315760405162461bcd60e51b815260206004820152601460248201527329a427acaa9d1024a72b20a624a22fa6a0a5a2a960611b6044820152606401610284565b60208201516001600160a01b0316610c805760405162461bcd60e51b815260206004820152601260248201527114d213d6554e881253959053125117d3919560721b6044820152606401610284565b6000826060015111610ccc5760405162461bcd60e51b815260206004820152601560248201527414d213d6554e881253959053125117d05353d55395605a1b6044820152606401610284565b60808201516001600160a01b0316610d265760405162461bcd60e51b815260206004820152601760248201527f53484f59553a20494e56414c49445f53545241544547590000000000000000006044820152606401610284565b60a08201516001600160a01b0316610d805760405162461bcd60e51b815260206004820152601760248201527f53484f59553a20494e56414c49445f43555252454e43590000000000000000006044820152606401610284565b7f00000000000000000000000000000000000000000000000000000000000000006080830151604051632666e89f60e21b81526001600160a01b03918216600482015291169063999ba27c9060240160206040518083038186803b158015610de757600080fd5b505afa158015610dfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1f9190612153565b610e6b5760405162461bcd60e51b815260206004820152601f60248201527f53484f59553a2053545241544547595f4e4f545f57484954454c4953544544006044820152606401610284565b5050565b60405161190160f01b60208201526022810182905260428101879052600090606201604051602081830303815290604052805190602001209050610eb3863b151590565b15610fc357604080516020810186905280820185905260f887901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b03881691631626ba7e91610f199185916065016123c1565b60206040518083038186803b158015610f3157600080fd5b505afa158015610f45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f69919061218b565b6001600160e01b031916631626ba7e60e01b14610fbe5760405162461bcd60e51b815260206004820152601360248201527214d213d6554e8815539055551213d492569151606a1b6044820152606401610284565b611025565b856001600160a01b0316610fd982878787611a48565b6001600160a01b0316146110255760405162461bcd60e51b815260206004820152601360248201527214d213d6554e8815539055551213d492569151606a1b6044820152606401610284565b50505050505050565b600061103c85853085611bdb565b611048575060006112a0565b60007f000000000000000000000000000000000000000000000000000000000000000090506000839050600080836001600160a01b031663aec0b5436040518163ffffffff1660e01b8152600401604080518083038186803b1580156110ad57600080fd5b505afa1580156110c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e5919061211a565b909250905060006103e86110fc60ff8416896124cd565b61110691906124ad565b905061111c6001600160a01b038b168483611cad565b61112681856124ec565b9350505050600080836001600160a01b031663c2b11e186040518163ffffffff1660e01b8152600401604080518083038186803b15801561116657600080fd5b505afa15801561117a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119e919061211a565b909250905060006103e86111b560ff8416896124cd565b6111bf91906124ad565b90506111d56001600160a01b038b168483611cad565b6111df81856124ec565b60405163152a902d60e11b8152600481018d9052602481018990529094506001600160a01b038d169350632a55205a92506044019050604080518083038186803b15801561122c57600080fd5b505afa92505050801561125c575060408051601f3d908101601f19168201909252611259918101906120ed565b60015b61126557611285565b80156112825761127581846124ec565b9250611282898383611d04565b50505b6112996001600160a01b0388168683611cad565b6001925050505b9695505050505050565b604051637921219560e11b81526001600160a01b0385811660048301528481166024830152604482018490526064820183905260a06084830152600060a483015286169063f242432a9060c401600060405180830381600087803b15801561131157600080fd5b505af1158015611325573d6000803e3d6000fd5b505050505050505050565b600061133f886020015161085b565b6113855760405162461bcd60e51b815260206004820152601760248201527653484f59553a20494e56414c49445f45584348414e474560481b6044820152606401610284565b600085116113cd5760405162461bcd60e51b815260206004820152601560248201527414d213d6554e881253959053125117d05353d55395605a1b6044820152606401610284565b60008781526003602052604090205460608901516113eb8783612495565b111561142b5760405162461bcd60e51b815260206004820152600f60248201526e14d213d6554e8814d3d31117d3d555608a1b6044820152606401610284565b6114358989610b84565b611458888a600001518b61012001518c61014001518d6101600151610406610704565b6000600160008a8152602001908152602001600020905089608001516001600160a01b031663651199518b60e001518c61010001518b8a8660000160009054906101000a90046001600160a01b0316876002015488600501546040518863ffffffff1660e01b81526004016114d39796959493929190612417565b60206040518083038186803b1580156114eb57600080fd5b505afa1580156114ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115239190612153565b1561163b576115328783612495565b60008a81526003602052604090205560c08a01516001600160a01b038116611558575089515b6115788b602001518c604001518d60a001518c858d8d6105a391906124cd565b6115c45760405162461bcd60e51b815260206004820152601f60248201527f53484f59553a204641494c45445f544f5f5452414e534645525f46554e4453006044820152606401610284565b6001600160a01b0386166115d6578895505b6115ef8b602001518c60000151888e604001518c6112aa565b897f0642c67a22e8657a7126bb3b9fb3f01965503642f884e4c6a1efd8ed24f46c0d8a8a8a8a8a60405161162795949392919061238f565b60405180910390a2600193505050506117c9565b89608001516001600160a01b0316635f11a72b8b60e001518c61010001518b8a8660000160009054906101000a90046001600160a01b0316876002015488600501546040518863ffffffff1660e01b815260040161169f9796959493929190612417565b60206040518083038186803b1580156116b757600080fd5b505afa1580156116cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ef9190612153565b156117905780546001600160a01b03808a166001600160a01b031992831617835560018301899055600283018890556003830180548883169084161790556004830180549187169190921617905543600582015560405189907f4055f76fe1f351fec66b9ba790ddbdc29eb45c038163a6b1327277441a8c65f19061177d908b908b908b908b908b9061238f565b60405180910390a26000925050506117c9565b60405162461bcd60e51b815260206004820152600e60248201526d53484f59553a204641494c55524560901b6044820152606401610284565b979650505050505050565b80516020808301516040808501516060860151608087015160a08801519351600097610b67977fb98e1dc48988064e6dfb813618609d7da80a8841e5f277039788ac4b50d497b297919691959493920196875260208701959095526001600160a01b03938416604087015260608601929092526080850152811660a08401521660c082015260e00190565b6060600061186e8360026124cd565b611879906002612495565b67ffffffffffffffff81111561189f57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156118c9576020820181803683370190505b509050600360fc1b816000815181106118f257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061192f57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006119538460026124cd565b61195e906001612495565b90505b60018111156119f2576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106119a057634e487b7160e01b600052603260045260246000fd5b1a60f81b8282815181106119c457634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c936119eb8161252f565b9050611961565b508315611a415760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610284565b9392505050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115611aba5760405162461bcd60e51b815260206004820181905260248201527f53484f59553a20494e56414c49445f5349474e41545552455f535f56414c55456044820152606401610284565b8360ff16601b1480611acf57508360ff16601c145b611b1b5760405162461bcd60e51b815260206004820181905260248201527f53484f59553a20494e56414c49445f5349474e41545552455f565f56414c55456044820152606401610284565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015611b6f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611bd25760405162461bcd60e51b815260206004820152601860248201527f53484f59553a20494e56414c49445f5349474e415455524500000000000000006044820152606401610284565b95945050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691611c419190612373565b6000604051808303816000865af19150503d8060008114611c7e576040519150601f19603f3d011682016040523d82523d6000602084013e611c83565b606091505b50915091508180156117c95750805115806117c95750808060200190518101906117c99190612153565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611cff908490611d99565b505050565b611d186001600160a01b0384168383611cad565b813b15611cff57816001600160a01b031663fff6cae96040518163ffffffff1660e01b8152600401602060405180830381600087803b158015611d5a57600080fd5b505af1925050508015611d8a575060408051601f3d908101601f19168201909252611d879181019061232f565b60015b611d9357611cff565b50505050565b6000611dee826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611e6b9092919063ffffffff16565b805190915015611cff5780806020019051810190611e0c9190612153565b611cff5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610284565b6060610a9e848460008585843b611ec45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610284565b600080866001600160a01b03168587604051611ee09190612373565b60006040518083038185875af1925050503d8060008114611f1d576040519150601f19603f3d011682016040523d82523d6000602084013e611f22565b606091505b50915091506117c982828660608315611f3c575081611a41565b825115611f4c5782518084602001fd5b8160405162461bcd60e51b815260040161028491906123da565b80356108fd8161258d565b600082601f830112611f81578081fd5b813567ffffffffffffffff811115611f9b57611f9b612577565b611fae601f8201601f1916602001612464565b818152846020838601011115611fc2578283fd5b816020850160208301379081016020019190915292915050565b6000610180808385031215611fef578182fd5b611ff881612464565b91505061200482611f66565b815261201260208301611f66565b6020820152604082013560408201526060820135606082015261203760808301611f66565b608082015261204860a08301611f66565b60a082015261205960c08301611f66565b60c082015260e082013560e08201526101008083013567ffffffffffffffff81111561208457600080fd5b61209085828601611f71565b8284015250506101206120a48184016120c6565b9082015261014082810135908201526101609182013591810191909152919050565b80356108fd816125a5565b6000602082840312156120e2578081fd5b8135611a418161258d565b600080604083850312156120ff578081fd5b825161210a8161258d565b6020939093015192949293505050565b6000806040838503121561212c578182fd5b82516121378161258d565b6020840151909250612148816125a5565b809150509250929050565b600060208284031215612164578081fd5b81518015158114611a41578182fd5b600060208284031215612184578081fd5b5035919050565b60006020828403121561219c578081fd5b81516001600160e01b031981168114611a41578182fd5b6000602082840312156121c4578081fd5b813567ffffffffffffffff8111156121da578182fd5b610a9e84828501611fdc565b6000808284036101408112156121fa578283fd5b833567ffffffffffffffff811115612210578384fd5b61221c86828701611fdc565b93505061012080601f1983011215612232578283fd5b61223b81612464565b91506020850135825261225060408601611f66565b6020830152606085013560408301526080850135606083015261227560a08601611f66565b608083015261228660c08601611f66565b60a083015261229760e086016120c6565b60c08301526101008581013560e0840152940135938101939093525092909150565b600080600080600060a086880312156122d0578081fd5b853567ffffffffffffffff8111156122e6578182fd5b6122f288828901611fdc565b955050602086013593506040860135925060608601356123118161258d565b915060808601356123218161258d565b809150509295509295909350565b600060208284031215612340578081fd5b5051919050565b6000815180845261235f816020860160208601612503565b601f01601f19169290920160200192915050565b60008251612385818460208701612503565b9190910192915050565b6001600160a01b0395861681526020810194909452604084019290925283166060830152909116608082015260a00190565b600083825260406020830152610a9e6040830184612347565b600060208252611a416020830184612347565b60208082526010908201526f14d213d6554e8814915153951490539560821b604082015260600190565b600088825260e0602083015261243060e0830189612347565b6001600160a01b03978816604084015260608301969096525092909416608083015260a082015260c0019190915292915050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561248d5761248d612577565b604052919050565b600082198211156124a8576124a8612561565b500190565b6000826124c857634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156124e7576124e7612561565b500290565b6000828210156124fe576124fe612561565b500390565b60005b8381101561251e578181015183820152602001612506565b83811115611d935750506000910152565b60008161253e5761253e612561565b506000190190565b600060001982141561255a5761255a612561565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146125a257600080fd5b50565b60ff811681146125a257600080fdfea2646970667358221220af2ff7dd342fe2622c66dd5c00a5c1b76eaa3cad045e6fc23da3be796531471264736f6c63430008030033496e697469616c697a61626c653a20636f6e747261637420697320616c726561";

export class ERC1155ExchangeV0__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    factory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155ExchangeV0> {
    return super.deploy(
      factory_,
      overrides || {}
    ) as Promise<ERC1155ExchangeV0>;
  }
  getDeployTransaction(
    factory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(factory_, overrides || {});
  }
  attach(address: string): ERC1155ExchangeV0 {
    return super.attach(address) as ERC1155ExchangeV0;
  }
  connect(signer: Signer): ERC1155ExchangeV0__factory {
    return super.connect(signer) as ERC1155ExchangeV0__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155ExchangeV0Interface {
    return new utils.Interface(_abi) as ERC1155ExchangeV0Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155ExchangeV0 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155ExchangeV0;
  }
}
