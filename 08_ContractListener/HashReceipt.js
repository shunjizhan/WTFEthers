const config = require('dotenv').config().parsed
const { ethers } = require('ethers');




(async ()=>{
  const provider = new ethers.providers.JsonRpcProvider(config.ALCHEMY_MAINNET_URL);
  const receipt =  await provider.getTransactionReceipt('0xab1f7b575600c4517a2e479e46e3af98a95ee84dd3f46824e02ff4618523fff5');
  console.group('receipt');
  console.log(receipt);
  console.groupEnd();
  console.group('receipt.logs');
  console.log(receipt.logs);
  console.groupEnd();
})()
