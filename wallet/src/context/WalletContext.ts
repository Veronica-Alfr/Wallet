import { createContext } from 'react';
import { IWalletContextType } from '../interface/IWalletContextType';

export const WalletContext = createContext<IWalletContextType>({
    datasWallet: [],
    addDatasWallet: () => {},
  });