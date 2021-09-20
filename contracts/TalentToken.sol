// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import {ERC165Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

/// @title The base contract for Talent Tokens
contract TalentToken is ERC165Upgradeable, ERC20Upgradeable, AccessControlUpgradeable {
    /// minter role
    bytes32 public constant ROLE_MINTER_BURNER = keccak256("MINTER_BURNER");

    function initialize(
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply,
        address _talent,
        address _minter_burner
    ) public initializer {
        __Context_init_unchained();
        __ERC165_init_unchained();
        __AccessControl_init_unchained();
        __ERC20_init_unchained(_name, _symbol);

        _mint(_talent, _initialSupply);
        _setupRole(ROLE_MINTER_BURNER, _minter_burner);
    }

    /// @inheritdoc ERC165Upgradeable
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC165Upgradeable, AccessControlUpgradeable)
        returns (bool)
    {
        return interfaceId == type(IERC20).interfaceId || super.supportsInterface(interfaceId);
    }

    /// Mints new supply
    ///
    /// @notice Only accessible to the role MINTER_BURNER
    ///
    /// @param _to Recipient of the new tokens
    /// @param _amount Amount to mint
    function mint(address _to, uint256 _amount) public onlyRole(ROLE_MINTER_BURNER) {
        _mint(_to, _amount);
    }

    /// Burns existing supply
    ///
    /// @notice Only accessible to the role MINTER_BURNER
    ///
    /// @param _from Owner of the tokens to burn
    /// @param _amount Amount to mint
    function burn(address _from, uint256 _amount) public onlyRole(ROLE_MINTER_BURNER) {
        _burn(_from, _amount);
    }
}