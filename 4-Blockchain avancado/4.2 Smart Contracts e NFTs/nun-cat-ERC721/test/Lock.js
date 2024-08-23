const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  it("Should deploy MyNFT", async function () {
    const NunCat = await ethers.getContractFactory("NunCat");
    const nuncat = await NunCat.deploy();
    await nuncat.deployed();

    const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const metadata =  'cid/test.png';

    let balance = await nuncat.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newLyMintedToken = await nuncat.payToMint(recipient, metadataURI, {value: ethers.utils.parseEther("0.1")});
});
});
