import React from 'react';
import './Header.scss';
import TwitterLogo from '../../assets/img/original.png';

export default function Header() {
	return (
		<div className="header">
			<img src={TwitterLogo} alt="Tweets Simulator"></img>
			<h1>Tweet Simulator</h1>
		</div>
	);
}
