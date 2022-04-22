import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import 'animate.css';
import { Context } from './Context';

export default function Header() {

    const ctx = useContext(Context)
    
    const handleClick = () => {
        ctx.setToggleMenu(!ctx.toggleMenu)
    }

    return (
        <MobileWrapper className='mobile-wrapper'>
            <NavbarContainer className='navbar-container'>
                <Navbar>
                    <NavLogo>
                        <StyledLink to="/" onClick={() => {ctx.setIsActive(""); ctx.etToggleMenu(false)}}>The Planets</StyledLink>
                        <HamburgerMenu className={`mobile-menu ${ctx.toggleMenu === true ? "toggle" : "closed"}`} onClick={handleClick}><span></span></HamburgerMenu>
                    </NavLogo>
                    <LinkContainer className='desktop-menu'>
                        {ctx.planets.map((planet, id) => <StyledLink key={id} to={`/planet/${planet.name.toLowerCase()}`} className={`${planet.name.toLowerCase()} ${planet.name.toLowerCase() === ctx.isActive.toLowerCase() ? "active" : ""}`} onClick={() => {ctx.activeLink(planet.name.toLowerCase()); ctx.setActiveButton("overview")}}><span>{planet.name}</span></StyledLink>)}
                    </LinkContainer>
                </Navbar>
            </NavbarContainer>
            <MobileSideNav className={`mobile-menu ${ctx.toggleMenu === true ? "active animate__animated animate__slideInRight animate__fast" : "closed animate__animated animate__fadeOut"}`}>
                {ctx.planets.map((planet, id) => <SideNavLink key={id} to={`/planet/${planet.name.toLowerCase()}`} className={`${planet.name.toLowerCase()} ${planet.name.toLowerCase() === ctx.isActive.toLowerCase() ? "active" : ""}`} onClick={() => {ctx.activeLink(planet.name.toLowerCase()); ctx.setToggleMenu(false); ctx.setActiveButton("overview")}}><span>{planet.name}</span></SideNavLink>)}
            </MobileSideNav>
        </MobileWrapper>
    )
}

const NavbarContainer = styled.div`
    border-bottom: 1px solid hsl(240,17%,26%);
    height: 85px;
    padding: 0 40px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1024px){
       padding: 30px 20px 45px;
    }

    @media screen and (max-width: 768px){
        padding: 0 20px;
     }
`
const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 auto;
    max-width: 1500px;

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }

    @media screen and (max-width: 768px){
       flex-direction: row;
    }
`
const NavLogo = styled.div`
    a{
        color: #fff;
        font-family: "Antonio", sans-serif;
        font-size: 2rem;
        letter-spacing: -1px;
        text-decoration: none;
        text-transform: uppercase;
    }

    @media screen and (max-width: 1024px){
        margin: 0 20px 40px;
    }

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        width: 100%;

        .mobile-menu{
            display: block;
            &:hover{
                cursor: pointer;
            }
        }
    }
`

const HamburgerMenu = styled.div`
    margin-right: 30px;
    position: relative;
    
    &:hover{
        cursor: pointer;
    }
    
    span{
        border: 2px solid #fff;
        margin: 0;
        position: absolute;
        transition: transform 200ms ease;
        width: 25px;
        
        &::before{
            content:"";
            border: 2px solid #fff;
            position: absolute;
            top: -10px;
            transition: top 200ms ease 0.12s,transform 200ms ease;
            left: -2px;
            width: 25px;
        }
        
        &::after{
            content:"";
            border: 2px solid #fff;
            position: absolute;
            bottom: -10px;
            left: -2px;
            transition: top 200ms ease 0.12s,transform 200ms ease;
            width: 25px;
        }
        
    }
    
    &.toggle span{        
        transform: rotate(45deg);
        transition: transform 200ms 0.12s ease;

        &::before{
            top: 0;
            opacity: 0;
            transition: top 200ms ease,opacity 200ms ease
        }
        &::after{
            bottom: -2px;
            transform: rotate(-90deg);
            transition: top 200ms ease,transform 200ms ease 0.12s
        }
    }

`

const LinkContainer = styled.nav`
    height: 100%;

    @media screen and (max-width: 768px){
        display: none;
    }
`
const StyledLink = styled(Link)`
    align-items: center;
    box-sizing: border-box;
    color: rgba(255,255,255,0.5);
    display: inline-flex;
    font-weight: 800;
    height: inherit;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;

    span{
        font-size: 0.875rem;
        letter-spacing: 1px;
        padding: 0 15px;
    }

    &.active{
        color: #fff;
    }

    &:hover{
        color: #fff;
        cursor: pointer;
    }

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 30px);
    }

    &.mercury{
        &:hover::before,
        &.active::before{
            border-top: 5px solid var(--color-mercury);
        }
    }

    &.venus{
        &:hover::before,
        &.active::before{
            border-top: 5px solid var(--color-venus);
        }
    }

    &.earth{
        &:hover::before,
        &.active::before{
            border-top: 5px solid var(--color-earth);
        }
    }

    &.mars{
        &:hover::before,
        &.active::before{
            border-top: 5px solid var(--color-mars);
        }
    }

    &.jupiter{
        &:hover::before,
        &.active::before{
            border-top: 5px solid var(--color-jupiter);
        }
    }

    &.saturn{
        &:hover::before,
        &.active::before{
            border-top: 5px solid var(--color-saturn);
        }
    }

    &.uranus{
        &:hover::before,
        &.active::before{
            border-top: 5px solid var(--color-uranus);
        }
    }

    &.neptune{
        &:hover::before,
        &.active::before{
            border-top: 5px solid var(--color-neptune);
        }
    }

    @media screen and (max-width: 1024px){
        &::before{
            top: 45px;
        }
    }

    @media screen and (max-width: 768px){
        span{
            font-size: 0.75rem;
        }
    }
`

const MobileWrapper = styled.div`

    .desktop-menu{
        display: block;
    }
    .mobile-menu{
        display: none;
    }

    @media screen and (max-width: 768px){
        .desktop-menu{
            display: none;
        }
        .mobile-menu{
            display: flex;
        }
    }
`

const MobileSideNav = styled.div`
    background: #070525;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    width: 100vw;
    height: 100vh;
    &.mobile-menu.closed{
        display: none;
    }
    &.active{
        z-index:10;
    }
`

const SideNavLink = styled(Link)`
    border-bottom: 1px solid hsl(240,17%,26%);
    color: #fff;
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: 1px;
    margin: 0 20px;
    padding: 20px 40px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;

    ::before{
        border-radius: 50%;
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 25px;
        height: 25px;
    }

    span{
        margin-left: 10px;
    }

    &.mercury{
        :hover,
        :hover::after{
            color: var(--color-mercury);
        }
        ::before{
            background: url(../images/planet-mercury.svg) no-repeat;
            background-size: contain;
        }
    }

    &.venus{
        :hover,
        :hover::after{
            color: var(--color-venus);
        }
        ::before{
            background: url(../images/planet-venus.svg) no-repeat;
            background-size: contain;
        }
    }

    &.earth{
        :hover,
        :hover::after{
            color: var(--color-earth);
        }
        ::before{
            background: url(../images/planet-earth.svg) no-repeat;
            background-size: contain;
        }
    }
    &.mars{
        :hover,
        :hover::after{
            color: var(--color-mars);
        }
        ::before{
            background: url(../images/planet-mars.svg) no-repeat;
            background-size: contain;
        }
    }
    &.jupiter{
        :hover,
        :hover::after{
            color: var(--color-jupiter);
        }
        ::before{
            background: url(../images/planet-jupiter.svg) no-repeat;
            background-size: contain;
        }
    }
    &.saturn{
        :hover,
        :hover::after{
            color: var(--color-saturn);
        }
        ::before{
            background: url(../images/planet-saturn.svg) no-repeat;
            background-size: contain;
        }
    }
    &.uranus{
        :hover,
        :hover::after{
            color: var(--color-uranus);
        }
        ::before{
            background: url(../images/planet-uranus.svg) no-repeat;
            background-size: contain;
        }
    }
    &.neptune{
        :hover,
        :hover::after{
            color: var(--color-neptune);
        }
        ::before{
            background: url(../images/planet-neptune.svg) no-repeat;
            background-size: contain;
        }
    }

    ::after{
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='hsl(240, 6%25, 54%25)' style='display: inline-block; stroke: currentcolor; fill: currentcolor; width: 20px; height: 20px; margin-top: 5px;' viewBox='0 0 1024 1024'%3E%3Cpath d='M115.5-30.167l-60.333 60.333 311.167 311.167-311.167 311.167 60.333 60.333 371.5-371.5z'%3E%3C/path%3E%3C/svg%3E");
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
    }
`
