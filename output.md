Deploy command
```bash
npx hardhat ignition deploy ignition/modules/UniswapV3.ts --network tBNB
```
Output:
~~~
√ Confirm deploy to network tBNB (97)? ... yes
Hardhat Ignition 🚀

Resuming existing deployment from .\ignition\deployments\chain-97

Deploying [ UniswapV3 ]

Batch #1
  Executed UniswapV3#WETH9

Batch #2
  Executed UniswapV3#NonfungibleTokenPositionDescriptor
  Executed UniswapV3#QuoterV2
  Executed UniswapV3#SwapRouter

Batch #3
  Executed UniswapV3#NonfungiblePositionManager

[ UniswapV3 ] successfully deployed 🚀

Deployed Addresses

UniswapV3#Multicall2 - 0x2f2388dc6d45Ab610786E1d89D89AEc54C3D4C60
UniswapV3#NFTDescriptor - 0x7088CD9f85bE380D4DBe3753Cf0D4A0241E6b940
UniswapV3#UniswapInterfaceMulticall - 0x884B1109b31d37dE96d14B3f0BF40EC5FBf3F0fB
UniswapV3#UniswapV3Factory - 0xF4CAD1FD733E12CBE297E650E00c07967C21Cb97
UniswapV3#WETH9 - 0xBbb8BCc98b6a7F4D1409D2D5B3F37b908AeAB340
UniswapV3#NonfungibleTokenPositionDescriptor - 0x13a2892631264b354A1697b8720E0d123182d45f
UniswapV3#QuoterV2 - 0xf6b9d018cdA81f2390836a54cE988922FD05E838
UniswapV3#SwapRouter - 0xF066b2a6fB4741520b8C69B0705e811d4100F98A
UniswapV3#NonfungiblePositionManager - 0x18D330c0D3853846642D240d1514E3043A7d5222
~~~