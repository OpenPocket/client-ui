//#region Global Imports
import React from 'react';
//#endregion Global Imports
import './style.scss';

//#region Interface Imports
import { INavbar } from '@Interfaces';
//#endregion Interface Imports

export const Navbar = (props: INavbar.IProps): JSX.Element => (
	<nav className="navbar">
		<div className="nav__title">{props.text}</div>
		<ul className="nav__list">
			<li className="nav__item"><a href="javascript:void(0)" onClick={e => props.handleLanguageChange('es')}>es</a>/<a href="javascript:void(0)" onClick={e => props.handleLanguageChange('en')}>en</a></li>
		</ul>
	</nav>
);
