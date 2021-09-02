import React, { FC, useState, useEffect } from 'react';
import './NavLinkItem.css';
import { NavLink, useLocation } from 'react-router-dom';


interface NavLinkItemProps {
	title: string;
	logo: string;
	link: string;
}

const NavLinkItem: FC<NavLinkItemProps> = ({ title, logo, link }) => {
	const [isActiveNavLink, setIsActiveNavLink] = useState<boolean>(false);
	const { pathname } = useLocation();
	useEffect(() => {
		if (pathname === link) {
			setIsActiveNavLink(true);
		} else setIsActiveNavLink(false);
	}, [link, pathname]);

	return (
		<li className='navlink'>
			<NavLink exact to={link} className='navlink__link'>
				<img className='navlink__img' src={logo} alt={title}></img>
				<p className='navlink__title'>{title}</p>
			</NavLink>

			{isActiveNavLink && <div className='navlink__active-element'></div>}
		</li>
	);
};

export default NavLinkItem;
