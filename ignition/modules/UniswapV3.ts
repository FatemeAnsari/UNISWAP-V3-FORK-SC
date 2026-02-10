import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import 'dotenv/config';

export default buildModule('UniswapV3', (m) => {
  // Get the WETH address from the environment variable or deploy a new one if it's not specified
  const wethAddress = process.env.WETH_ADDRESS;
  const weth = wethAddress
    ? m.contractAt("WETH9", wethAddress)
    : m.contract("WETH9");

  // Deploy the factory
  const uniswapV3Factory = m.contract("UniswapV3Factory");

  // Deploy the swap router
  const swapRouter = m.contract("SwapRouter", [uniswapV3Factory, weth], {
    after: [weth, uniswapV3Factory],
  });

  // Deploy the library for the NFT descriptor
  const NFTDescriptor = m.library("NFTDescriptor");
  const nativeCurrencyLabelBytes = '0x46554e4e594d4f4e455900000000000000000000000000000000000000000000'; // cast format-bytes32-string "FUNNYMONEY"
  // These bytes represent the name of the network's native currency in bytes32 format.
  // "FUNNYMONEY" is a test name that should be replaced with the real currency name of your network (for example, "ETH" for Ethereum).

  // Deploy the descriptor for NFT positions
  const nonfungibleTokenPositionDescriptor = m.contract("NonfungibleTokenPositionDescriptor", [weth, nativeCurrencyLabelBytes], {
    after: [weth],
    libraries: {
      NFTDescriptor: NFTDescriptor,
    }
  });

  // Deploy the NFT position manager
  const nonfungibleTokenPositionManager = m.contract("NonfungiblePositionManager", [uniswapV3Factory, weth, nonfungibleTokenPositionDescriptor], {
    after: [uniswapV3Factory, weth, nonfungibleTokenPositionDescriptor]
  });

  // Deploy QuoterV2 for fetching quoted prices
  const quoterV2 = m.contract("QuoterV2", [uniswapV3Factory, weth], {
    after: [uniswapV3Factory, weth],
  })

  // Deploy the interface for multicalls
  const uniswapInterfaceMulticall = m.contract("UniswapInterfaceMulticall");

  // Deploy the standard Multicall2
  const multicall2 = m.contract("Multicall2");

  return {
    weth,
    uniswapV3Factory,
    swapRouter,
    nonfungibleTokenPositionDescriptor,
    nonfungibleTokenPositionManager,
    quoterV2,
    uniswapInterfaceMulticall,
    multicall2
  };
});