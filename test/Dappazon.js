const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {

  let dappazon,deployer,buyer;

  beforeEach(async()=>{

    const signers=await ethers.getSigners();
    deployer=signers[0];
    buyer=signers[1];
   
    const Dappazon=await ethers.getContractFactory("Dappazon");
    dappazon=await Dappazon.deploy();
  })

  describe("Deployement",()=>{

    it("Sets the owner",async()=>{
      expect(await dappazon.owner()).to.equal(deployer.address);
    })

  })

})
