import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as ImgLogout } from '../../img/svg/log-out-7.svg';
import { ReactComponent as ImgLoupe } from '../../img/svg/loupe.svg';
import { ReactComponent as ImgMenu } from '../../img/svg/menu-thin.svg';
import { ReactComponent as ImgHome } from '../../img/svg/home-thin.svg';
import { ReactComponent as ImgSuperhero } from '../../img/svg/superhero2.svg';
import './navbar.css';

export const Navbar = () => {

    const [menuMovil, setMenuMovil] = useState(false);
    const [loupe, setLoupe] = useState(false);

    const handleOnCLick_botonRedondoAbajo = (e) => {
        e.preventDefault();
        setMenuMovil(!menuMovil);
        // alert('clik en botn redondo abajo \n\n' + menuMovil);
    }
    const handleOnCLick_sidebarOverlay = (e) => {
        e.preventDefault();
        setMenuMovil(false);
        // alert('clik en handleOnCLick_sidebarOverlay \n\n' + menuMovil);
    }
    const handleOnClick_btnLoupe = (e) => {
        e.preventDefault();
        setLoupe(!loupe);
        ref_inputGlobalSearch.current.focus();
        // alert('lopue')
    }
    const handleOnCLick_navLink = (e) => {
        // e.preventDefault();
        setMenuMovil(!menuMovil);
    }
    const ref_inputGlobalSearch = useRef(null);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light normal">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        Asociaciones
                </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/marvel"
                            >
                                Marvel
                        </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/dc"
                            >
                                DC
                        </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/test01"
                            >
                                Test01
                        </NavLink>
                            {/*  <li className="nav-item dropdown">

                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Asociaciones
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink
                                    activeClassName="active"
                                    className="dropdown-item"
                                    aria-labelledby="navbarDropdown"
                                    exact
                                    to="/dc"
                                >
                                    DC
                                </NavLink>

                                <NavLink
                                    activeClassName="active"
                                    className="dropdown-item"
                                    aria-labelledby="navbarDropdown"
                                    exact
                                    to="/marvel"
                                >
                                    Marvel
                                </NavLink>

                                <li><hr className="dropdown-divider" /></li>

                                <NavLink
                                    activeClassName="active"
                                    className="dropdown-item"
                                    aria-labelledby="navbarDropdown"
                                    exact
                                    to="/dc"
                                >
                                    DC
                                </NavLink>

                            </ul>
                       
                        </li>
 */}
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link disabled"
                                exact
                                to="/marvel"
                                tabIndex="-1"
                                aria-disabled="true"
                            >
                                Marvel
                        </NavLink>

                        </ul>

                        <form className="d-flex">
                            <Link
                                className="mx-0"
                                style={{ alignSelf: "center" }}
                                exact="true"
                                to={`/search?q=`}
                            >
                                <ImgLoupe
                                    className="mx-2"
                                    width="20px"
                                    height="20px"
                                />
                            </Link>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <ul className="navbar-nav ml-auto">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link ms-3"
                                exact
                                to="/login"
                            >
                                <ImgLogout />
                            </NavLink>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className="header">
                <ImgMenu
                    onClick={handleOnCLick_botonRedondoAbajo}
                    className="pull-left"
                />
                <span className="title">Home</span>
                {/* <ImgLoupe className="pull-right" /> */}
                <div className="search">
                    <form method="post">
                        <input
                            type="search"
                            id="search"
                            ref={ref_inputGlobalSearch}
                            placeholder="Search Here"
                            className={(loupe) ? 'search-visible' : ''}
                        />
                        <ImgLoupe
                            className="pull-right"
                            onClick={handleOnClick_btnLoupe}
                        />
                    </form>
                </div>
            </div>
            <div className={(menuMovil) ? 'sidebar active' : 'sidebar'}>
                <div
                    className={(menuMovil) ? 'sidebar-overlay fadeIn animated' : 'sidebar-overlay animated fadeOut'}
                    onClick={handleOnCLick_sidebarOverlay}
                ></div>
                <div className="sidebar-content">
                    <div className="top-head">
                        <div className="name">Elías Tapia Aguilera</div>
                        <div className="email">eliastapia.eta@gmail.com</div>
                    </div>
                    <div className="nav-left">
                        {/* <a href="#home"><span className="ion-ios-home-outline"></span> Home</a> */}
                        {/* <a href="#alarm"><span className="ion-ios-list-outline"></span> Alarm</a> */}
                        {/* <a href="#compose"><span className="ion-ios-compose-outline"></span> Compose</a>
                                <a href="#chats"><span className="ion-ios-chatboxes-outline"></span> Chats</a>
                                <a href="#profile"><span className="ion-ios-person-outline"></span> Profile</a> */}
                        {/* <a href="#settings"><span className="ion-ios-gear-outline"></span> Settings</a> */}
                        {/* <a href="#credits"><span className="ion-ios-information-outline"></span> Credits</a>
                                <a href="#credits"><span className="ion-ios-information-outline"></span> Reloj</a> */}

                        <NavLink
                            activeClassName="active"
                            // className=""
                            exact
                            to="/home"
                            onClick={handleOnCLick_navLink}
                        >
                            {/* <span className="ion-ios-list-outline"></span> */}
                            <ImgHome
                                className="ion-ios-list-outline"
                            />
                                Home
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            // className=""
                            exact
                            to="/marvel"
                            onClick={handleOnCLick_navLink}
                        >
                            {/* <span className="ion-ios-list-outline"></span> */}
                            <ImgSuperhero
                                className="ion-ios-list-outline"
                            />
                                Marvel
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            // className="nav-item nav-link"
                            exact
                            to="/dc"
                            onClick={handleOnCLick_navLink}
                        >
                            {/* <span className="ion-ios-list-outline"></span> */}
                            <ImgSuperhero
                                className="ion-ios-list-outline"
                            />
                                DC
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            // className="nav-item nav-link"
                            exact
                            to={`/search?q=`}
                            onClick={handleOnCLick_navLink}
                        >
                            {/* <span className="ion-ios-list-outline"></span> */}
                            <ImgSuperhero
                                className="ion-ios-list-outline"
                            />
                                Buscar
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            // className="nav-item nav-link"
                            exact
                            to="/test01"
                            onClick={handleOnCLick_navLink}
                        >
                            {/* <span className="ion-ios-list-outline"></span> */}
                            <ImgSuperhero
                                className="ion-ios-list-outline"
                            />
                                Ajustes
                        </NavLink>
                        {/* <NavLink id="RouterNavLink" style={None} to="/contact">anywords</NavLink> */}

                    </div>
                </div>
            </div>
        </>
    )
}