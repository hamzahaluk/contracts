// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract VirtualTALBuy is Ownable {
    using SafeERC20 for IERC20Metadata;

    // wallet => amount bought
    mapping(address => uint256) public walletBoughtAmount;

    // totalNumberOfBuys
    uint256 public totalBuys;

    // totalAmountBought
    uint256 public totalAmountBought;

    // flag to enable or disable the contract
    bool public enabled = true;

    // the accepted safeAddress
    address public safeAddress;

    // the accepted stableCoin
    address public stableCoinAddress;

    // A new buy has been created
    event Buy(address indexed wallet, uint256 amount, uint256 walletTotalAmountBought);

    constructor(address contractOwner, address _safeAddress, address _stableCoinAddress) {
        transferOwnership(contractOwner);
        safeAddress = _safeAddress;
        stableCoinAddress = _stableCoinAddress;
    }

    modifier onlyWhileEnabled() {
        require(enabled, "The contract is disabled.");
        _;
    }

    function buy(uint256 _amount) public onlyWhileEnabled {
        require(_amount > 0, "Invalid amount");
        require(IERC20Metadata(stableCoinAddress).balanceOf(msg.sender) >= _amount, "You don't have enough balance");
        require(
            IERC20Metadata(stableCoinAddress).allowance(msg.sender, address(this)) >= _amount,
            "Must approve contract first"
        );

        // transfer from sender => contract
        IERC20Metadata(stableCoinAddress).safeTransferFrom(msg.sender, safeAddress, _amount);

        // setup the internal state
        totalBuys = SafeMath.add(totalBuys, 1);
        totalAmountBought = SafeMath.add(totalAmountBought, _amount);
        uint256 _totalWalletBoughtAmount = SafeMath.add(walletBoughtAmount[msg.sender], _amount);
        walletBoughtAmount[msg.sender] = _totalWalletBoughtAmount;

        // emit event
        emit Buy(msg.sender, _amount, _totalWalletBoughtAmount);
    }

    // Safe method in case someone sends tokens to the smart contract
    function adminWithdraw(uint256 _amount, address _token, address wallet) public onlyOwner {
        require(_amount > 0, "Invalid amount");

        require(IERC20Metadata(_token).balanceOf(address(this)) >= _amount, "Not enough funds on contract");

        IERC20Metadata(_token).safeTransfer(wallet, _amount);
    }

    // Admin

    /**
     * @notice Disables the contract, disabling future sponsorships.
     * @dev Can only be called by the owner.
     */
    function disable() public onlyWhileEnabled onlyOwner {
        enabled = false;
    }

    /**
     * @notice Enables the contract, enabling new sponsors.
     * @dev Can only be called by the owner.
     */
    function enable() public onlyOwner {
        enabled = true;
    }
}
