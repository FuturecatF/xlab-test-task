import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import logo from '../../images/header-logo.svg';
import profileLogo from '../../images/profile-logo.svg';
const Header = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<img className='header__img-logo' src={logo} alt='логотип'></img>
				<h1 className='header__title'>Wrench CRM</h1>
			</div>
			<div className='header__container'>
				<img
					className='header__img-profile'
					src={profileLogo}
					alt='логотип профиля'
				></img>
				<p className='header__title'>Имя Фамилия</p>
			</div>
			<NavBar />
		</header>
	);
};

export default Header;
