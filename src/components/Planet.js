import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from './Context';


export default function Planet() {

    const ctx = useContext(Context)
    
    const { name } = useParams()
    
    let planet = ctx.planets.find(planet => planet.name.toLowerCase() === name)

    const handleClick = (name) => {
        ctx.setActiveButton(name)
    }
    
  return (
      <>
        <MobileMenuLinks className="mobile-menu">
            <MobileMenuLink className={`${planet.name.toLowerCase()} ${ctx.activeButton === "overview" ? "active" : ""}`} onClick={() => handleClick("overview")}><span>Overview</span></MobileMenuLink>
            <MobileMenuLink className={`${planet.name.toLowerCase()} ${ctx.activeButton === "structure" ? "active" : ""}`} onClick={() => handleClick("structure")}><span>Structure</span></MobileMenuLink>
            <MobileMenuLink className={`${planet.name.toLowerCase()} ${ctx.activeButton === "geology" ? "active" : ""}`} onClick={() => handleClick("geology")}><span>Surface</span></MobileMenuLink>
        </MobileMenuLinks>
        <PlanetContainer>
            <PlanetDetails className='planet-details'>
                <PlanetImage className='planet-image animate__animated animate__zoomInUp'>
                    {ctx.activeButton === "overview" ? <img src={`.${planet.images.overview}`} alt="overview" /> : ctx.activeButton === "structure" ? <img src={`.${planet.images.structure}`} alt="structure" /> : ctx.activeButton === "geology" ? <><img src={`.${planet.images.overview}`} alt="overview" /><img className={`${planet.name.toLowerCase()} geology-img`} src={`.${planet.images.geology}`} alt="geology" /></>: "" }
                </PlanetImage>
                <PlanetOverview className='planet-overview animate__animated animate__bounceInRight'>
                    <div className="planet-text">
                        <PlanetTitle>{planet.name}</PlanetTitle>
                        <PlanetDescription>{ctx.activeButton === "overview" ? planet.overview.content : ctx.activeButton === "structure" ? planet.structure.content : ctx.activeButton === "geology" ? planet.geology.content : "" }</PlanetDescription>
                        <PlanetSource>Source: <a href={`${ctx.activeButton === "overview" ? planet.overview.source : ctx.activeButton === "structure" ? planet.structure.source : ctx.activeButton === "geology" ? planet.geology.source : ""}`} target="_blank" rel="noreferrer">Wikipedia</a> <img src="../images/icon-source.svg" alt="source"/></PlanetSource>
                    </div>
                    <PlanetButtonsContainer className='planet-button-container'>
                        <button className={`${planet.name.toLowerCase()} ${ctx.activeButton === "overview" ? "active" : ""}`} onClick={() => handleClick("overview")}>01 <span>Overview</span></button>
                        <button className={`${planet.name.toLowerCase()} ${ctx.activeButton === "structure" ? "active" : ""}`} onClick={() => handleClick("structure")}>02 <span>Internal Structure</span></button>
                        <button className={`${planet.name.toLowerCase()} ${ctx.activeButton === "geology" ? "active" : ""}`} onClick={() => handleClick("geology")}>03 <span>Surface Geology</span></button>
                    </PlanetButtonsContainer>
                </PlanetOverview>
            </PlanetDetails>
            <PlanetData>
                <Rotation className='animate__animated animate__slideInUp'>
                    <p className='title'>Rotation Time</p>
                    <p className='numbers'>{planet.rotation}</p>
                </Rotation>
                <Revolution className='animate__animated animate__slideInUp'>
                    <p className='title'>Revolution Time</p>
                    <p className='numbers'>{planet.revolution}</p>
                </Revolution>
                <Radius className='animate__animated animate__slideInUp'>
                    <p className='title'>Radius</p>
                    <p className='numbers'>{planet.radius}</p>
                </Radius>
                <AverageTemp className='animate__animated animate__slideInUp'>
                    <p className='title'>Average Temp.</p>
                    <p className='numbers'>{planet.temperature}</p>
                </AverageTemp>
            </PlanetData>
        </PlanetContainer>
      </>
  )
}

const MobileMenuLinks = styled.div`
    border-bottom: 1px solid hsl(240,17%,26%);
    display: flex;
    justify-content: space-around;
    padding: 20px;
    position: relative;
    text-transform: uppercase;
    display: none;

    @media screen and (max-width: 768px){
        display: flex;
    }
`

const MobileMenuLink = styled.a`
    color: rgba(255,255,255,0.5);
    font-size: 0.875rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-decoration: none;
    
    &:hover{
        color: #fff;
        cursor: pointer;
        position: relative;
        
        &::after{
            content: "";
            position: absolute;
            left: 50%;
            bottom: -20px;
            transform: translateX(-50%);
            width: 100%;
        }
    }

   &.mercury{
       &:hover::after{
            border-bottom: 4px solid var(--color-mercury);
       }
        &.active span{
            padding-bottom: 16px;
            border-bottom: 4px solid var(--color-mercury);
        }
    }

   &.venus{
       &:hover::after{
            border-bottom: 4px solid var(--color-venus);
        }
       &.active span{
            padding-bottom: 16px;
            border-bottom: 4px solid var(--color-venus);
        }
   }

   &.earth{
       &:hover::after{
            border-bottom: 4px solid var(--color-earth);
        }
       &.active span{
            padding-bottom: 16px;
            border-bottom: 4px solid var(--color-earth);
        }
   }

   &.mars:hover{
       &::after{
           border-bottom: 4px solid var(--color-mars);
       }
       &.active span{
           padding-bottom: 16px;
           border-bottom: 4px solid var(--color-mars);
       }
   }

   &.jupiter:hover{
       &::after{
            border-bottom: 4px solid var(--color-jupiter);
        }
       &.active span{
            padding-bottom: 16px;
            border-bottom: 4px solid var(--color-jupiter);
        }
   }

   &.saturn:hover{
       &::after{
           border-bottom: 4px solid var(--color-saturn);
       }
       &.active span{
           padding-bottom: 16px;
           border-bottom: 4px solid var(--color-saturn);
       }
   }

   &.uranus:hover{
       &::after{
           border-bottom: 4px solid var(--color-uranus);
       }
       &.active span{
           padding-bottom: 16px;
           border-bottom: 4px solid var(--color-uranus);
       }
   }

   &.neptune:hover{
       &::after{
           border-bottom: 4px solid var(--color-neptune);
       }
       &.active span{
           padding-bottom: 16px;
           border-bottom: 4px solid var(--color-neptune);
       }
   }
`

const PlanetContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    max-width: 1100px;
    height: calc(100vh - 390px);
    padding: 0 40px;

    @media screen and (max-width: 768px){
        margin: 50px auto;
    }
`

const PlanetDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1024px){
        flex-direction: column;
        gap: 100px;
        .planet-overview{
            display: flex;
            justify-content: space-between;
        }
    }
`

const PlanetImage = styled.div`
    align-self: center;
    margin: 0 auto;
    position: relative;
    
    img{
        max-width: 580px;
        width: 100%;   
    }

    .geology-img{
        position: absolute;
        left: 50%;
        top: 70%;
        transform: translateX(-50%);
        width: 40%;
    }

    .jupiter.geology-img{
        width: 30%;
    }

    .saturn.geology-img{
        width: 25%;
    }

    @media screen and (max-width: 1024px){
        img{
            max-width: 400px;
        }

        .saturn.geology-img{
            top: 55%;
            width: 45%;
        }
    }

    @media screen and (max-width: 768px){

        .jupiter.geology-img{
            width: 40%;
        }
    
        .saturn.geology-img{
            width: 45%;
        }
    }
`

const PlanetOverview = styled.div`
    width: 32%;

    @media screen and (max-width: 1024px){
        display: flex;
        align-items: center;
        width: 100%;

        .planet-text{
            flex: .5;
        }
        .planet-button-container{
            flex: .4;
        }
    }

    @media screen and (max-width: 768px){
        .planet-text{
            flex: 1;
            text-align: center;
        }
        .planet-button-container{
            display: none;
        }
    }
`

const PlanetTitle = styled.h1`
    font-family: 'Antonio', sans-serif;
    font-size: 5rem;
    margin-bottom: 0;
    text-transform: uppercase;

    @media screen and (max-width: 1024px){
        font-size: 3.5rem;
    }
    
    @media screen and (max-width: 768px){
        margin-top: -30px;
    }
`

const PlanetDescription = styled.p`
    color: hsla(0,0%,100%,0.75);
    font-size: 1.15rem;
    line-height: 1.5rem;

    @media screen and (max-width: 1024px){
        font-size: 0.875rem;
    }
`

const PlanetSource = styled.div`
    font-size: 1.15rem;
    color: rgba(255,255,255,0.5);
    display: flex;
    gap: 8px;
    margin: 30px 0 40px;

    a{
        color: rgba(255,255,255,0.5);
        font-weight: 600;
    }

    img{
        align-self: center;
    }

    @media screen and (max-width: 1024px){
        font-size: 0.875rem;
    }

    @media screen and (max-width: 768px){
        justify-content: center;
        margin: 15px 0 40px;
    }
`

const PlanetButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    button{
        background-color: transparent;
        border: 1px solid hsl(240,17%,26%);
        color: hsla(0,0%,100%,0.5);
        font-size: 0.925rem;
        font-weight: 800;
        margin-bottom: 15px;
        padding: 0 20px;
        text-align: left;
        width: 100%;
        height: 50px;
        
        span{
            color: #fff;
            letter-spacing: 2px;
            margin-left: 20px;
            text-transform: uppercase;
        }
        &.mercury.active{
            background-color: var(--color-mercury);
        }
        &.venus.active{
            background-color: var(--color-venus);
        }
        &.earth.active{
            background-color: var(--color-earth);
        }
        &.mars.active{
            background-color: var(--color-mars);
        }
        &.jupiter.active{
            background-color: var(--color-jupiter);
        }
        &.saturn.active{
            background-color: var(--color-saturn);
        }
        &.uranus.active{
            background-color: var(--color-uranus);
        }
        &.neptune.active{
            background-color: var(--color-neptune);
        }
        &:hover{
            background-color: hsl(240,17%,26%);
            cursor: pointer;
        }
    }

    @media screen and (max-width: 1024px){
        button{
            font-size: 0.75rem;
            &:last-child{
                margin-bottom: 0;
            }
        }
    }

    @media screen and (max-width: 768px){
        span{
            font-size: 0.625rem;
        }
    }
`

const PlanetData = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-top: 60px;

    & > *{
        border: 1px solid hsl(240,17%,26%);
        box-sizing: border-box;
        flex: 1;
        padding: 5px 0 30px 30px;
    }

    @media screen and (max-width: 1024px){
        margin-top: 0;

        & > *{
            padding: 5px 0 15px 30px;
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        margin-top: 0;
        padding-bottom: 50px;

        & > *{
            padding: 5px 15px 15px;
        }
    }
`

const Rotation = styled.div`
    .title{
        color: rgba(255,255,255,0.5);
        font-size: 0.875rem;
        font-weight: 800;
        letter-spacing: 1.25px;
        text-transform: uppercase;
    }

    .numbers{
        font-family: "Antonio", sans-serif;
        font-size: 2.55rem;
        margin: 0;
        text-transform: uppercase;
    }

    @media screen and (max-width: 1024px){
        .title{
            font-size: 0.625rem;
        }
        .numbers{
            font-size: 1.55rem;
        }
    }

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
            margin-bottom: 0;
        }
    }
`
const Revolution = styled.div`
    .title{
        color: rgba(255,255,255,0.5);
        font-size: 0.875rem;
        font-weight: 800;
        letter-spacing: 1.25px;
        text-transform: uppercase;
    }

    .numbers{
        font-family: "Antonio", sans-serif;
        font-size: 2.55rem;
        margin: 0;
        text-transform: uppercase;
    }

    @media screen and (max-width: 1024px){
        .title{
            font-size: 0.625rem;
        }
        .numbers{
            font-size: 1.55rem;
        }
    }

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
            margin-bottom: 0;
        }
    }
`

const Radius = styled.div`
    .title{
        color: rgba(255,255,255,0.5);
        font-size: 0.875rem;
        font-weight: 800;
        letter-spacing: 1.25px;
        text-transform: uppercase;
    }

    .numbers{
        font-family: "Antonio", sans-serif;
        font-size: 2.55rem;
        margin: 0;
        text-transform: uppercase;
    }

    @media screen and (max-width: 1024px){
        .title{
            font-size: 0.625rem;
        }
        .numbers{
            font-size: 1.55rem;
        }
    }

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
            margin-bottom: 0;
        }
    }
`
const AverageTemp = styled.div`
    .title{
        color: rgba(255,255,255,0.5);
        font-size: 0.875rem;
        font-weight: 800;
        letter-spacing: 1.25px;
        text-transform: uppercase;
    }

    .numbers{
        font-family: "Antonio", sans-serif;
        font-size: 2.55rem;
        margin: 0;
        text-transform: uppercase;
    }

    @media screen and (max-width: 1024px){
        .title{
            font-size: 0.625rem;
        }
        .numbers{
            font-size: 1.55rem;
        }
    }

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
            margin-bottom: 0;
        }
    }
`