const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.resolve(__dirname, './artifacts/src/v3-core/UniswapV3Pool.sol/UniswapV3Pool.json');

// Asynchronous function to read the ABI JSON file and compute the INIT_CODE_HASH
async function computeInitCodeHash() {
  try {
    // Reading the ABI JSON file
    const contractJson = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

    // Checking for the presence of bytecode in the ABI JSON file
    if (!contractJson.bytecode) {
      throw new Error('Bytecode not found in the ABI JSON file.');
    }

    // Calculating INIT_CODE_HASH using the contract's bytecode
    const computedInitCodeHash = ethers.keccak256(contractJson.bytecode);

    // Outputting the result
    console.log('INIT_CODE_HASH:', computedInitCodeHash);
    return computedInitCodeHash;
  } catch (error) {
    console.error('Error while calculating INIT_CODE_HASH:', error);
  }
}

// Function call
computeInitCodeHash();