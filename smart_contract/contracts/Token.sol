// contracts/Token.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {
    string public name = "My Hardhat Token";
    string public symbol = "MHT";
    uint256 public totalSupply = 1000000;
    mapping(address => uint256) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }
}