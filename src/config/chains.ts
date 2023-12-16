import { defineChain } from "viem";
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  celo,
  classic,
  confluxESpace,
  coreDao,
  eos,
  fantom,
  filecoin,
  gnosis,
  linea,
  mainnet,
  metis,
  okc,
  opBNB,
  optimism,
  polygon,
  ronin,
  scroll,
  zkSync,
} from "viem/chains";

export const shibarium = defineChain({
  id: 109,
  name: "Shibarium",
  network: "shibarium",
  nativeCurrency: {
    decimals: 18,
    name: "BONE",
    symbol: "BONE",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.shibrpc.com"],
    },
    public: {
      http: ["https://rpc.shibrpc.com"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://shibariumscan.io" },
  },
});

export const ethw = defineChain({
  id: 10001,
  name: "ETHW-mainnet",
  network: "ETHW-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETHW",
    symbol: "ETHW",
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.ethereumpow.org"],
    },
    public: {
      http: ["https://mainnet.ethereumpow.org"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://mainnet.ethwscan.com" },
  },
});


export const ace = defineChain({
  id: 648,
  name: "Endurance Smart Chain Mainnet",
  network: "Endurance Smart Chain Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "ACE",
    symbol: "ACE",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-endurance.fusionist.io"],
    },
    public: {
      http: ["https://rpc-endurance.fusionist.io"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.endurance.fusionist.io" },
  },
});

export const kucoin = defineChain({
  id: 321,
  name: "KCC Mainnet",
  network: "KCC Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "KCS",
    symbol: "KCS",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-mainnet.kcc.network"],
    },
    public: {
      http: ["https://rpc-mainnet.kcc.network"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.kcc.io/en" },
  },
});

export const mapo = defineChain({
  id: 22776,
  name: "MAP Mainnet",
  network: "MAP Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "MAPO",
    symbol: "MAPO",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.maplabs.io"],
    },
    public: {
      http: ["https://rpc.maplabs.io"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://mapscan.io" },
  },
});
export const inscriptionChains = {
  eth: mainnet,
  bsc,
  polygon,
  avalanche,
  optimism,
  classic,
  base,
  arbitrum,
  zkSync,
  filecoin,
  linea,
  okc,
  fantom,
  opBNB,
  celo,
  confluxESpace,
  gnosis,
  shibarium,
  eos,
  ethw,
  coreDao,
  kucoin,
  metis,
  ronin,
  scroll,
  ace,
  mapo,
};

export type ChainKey = keyof typeof inscriptionChains;
