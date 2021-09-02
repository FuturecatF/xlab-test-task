import React, {FC} from 'react';
import './NavBar.css';
/* components */
import NavLinkItem from '../NavLinkItem/NavLinkItem';
import SettingsNavItem from '../SettingsNavItem/SettingsNavItem';
import NavButtonItem from '../NavButtonItem/NavButtonItem';
/* Иконки */
import homeIcon from '../../images/home-icon.svg';
import searchIcon from '../../images/search-icon.svg';
import settingsIcon from '../../images/settings-icon.svg';
import tablesIcon from '../../images/tables-icon.svg';
import calendareIcon from '../../images/calendare-icon.svg';
import mapsIcon from '../../images/maps-icon.svg';
import widgetsIcon from '../../images/widget-icon.svg';
import exitIcon from '../../images/exit-icon.svg';
interface NavBarProps {
	isMobileMenuOpen: boolean;
}
const NavBar: FC<NavBarProps> = ({isMobileMenuOpen}) => {
	return (
		<aside className={`aside-navbar ${isMobileMenuOpen ? 'aside-navbar_active' : ''}`}>
			<nav className='navbar'>
				<h3 className='navbar__title'>Меню</h3>
				<ul className='navbar__list'>
					<NavLinkItem title='Главная' logo={homeIcon} link='/' />
					<NavLinkItem
						title='Поиск адресов'
						logo={searchIcon}
						link='/address'
					/>
					<NavLinkItem title='Таблицы' logo={tablesIcon} link='/tables' />
					<NavLinkItem
						title='Календарь'
						logo={calendareIcon}
						link='/calendare'
					/>
					<NavLinkItem title='Карты' logo={mapsIcon} link='/maps' />
					<NavLinkItem title='Виджеты' logo={widgetsIcon} link='/widgets' />
					<SettingsNavItem title='Настройки' logo={settingsIcon} />
					<NavButtonItem title='Выход' logo={exitIcon} />
				</ul>
			</nav>
		</aside>
	);
};

export default NavBar;
