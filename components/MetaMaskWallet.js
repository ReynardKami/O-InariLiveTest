import truncateEthAddress from "truncate-eth-address";
import { ethers } from "ethers";
import { useMetamask, useAddress, useDisconnect } from "@thirdweb-dev/react";
import { useState } from "react";

const changeNetwork = async ({ setError }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x4" }],
    });
  } catch (err) {
    setError(err.message);
  }
};

export const metaMaskWallet = ({ accounts, setAccounts }) => {
  const handleNetworkSwitch = async (networkName) => {
    setError();
    await changeNetwork({ networkName, setError });
  };

  // Force page refreshes on network changes
  {
    // The "any" network will allow spontaneous network changes
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.on("network", (newNetwork, oldNetwork) => {
      // When a Provider makes its initial connection, it emits a "network"
      // event with a null oldNetwork along with the newNetwork. So, if the
      // oldNetwork exists, it represents a changing network
      if (oldNetwork) {
        {
          disconnectWallet();
        }
        window.location.reload();
      }
    });
  }

  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const address = useAddress();
  const [error, setError] = useState();

  // If a wallet is connected, show address button

  if (address) {
    return (
      <div>
        <button onClick={disconnectWallet}>
          {truncateEthAddress(address)}
          <br />
        </button>
      </div>
    );
  }
  // If no wallet is connected, show connect wallet
  else {
    return (
      <div>
        <button className="btn"
          onClick={() => handleNetworkSwitch() && connectWithMetamask()}
        >
          Connect
        </button>
      </div>
    );
  }
};

