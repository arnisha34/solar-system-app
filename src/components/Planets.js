import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from './Context';


export default function Planets() {

  const ctx = useContext(Context)

  return (
    <SolarSystemContainer className={`solar-system-container ${ctx.toggleMenu === true ? "animate__animated animate__fadeOut" : ""}`}>
      <SolarSystem className='animate__animated animate__zoomIn animate__slow'>
        <Sun>
          <img src="../images/sun.png" className='sun' alt="sun"/>
        </Sun>
        {ctx.planets.map((planet, id) => <StyledOrbitLink key={id} to={`/planet/${planet.name.toLowerCase()}`} className={`${planet.name.toLowerCase()} ${planet.name.toLowerCase() === ctx.isActive.toLowerCase() ? "active" : ""}`} onClick={() => {ctx.activeLink(planet.name.toLowerCase()); ctx.setActiveButton("overview")}}></StyledOrbitLink>)}
        {/* <StarCluster></StarCluster> */}
      </SolarSystem>
    </SolarSystemContainer>
  )
}

const SolarSystemContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 90px);
  overflow-x: hidden;

  @media screen and (max-width: 768px){
    margin: 50px 0;
  }
`

const SolarSystem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  & a:hover{
    cursor: pointer;
  }
`

const Sun = styled.div`
img{
    box-shadow: 0 0 10px 2px rgba(255,107,0,0.4), 0 0 22px 11px rgba(255,203,0,0.13);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
  }
`

const StyledOrbitLink = styled(Link)`
  border: 1px solid rgba(102,166,229,0.12);
  text-decoration: none;

  &::before{
    color: #fff;
    position: absolute;
    top: 30%;
    left: -20px;
    transform: translateX(-6%);
  }

  @keyframes orbit {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }


  &.mercury{
    animation: orbit 10s linear infinite reverse;
    border-radius: 50%;
    position: absolute;
    width: 150px;
    height: 150px;
    z-index: 9;

    &:hover{
      border-color: var(--color-mercury);
    }
      &:hover::before{
        content: "Mercury";
      }
      &:hover::after{
        transform: scale(1.5) translate(-50%,-50%);
      }
    &::after{
      content:"";
      background: url(../images/planet-mercury.svg) no-repeat;
      background-size: cover;
      display: block;
      position: absolute;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 8px;
      height: 8px;
    }
  }

  &.venus{
    animation: orbit 25s linear infinite reverse;
    border-radius: 50%;
    position: absolute;
    width: 180px;
    height: 180px;
    z-index: 8;
    
      &:hover{
        border-color: var(--color-venus);
      }
        &:hover::before{
          content: "Venus";
        }
        &:hover::after{
          transform: scale(1.5) translate(-50%,-50%);
        }
      &::after{
        content:"";
        background: url(../images/planet-venus.svg) no-repeat;
        background-size: cover;
        display: block;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 15px;
        height: 15px;
      }
  }

  &.earth{
    animation: orbit 35s linear infinite reverse;
    border-radius: 50%;
    position: absolute;
    width: 220px;
    height: 220px;
    z-index: 7;
    
      &:hover{
        border-color: var(--color-earth);
      }
        &:hover::before{
          content: "Earth";
        }
        &:hover::after{
          transform: scale(1.5) translate(-50%,-50%);
        }
      &::after{
        content:"";
        background: url(../images/planet-earth.svg) no-repeat;
        background-size: cover;
        display: block;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 20px;
        height: 20px;
      }
    }

  &.mars{
    animation: orbit 45s linear infinite reverse;
    border-radius: 50%;
    position: absolute;
    width: 260px;
    height: 260px;
    z-index: 6;
    
      &:hover{
        border-color: var(--color-mars);
      }
        &:hover::before{
          content: "Mars";
          top: 35%;
          left: -18px;
        }
        &:hover::after{
          transform: scale(1.5) translate(-50%,-50%);
        }
      &::after{
        content:"";
        background: url(../images/planet-mars.svg) no-repeat;
        background-size: cover;
        display: block;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 12px;
        height: 12px;
      }
    }

  &.jupiter{
    animation: orbit 250s linear infinite reverse;
    border-radius: 50%;
    position: absolute;
    width: 350px;
    height: 350px;
    z-index: 5;
    
      &:hover{
        border-color: var(--color-jupiter);
      }
        &:hover::before{
          content: "Jupiter";
          top: 30%;
          left: -35px;
        }
        &:hover::after{
          transform: scale(1.5) translate(-50%,-50%);
        }
      &::after{
        content:"";
        background: url(../images/planet-jupiter.svg) no-repeat;
        background-size: cover;
        display: block;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 40px;
        height: 40px;
      }
    }
  
    &.saturn{
    animation: orbit 1000s linear infinite reverse;
    border-radius: 50%;
    position: absolute;
    width: 450px;
    height: 450px;
    z-index: 4;
    
      &:hover{
        border-color: var(--color-saturn);
      }
        &:hover::before{
          content: "Saturn";
          top: 35%;
          left: -35px;
        }
        &:hover::after{
          transform: scale(1.5) translate(-50%,-50%);
        }
      &::after{
        content:"";
        background: url(../images/planet-saturn.svg) no-repeat;
        background-size: cover;
        display: block;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 45px;
        height: 45px;
      }
    }

    &.uranus{
      animation: orbit 2500s linear infinite reverse;
      border-radius: 50%;
      position: absolute;
      width: 550px;
      height: 550px;
      z-index: 3;
      
        &:hover{
          border-color: var(--color-uranus);
        }
        &:hover::before{
          content: "Uranus";
          top: 42%;
        }
        &:hover::after{
          transform: scale(1.5) translate(-50%,-50%);
        }
      &::after{
        content:"";
        background: url(../images/planet-uranus.svg) no-repeat;
        background-size: cover;
        display: block;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 20px;
        height: 20px;
      }
    }

    &.neptune{
      animation: orbit 4000s linear infinite reverse;
      border-radius: 50%;
      position: absolute;
      width: 675px;
      height: 675px;
      z-index: 2;
      
        &:hover{
          border-color: var(--color-neptune);
        }
          &:hover::before{
            content: "Neptune";
            top: 42%;
            left: -30px;
          }
          &:hover::after{
            transform: scale(1.5) translate(-50%,-50%);
          }
        &::after{
          content:"";
          background: url(../images/planet-neptune.svg) no-repeat;
          background-size: cover;
          display: block;
          position: absolute;
          top: 50%;
          transform: translate(-50%,-50%);
          width: 20px;
          height: 20px;
        }
    }

    @media screen and (max-width: 768px){
      &{
        flex-direction: row-reverse;
      }
    }
`
