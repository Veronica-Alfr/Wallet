import { WalletContext } from '../context/WalletContext';
import React, { useContext, useEffect, useState } from "react";
import { IWallet } from '../interface/IWallet';

export const Wallet: React.FC = () => {
    const { datasWallet } = useContext(WalletContext);

  const [] = useState<IWallet>({
    description: "",
    currency: "",
    category: "",
  });

    return(
        <section>
            <h2>Wallet</h2>

        </section>
    );
};

export default Wallet;