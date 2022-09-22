import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config';
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 80001,
    },
    polygon: {
      url: 'https://crimson-greatest-isle.matic-testnet.discover.quiknode.pro/12b703481f6db983146b2dabf947072811e74d91/',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};

export default config;