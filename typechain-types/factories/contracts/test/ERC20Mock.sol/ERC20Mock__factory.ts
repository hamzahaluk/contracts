/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC20Mock,
  ERC20MockInterface,
} from "../../../../contracts/test/ERC20Mock.sol/ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    stateMutability: "pure",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e3b38038062000e3b8339810160408190526200003491620002cf565b8151829082906200004d90600390602085019062000172565b5080516200006390600490602084019062000172565b505050620000823369d3c21bcecceda10000006200008a60201b60201c565b5050620003b3565b6001600160a01b038216620000e55760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000f9919062000339565b90915550506001600160a01b038216600090815260208190526040812080548392906200012890849062000339565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001809062000360565b90600052602060002090601f016020900481019282620001a45760008555620001ef565b82601f10620001bf57805160ff1916838001178555620001ef565b82800160010185558215620001ef579182015b82811115620001ef578251825591602001919060010190620001d2565b50620001fd92915062000201565b5090565b5b80821115620001fd576000815560010162000202565b600082601f8301126200022a57600080fd5b81516001600160401b03808211156200024757620002476200039d565b604051601f8301601f19908116603f011681019082821181831017156200027257620002726200039d565b816040528381526020925086838588010111156200028f57600080fd5b600091505b83821015620002b3578582018301518183018401529082019062000294565b83821115620002c55760008385830101525b9695505050505050565b60008060408385031215620002e357600080fd5b82516001600160401b0380821115620002fb57600080fd5b620003098683870162000218565b935060208501519150808211156200032057600080fd5b506200032f8582860162000218565b9150509250929050565b600082198211156200035b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200037557607f821691505b602082108114156200039757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610a7880620003c36000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d7146101a1578063a9059cbb146101b4578063dd62ed3e146101c757600080fd5b8063395093511461015d57806370a082311461017057806395d89b411461019957600080fd5b806318160ddd116100b257806318160ddd1461012957806323b872dd1461013b578063313ce5671461014e57600080fd5b806301ffc9a7146100d957806306fdde0314610101578063095ea7b314610116575b600080fd5b6100ec6100e736600461094a565b610200565b60405190151581526020015b60405180910390f35b610109610299565b6040516100f8919061098c565b6100ec610124366004610920565b61032b565b6002545b6040519081526020016100f8565b6100ec6101493660046108e4565b610343565b604051601281526020016100f8565b6100ec61016b366004610920565b610367565b61012d61017e36600461088f565b6001600160a01b031660009081526020819052604090205490565b6101096103a6565b6100ec6101af366004610920565b6103b5565b6100ec6101c2366004610920565b610464565b61012d6101d53660046108b1565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000148061029357507fffffffff0000000000000000000000000000000000000000000000000000000082167f36372b0700000000000000000000000000000000000000000000000000000000145b92915050565b6060600380546102a890610a07565b80601f01602080910402602001604051908101604052809291908181526020018280546102d490610a07565b80156103215780601f106102f657610100808354040283529160200191610321565b820191906000526020600020905b81548152906001019060200180831161030457829003601f168201915b5050505050905090565b600033610339818585610472565b5060019392505050565b6000336103518582856105ca565b61035c85858561065c565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061033990829086906103a19087906109e1565b610472565b6060600480546102a890610a07565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104575760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61035c8286868403610472565b60003361033981858561065c565b6001600160a01b0383166104ed5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161044e565b6001600160a01b0382166105695760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161044e565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461065657818110156106495760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161044e565b6106568484848403610472565b50505050565b6001600160a01b0383166106d85760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161044e565b6001600160a01b0382166107545760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161044e565b6001600160a01b038316600090815260208190526040902054818110156107e35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161044e565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061081a9084906109e1565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161086691815260200190565b60405180910390a3610656565b80356001600160a01b038116811461088a57600080fd5b919050565b6000602082840312156108a157600080fd5b6108aa82610873565b9392505050565b600080604083850312156108c457600080fd5b6108cd83610873565b91506108db60208401610873565b90509250929050565b6000806000606084860312156108f957600080fd5b61090284610873565b925061091060208501610873565b9150604084013590509250925092565b6000806040838503121561093357600080fd5b61093c83610873565b946020939093013593505050565b60006020828403121561095c57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146108aa57600080fd5b600060208083528351808285015260005b818110156109b95785810183015185820160400152820161099d565b818111156109cb576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610a0257634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680610a1b57607f821691505b60208210811415610a3c57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220ab390802162061d98efda4216720501b36593ae391fe474af563b423bb3f94fc64736f6c63430008070033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}
