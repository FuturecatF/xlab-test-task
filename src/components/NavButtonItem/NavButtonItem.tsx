import React, { FC } from 'react';
import './NavButtonItem.css';

interface NavButtonItemProps {
	title: string;
	logo: string;
}

const NavButtonItem: FC<NavButtonItemProps> = ({ title, logo }) => {
	return (
		<li className='nav-btn'>
			<button className='nav-btn__button'>
				<img className='nav-btn__img' src={logo} alt={title}></img>
				<p className='nav-btn__title'>{title}</p>
			</button>
		</li>
	);
};

export default NavButtonItem;
