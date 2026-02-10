import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
import "@nomicfoundation/hardhat-verify";
import 'dotenv/config';

const PRIVATE_KEY= process.env.PRIVATE_KEY as string;

const tBNB_RPC_URL = process.env.tBNB_RPC_URL;

const tBNB_API_KEY = process.env.tBNB_API_KEY || '';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
            details: {
              yul: true
            }
          },
          viaIR : false,
        },
      },
      {
        version: "0.4.22"
      }
    ]
  },
  paths: {
    sources: "./src"
  },
  networks: {
    tBNB: {
      url: tBNB_RPC_URL,
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: {
      tBNB: tBNB_API_KEY
    },
    customChains: [{
      network: "tBNB",
      chainId: 97,
      urls: {
        apiURL: "https://api-amoy.polygonscan.com/api",
        browserURL: "https://testnet.bscscan.com/"
      }
    }]
  }
};

export default config;