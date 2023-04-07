import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'

const WalletCard = () => {


	
	return (
		<div className='walletCard'>
		<h4> Connection to MetaMask using ethers.js </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div>
			{errorMessage}
		</div>
	);
}

export default WalletCard;
