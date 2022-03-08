// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TheSagaCoin is ERC20 {
    constructor (string memory _name, string memory _symbol, uint ts) ERC20(_name, _symbol) {
        _mint(msg.sender, ts );
    }
}