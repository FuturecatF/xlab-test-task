import React, { useState } from 'react';
import './SettingsNavItem.css';
// import { NavLink } from 'react-router-dom';
import rectangleBg from '../../images/settings-bg.svg';
import SettingsSubItem from '../SettingsSubItem/SettingsSubItem';
import imageProfile from '../../images/settings-sub-profile.svg';
import imageFinance from '../../images/settings-sub-finance.svg';
const SettingsNavItem = ({ title, logo }: any) => {
	const [isDropActive, setIsDropActive] = useState<boolean>(false);
	

	function handleDropMenu() {
		if (!isDropActive) {
			setIsDropActive(true);
		} else setIsDropActive(false);
	}

	return (

		
		<li className='settings' >
			<div className='settings__content' onClick={handleDropMenu}>
				<img className='settings__img' src={logo} alt={title}></img>
				<p className='settings__title'>{title}</p>
				<img
					className='settings__img-button'
					src={rectangleBg}
					alt='треугольник'
				></img>
			</div>
			<ul
				className={`settings__list ${
					isDropActive ? 'settings__list_active' : ''
				}`}
			>
				<SettingsSubItem title='Настройки профиля' logo={imageProfile} link='/profile'/>
				<SettingsSubItem title='Управление финансами' logo={imageFinance} link='/finance'/>
				{/* <li className='settings__item' onClick={(e) => e.stopPropagation()}>
					<NavLink
						exact
						to='/finance'
						className='settings__item-link'
						activeClassName='settings__item-link_active'
						isActive={(match): any => {
							if (!match) {
								setIsActiveElement(false);
								return false;
							}
							setIsActiveElement(true);
						}}
					>
						<img className='settings__item-img' src={logo} alt={title}></img>
						<p className='settings__item-title'>Управление финансами</p>
					</NavLink>
					{isActiveElement && (
						<div className='settings__item_active-element'></div>
					)}
				</li> */}
				{/* <li className='settings__item' onClick={(e) => e.stopPropagation()}>
					<img className='navlink-item__img' src={logo} alt={title}></img>
					<NavLink
						exact
						to='/finance'
						className='settings-item__link'
						activeClassName='settings-item__link_active'
					>
						Управление финансами
					</NavLink>
				</li>  */}
			</ul>

			{/*   <div className={`navbar__list-div ${isActiveLink ? "navbar__list-div-active" : ''}`}></div>  */}
		</li>
	);
};

export default SettingsNavItem;
