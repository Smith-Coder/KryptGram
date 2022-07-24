const main = async () =>{
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;

  const Initial = await hre.ethers.getContractFactory("Migrations");
  const initial = await Initial.deploy();

  await initial.deployed();

  console.log("Transaction deployed to:", initial.address);
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