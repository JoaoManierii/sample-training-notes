// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@ganache/console.log/console.sol";

contract Spacebear is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721("Spacebear", "SBR") Ownable(msg.sender) {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/nftdata/";
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter += 1;
        _safeMint(to, tokenId);
    }

    function buyToken() public payable {
        uint256 tokenId = _tokenIdCounter;
        console.log("got here", tokenId, msg.value);
        require(msg.value == (tokenId + 1) * 0.1 ether, "Not enough funds sent");

        _tokenIdCounter += 1;
        _safeMint(msg.sender, tokenId);
    }

    // The following functions are overrides required by Solidity.

    // If `_burn` needs to be overridden, ensure it is marked `virtual` in the base contract.
    // function _burn(uint256 tokenId) internal override(ERC721) {
    //     super._burn(tokenId);
    // }

    function tokenURI(uint256 tokenId)
        public
        pure
        override(ERC721)
        returns (string memory)
    {
        return string(abi.encodePacked(_baseURI(), "_", tokenId + 1, ".json"));
    }
}
 