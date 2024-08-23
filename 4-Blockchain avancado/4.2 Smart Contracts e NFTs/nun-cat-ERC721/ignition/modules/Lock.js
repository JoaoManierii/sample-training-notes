const hre = require("hardhat");

async function main() {

  const NunCat = await hre.ethers.getContractFactory("NunCat");
  const nuncat = await NunCat.deploy();

  await nuncat.deployed();


  console.log("My NFT deployed to:", nuncat.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });