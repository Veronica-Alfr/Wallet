import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wallet from './pages/Wallet';
import WalletProvider from './context/Provider';

const App: React.FC = () => {
  return (
    <WalletProvider>
      <Router>
        <Routes>
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Router>
    </WalletProvider>
  );
};

export default App;
