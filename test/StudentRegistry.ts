
import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("StudentRegistry", function () {
  it("Should save and return the student's name", async function () {
    const student = await ethers.deployContract("StudentRegistry");

    await student.waitForDeployment();

    await (await student.setName("Ahlam", "Test")).wait();

    const [firstName, lastName] = await student.getName();

    expect(firstName).to.equal("Ahlam");
    expect(lastName).to.equal("Test");
  });
});
