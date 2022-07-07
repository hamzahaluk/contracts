/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC1363ReceiverUpgradeable,
  IERC1363ReceiverUpgradeableInterface,
} from "../../../../@openzeppelin/contracts-upgradeable/interfaces/IERC1363ReceiverUpgradeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onTransferReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC1363ReceiverUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1363ReceiverUpgradeableInterface {
    return new utils.Interface(_abi) as IERC1363ReceiverUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1363ReceiverUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC1363ReceiverUpgradeable;
  }
}
