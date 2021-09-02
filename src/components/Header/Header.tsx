import React, {FC} from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import logo from '../../images/header-logo.svg';
import profileLogo from '../../images/profile-logo.svg';
interface HeaderProps {
	onOpenMobileMenu: () => void;
	isMobileMenuOpen: boolean;
}
const Header: FC<HeaderProps> = ({onOpenMobileMenu, isMobileMenuOpen}) => {
	const [windowWidth, setWindowWidth] = React.useState<number>(window.screen.width);
	const [isDisabledWrench, setIsDisabledWrench] = React.useState<boolean>(true);
	

	function handleOpenMenu() {
		onOpenMobileMenu()
	}
	 
	function resizedWindow() {
		
		 setWindowWidth(window.innerWidth);
	  }

	
	
	  React.useEffect(() => {
		window.addEventListener('resize', resizedWindow);
	
		return () => window.removeEventListener('resize', resizedWindow);
	  });
	  
	  React.useEffect(() => {
		  
		  if (windowWidth <= 980) {
			setIsDisabledWrench(false);
		  } else setIsDisabledWrench(true);
	  }, [windowWidth])

	return (
		<header className='header'>
			<div className='header__container'>
				<button className="header__img-button" type="button" disabled={isDisabledWrench} onClick={handleOpenMenu}> 
				<img className='header__img-logo' src={logo} alt='логотип'></img>
				</button>
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
			<NavBar isMobileMenuOpen={isMobileMenuOpen}/>
		</header>
	);
};

export default Header;
