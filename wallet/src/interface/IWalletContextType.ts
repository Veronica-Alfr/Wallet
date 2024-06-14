import { IWallet } from "./IWallet";

export interface IWalletContextType {
    datasWallet: IWallet[];
    addDatasWallet: (wallet: IWallet) => void;
}
