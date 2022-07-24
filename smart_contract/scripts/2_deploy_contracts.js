const main = async () =>{
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;

  const Initial1 = await hre.ethers.getContractFactory("Authentication");
  const initial1 = await Initial1.deploy();

  await initial1.deployed();

  console.log("Transaction deployed to:", initial1.address);
}

const runMain = async () => {
  try{
    await main();
    process.exit(0);
  }catch(error){
    console.error(error);
    process.exit(1);

  }
}
runMain();