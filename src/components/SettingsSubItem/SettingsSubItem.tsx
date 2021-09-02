import React, { FC, useState, useEffect } from 'react';
import './SettingsSubItem.css';
import { NavLink, useLocation } from 'react-router-dom';

interface SettingsSubItemProps {
	title: string;
	logo: string;
	link: string;
}
const SettingsSubItem: FC<SettingsSubItemProps> = ({ title, logo, link }) => {
	const [isActiveElement, setIsActiveElement] = useState<boolean>(false);
	const { pathname } = useLocation();
	
	useEffect(() => {
		if (pathname === link) {
			setIsActiveElement(true);
		} else setIsActiveElement(false);
	}, [link, pathname]);

	return (
		<li className='settings__item' onClick={(e) => e.stopPropagation()}>
			<NavLink exact to={link} className='settings__item-link'>
				<img className='settings__item-img' src={logo} alt={title}></img>
				<p className='settings__item-title'>{title}</p>
			</NavLink>
			{isActiveElement && <div className='settings__item_active-element'></div>}
		</li>
	);
};

export default SettingsSubItem;
