
const NFTMinter = artifacts.require("NFTMinter");


  contract('NFTMinter', (accounts) => {
    let market 
    before(async () => {
      Nftminter = await NFTMinter.new()
    })
    
      describe('NFTMinter', async () => {
        it('Should create NFT Token', async () => {
          const NftminterAddress = Nftminter.address;

          await Nftminter.mint("https://www.mytokenlocation.com")
          await Nftminter.mint("https://www.mytokenlocation2.com")
          assert.equal(await Nftminter.totalSupply(),2,"must be Equal")

        })
      })
  })
    