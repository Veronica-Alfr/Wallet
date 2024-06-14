import React, { ReactNode, useState } from "react";
import { IWallet } from "../interface/IWallet";
import { WalletContext } from "./WalletContext";

const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [datasWallet, setDataWallet] = useState<IWallet[]>([]);

  const addDatasWallet = (wallet: IWallet) => {
    setDataWallet((prevDataWallet) => [...prevDataWallet, wallet]);
  };

  return (
    <WalletContext.Provider value={{ datasWallet, addDatasWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;