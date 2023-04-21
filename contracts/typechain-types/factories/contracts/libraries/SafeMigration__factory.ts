/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SafeMigration,
  SafeMigrationInterface,
} from "../../../contracts/libraries/SafeMigration";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_zodiacMechMastercopy",
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
        indexed: false,
        internalType: "address",
        name: "singleton",
        type: "address",
      },
    ],
    name: "ChangedMasterCopy",
    type: "event",
  },
  {
    inputs: [],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrationSingleton",
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
    inputs: [],
    name: "zodiacMechMastercopy",
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
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161037938038061037983398101604081905261002f916100aa565b6001600160a01b0381166100955760405162461bcd60e51b815260206004820152602360248201527f496e76616c6964206d6173746572636f707920616464726573732070726f766960448201526219195960ea1b606482015260840160405180910390fd5b6001600160a01b031660a052306080526100da565b6000602082840312156100bc57600080fd5b81516001600160a01b03811681146100d357600080fd5b9392505050565b60805160a05161026f61010a60003960008181609801526101d6015260008181604b015260c4015261026f6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632e773185146100465780638fd3ab8014610089578063fd1deb3214610093575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6100916100ba565b005b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036101505760405162461bcd60e51b815260206004820152603060248201527f4d6967726174696f6e2073686f756c64206f6e6c792062652063616c6c65642060448201526f1d9a584819195b1959d85d1958d85b1b60821b60648201526084015b60405180910390fd5b600160008190526020527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f546001600160a01b03166101c65760405162461bcd60e51b8152602060048201526012602482015271139bc81b5bd91d5b195cc8195b98589b195960721b6044820152606401610147565b600080546001600160a01b0319167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169081179091556040519081527f75e41bc35ff1bf14d81d1d2f649c0084a0f974f9289c803ec9898eeec4c8d0b89060200160405180910390a156fea26469706673582212203d680ee930f7105cd936d284444ac8c6c82db2adc2d425f7b4ff55690d01dc1464736f6c63430008110033";

type SafeMigrationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeMigrationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeMigration__factory extends ContractFactory {
  constructor(...args: SafeMigrationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _zodiacMechMastercopy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SafeMigration> {
    return super.deploy(
      _zodiacMechMastercopy,
      overrides || {}
    ) as Promise<SafeMigration>;
  }
  override getDeployTransaction(
    _zodiacMechMastercopy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_zodiacMechMastercopy, overrides || {});
  }
  override attach(address: string): SafeMigration {
    return super.attach(address) as SafeMigration;
  }
  override connect(signer: Signer): SafeMigration__factory {
    return super.connect(signer) as SafeMigration__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeMigrationInterface {
    return new utils.Interface(_abi) as SafeMigrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeMigration {
    return new Contract(address, _abi, signerOrProvider) as SafeMigration;
  }
}