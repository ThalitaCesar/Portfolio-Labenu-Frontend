import styled from 'styled-components';
import Blur from '../assets/Blur.png';
import react from '../assets/reactjs-icon.png'
import ContainerSnake from '../assets/BackgroundSnake.png'

export const Pages = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
box-sizing: border-box;
width: 96vw;
height: 93vh;
margin: 40px;
background: #011627;
border: 1px solid #1E2D3D;
border-radius: 8px;
margin:auto;
margin-top:25px;
@media(max-width: 1024px) {
    width: 90vw;
    height: 94vh;
    margin:auto;
    margin-top:30px;
  };
  @media(max-width: 450px) {
    width: 86vw;
    height: 94vh;
    
  }
`;

export const HelloContainer = styled.div `
display:flex;
justify-content: space-evenly;
background-image: url(${Blur});
background-repeat: no-repeat;
background-position: right;
background-size:50%;
height: 100vh;

@media(max-width: 1020px) {
    background-size:150%;
    background-position: top right;
  };
  @media(max-width: 450px) {
    background-position: top;
    background-size:150%;
  }

`

export const ProjectsContainer = styled.div `
display:flex;
height: 100vh;
margin-top: 20px;
margin:10px;
background-image: url(${react});
background-repeat: no-repeat;
background-position: right;
background-size:40%;
 @media screen and (max-width: 850px) {
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: right;
  background-size:100%;


`

export const AboutMeContainer = styled.div `
display:flex;
justify-content: start;
height: 100vh;
background-image: url(${react});
background-repeat: no-repeat;
background-position: right;
background-size:40%;

 @media screen and (max-width: 850px) {
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: right;
  background-size:100%;
 }

`
export const HomeInfo = styled.div `
display:flex;
flex-direction: column;
justify-content: center;
@media(max-width: 1024px) {
  align-items: center;
  margin: 10px;
  padding:10px;
}
@media(max-width: 450px) {
    align-items: center;
    margin: 10px;
    padding:10px;
  }
`
export const Text1 = styled.p `
font-style: normal;
font-size: 16px;
line-height: 41px;
color: #E5E9F0;
@media(max-width: 450px) {
    font-size: 12px;
  }
  @media(max-width: 1024px) {
    font-size: 12px;
  }
`
export const Text2 = styled.span `
font-style: normal;
font-size: 52px;
color: #E5E9F0;
@media(max-width: 1024px) {
  font-size: 42px;
}
@media(max-width: 450px) {
    font-size: 42px;
  }

`
export const Text3 = styled.span `
font-style: normal;
font-weight: 450;
font-size: 24px;
color: #4D5BCE;
@media(max-width: 1024px) {
  font-size: 14px;
}
@media(max-width: 850px) {
    font-size: 14px;
    color: #43D9AD;
  }
`

export const Text4 = styled.p `
font-style: normal;
font-size: 16px;
line-height: 24px;
color: #E5E9F0;
@media(max-width: 1024px) {
  font-size: 16px;
}
@media(max-width: 450px) {
    font-size: 16px;
  }
`
export const Span = styled.span `
font-style: normal;
font-weight: 450;
font-size: 16px;
color: #607B96;
@media(max-width: 1024px) {
  font-size: 12px;
}
@media(max-width: 450px) {
    font-size: 10px;
  }
`
export const Span1 = styled.span `
font-size: 16px;
color: #4D5BCE;
@media(max-width: 1024px) {
  font-size: 10px;
}
@media(max-width: 450px) {
    font-size: 10px;
  }
`
export const Span2 = styled.span `
font-size: 16px;
color: #43D9AD;
@media(max-width: 1024px) {
  font-size: 10px;
}
@media(max-width: 450px) {
    font-size: 10px;
  }
`
export const Span3 = styled.a`
font-size: 16px;
color: #E99287;
text-decoration: none;
@media(max-width: 1024px) {
  font-size: 10px;
}
@media(max-width: 450px) {
    font-size: 10px;
  }
`

export const TitleInfo = styled.p`

font-size: 26px;
text-align: center;
color: #FFFFFF;
text-decoration: none;
`


export const Snake = styled.span `
display:flex;
flex-direction: column;
justify-content: center;
`

export const ContainerGame = styled.div`
display:flex;
flex-direction: column;
@media(max-width: 1024px) {
   display:none
  };
  @media(max-width: 450px) {
    display:none;
  }
`

export const ContainerInfo = styled.div`
display:flex;
flex-direction: row;
overflow: auto;
height: 70vh;
::-webkit-scrollbar-track {
  background-color: #011221;
}
::-webkit-scrollbar {
  width: 6px;
  background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
  background: #607B96;
}

@media screen and (max-width: 768px) {
  height: 60vh;
}
@media screen and (max-width: 768px) {
  height: 60vh;
}
@media screen and (max-width: 500px) {
  height: 58vh;
}
@media screen and (max-width: 375px) {
  height: 53vh;
}

`

export const ContainerInfoAbout = styled.div`
display:flex;
flex-direction: column;
text-align:center;
max-width: 400px;
overflow: auto;
height: 70vh;
align-items: center;
justify-content:center;
padding-left: 280px;
::-webkit-scrollbar-track {
  background-color: #011221;
}
::-webkit-scrollbar {
  width: 6px;
  background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
  background: #607B96;
}

@media screen and (max-width: 1024px) {
  height: 44vh;
  padding: 105px;
}
@media screen and (max-width: 912px) {
  height: 44vh;
  padding: 55px;
}
@media screen and (max-width: 820px) {
  height: 44vh;
  padding: 155px;
}
@media screen and (max-width: 768px) {
  height: 35vh;
}

@media screen and (max-width: 700px) {
  height: 50vh;
  padding: 5px;
}
@media screen and (max-width: 540px) {
  height: 35vh;
  padding: 45px;
}
@media screen and (max-width: 375px) {
  height: 35vh;
  padding-left: 20px;
}
@media screen and (max-width: 300px) {
  height: 35vh;
  padding-left: 0px;
}

`

export const FlexAbout= styled.div`
display:flex;
flex-direction: column,
text-align:center;
max-width: 400px;
`


export const ContainerInfoH = styled.div`
display:flex;
flex-direction: row;
overflow: auto;
height: 100%;
::-webkit-scrollbar-track {
  background-color: #011221;
}
::-webkit-scrollbar {
  width: 6px;
  background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
  background: #607B96;
}

@media screen and (max-width: 768px) {
 
}
@media screen and (max-width: 768px) {

}
@media screen and (max-width: 500px) {

}
@media screen and (max-width: 375px) {

}

`