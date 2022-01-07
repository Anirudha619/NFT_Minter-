# NFT MINTER

## Step 1. Clone the project
`https://github.com/Anirudha619/NFT_Minter-`

## Step 2. Install dependencies
- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache: http://truffleframework.com/ganache/

## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance. See free video tutorial for full explanation.

## Step 4. Testing the NFTMinter Smart Contract on local Blockchain (Ganache)
Open VS code (any Other Compiler) 
Open the Cloned repository

On Terminal Type `truffle console`

then test the contract bt typing `truffle test`

If test get sucessful then you will see follwing output in terminal

![Untitled](https://user-images.githubusercontent.com/92630647/148551366-4a553543-c5d6-4a3f-8f0d-7845a1be658a.png)

This test confirms that we have minted two nft and we checked that totalSupply in our contract has updated to 2.



## Step 5. Open Remix browser IDE
`https://remix.ethereum.org/`

## Step 6. Compile & Deploy NFTMinter.sol Smart Contract
add NFTMinter.sol Smart Contract in remix.

Adjust the setting as per your requirements (I want to deploy on Rinkeby testNet so I choose Injected Web) 

![1](https://user-images.githubusercontent.com/92630647/148549816-6468c9af-68c9-45ff-af89-7d0b8c66fc1a.png)

after You done with the deployment settings then chose the NFTMinter contract and click on deploy button.
Then MetaMask confirmation will pop up click confirm.


![3](https://user-images.githubusercontent.com/92630647/148550204-c86755a0-eeef-4ed1-b19e-2cbbfc8dc272.png)


## Step 7. Minting The NFT

Once Contract is deployed to testnet Then you are ready to mint NFT.
add your NFT link (IPFS file stored link or Tweet) in the mint function and mint the NFT.


![mint](https://user-images.githubusercontent.com/92630647/148552861-dd00a5d3-7f47-49d8-bf92-9d7e682ff3d6.png)

Then Go to Opensea Marketplace and see your NFT 

![opensea](https://user-images.githubusercontent.com/92630647/148553269-9ece2007-7d78-4236-8ab0-292763b26dec.png)


