//SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

abstract contract ERC20 {
    function transferFrom(address _from, address _to, uint256 _value) public virtual  returns (bool success);
    function decimals() public virtual view returns (uint8);
}

contract TokenSale {
    uint tokePriceInWei = 1 ether;

    ERC20 public token;
    address public tokenOwner;

    constructor(address _token) {
        tokenOwner = msg.sender;
        token = ERC20(_token);
    }

    function purchaseACoffe() public payable {
        require(msg.value >= tokePriceInWei, "No enough money sent");
        uint tokensToTransfer = msg.value / tokePriceInWei;
        uint remainder = msg.value - tokePriceInWei * tokePriceInWei;
        token.transferFrom(tokenOwner, msg.sender, tokensToTransfer * 10 * token.decimals());
        payable (msg.sender).transfer(remainder); // Manda o resto do dinheiro de volta

    }
}