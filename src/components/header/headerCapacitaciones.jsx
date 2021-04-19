/* eslint-disable */
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

import logo from '../../assets/images/logos/logo1.png';
import { scroller } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [topbar, setTopbar] = useState(false);
    const [color, setColor] = useState('white');

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/
    const changeBackground = () => {
        
        if(window.scrollY >= 10){
            setTopbar(true);
            setColor('black');
        } else{
            setTopbar(false);
            setColor('white');
        }
    };

    window.addEventListener('scroll', changeBackground);
    return (
        <div className={topbar ? 'topbar active' : 'topbarCap'} id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand href="https://empleo.chaco.gob.ar/capacitaciones"  target="_blank" rel="noopener noreferrer"><img src={logo} alt="wrapkit" /></NavbarBrand>
                        {/**
                         Iconos de Redes sociales -> Header Responsive 
                         */}
                        <Nav navbar className="ml-auto nav-scoial-responsive">
                            <NavItem>
                                <a className="nav-link navSocialResponsive" href="https://www.facebook.com/empleochaco" target="_blank" rel="noopener noreferrer">
                                    <div className="round-social light">
                                        
                                        <i className="fa fa-facebook icono-face"></i>
                                    </div>
                                </a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link navSocialResponsiveIg" href="https://www.instagram.com/empleochaco/" target="_blank" rel="noopener noreferrer">
                                    <div className="round-social light">
                                        <i className="fa fa-instagram icono-ig"></i>
                                    </div>
                                </a>
                            </NavItem>  
                        </Nav>
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <a className="nav-link nav-linkColor" href="https://empleo.chaco.gob.ar/capacitaciones"  target="_blank" rel="noopener noreferrer"  style={{color: color}}>
                                        INICIO
										</a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link nav-linkColor" href="https://empleo.chaco.gob.ar/capacitaciones"  target="_blank" rel="noopener noreferrer"  style={{color: color }}>
                                        CURSOS
                                    </a>
                                </NavItem>
                                
                                {/* <NavItem>
                                    <Link className="nav-link" to="/#posLinea">
                                    <div onClick={() => {
                                            scroller.scrollTo('posLinea', {
                                                duration: 1000,
                                                delay: 50,
                                                smooth: true, // linear “easeInQuint” “easeOutCubic”
                                                offset: -10,
                                            });
                                        }}>

                                            INCENTIVOS PARA EL EMPLEO
                                        </div>
                                    	</Link>
                                </NavItem> */}
                                <NavItem className="navHiddenSocialResponsiveFb">
                                    <a className="nav-link  nav-linkColor" href="https://www.facebook.com/empleochaco" target="_blank" rel="noopener noreferrer"  style={{color: color}}>
                                        <div className="round-social light">
                                            <i className="fa fa-facebook icono-face"></i>
                                        </div>
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link navHiddenSocialResponsiveIg  nav-linkColor"href="https://www.instagram.com/empleochaco/" target="_blank" rel="noopener noreferrer"  style={{color: color}}>
                                        <div className="round-social light">
                                            <i className="fa fa-instagram icono-ig"></i>
                                        </div>
                                    </a>
                                </NavItem>
                                <NavItem className="nav-itemLogin"><a className="btn btn-outline-success btonIngCap" href="https://capacitaciones.chaco.gob.ar/login/" style={{color: color}}>INGRESAR</a></NavItem>

                            </Nav>
                             {/*
                            <div className="act-buttons">
                                <Link to="/" className="nav-link" color="#ffffff">Incentivos para el Empleo</Link>
                                boton copete <Link to="/#coming" className="btn btn-success-gradiant font-14">Incentivos para el Empleo</Link>
                            </div>*/}
                        </Collapse>
                      
                    </Navbar>
                </Container>
            </div>
        </div>
    );

}
export default Header;
