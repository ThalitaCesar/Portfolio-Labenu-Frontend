import styled from 'styled-components';
import Blur from '../assets/Blur.png'
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
@media(max-width: 1020px) {
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
    background-size:80%;
    background-position: top right;
  };
  @media(max-width: 450px) {
    background-size:80%;
  }

`
export const HomeInfo = styled.div `
display:flex;
flex-direction: column;
justify-content: center;
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
`
export const Text2 = styled.span `
font-style: normal;
font-size: 52px;
color: #E5E9F0;
@media(max-width: 450px) {
    font-size: 42px;
  }
`
export const Text3 = styled.span `
font-style: normal;
font-weight: 450;
font-size: 24px;
color: #4D5BCE;
@media(max-width: 450px) {
    font-size: 14px;
  }
`

export const Text4 = styled.p `
font-style: normal;
font-size: 16px;
line-height: 24px;
color: #E5E9F0;
@media(max-width: 450px) {
    font-size: 16px;
  }
`
export const Span = styled.span `
font-style: normal;
font-weight: 450;
font-size: 16px;
color: #607B96;
@media(max-width: 450px) {
    font-size: 10px;
  }
`
export const Span1 = styled.span `
font-size: 16px;
color: #4D5BCE;
@media(max-width: 450px) {
    font-size: 10px;
  }
`
export const Span2 = styled.span `
font-size: 16px;
color: #43D9AD;
@media(max-width: 450px) {
    font-size: 10px;
  }
`
export const Span3 = styled.a`
font-size: 16px;
color: #E99287;
text-decoration: none;
@media(max-width: 450px) {
    font-size: 10px;
  }
`

export const Snake = styled.span `
display:flex;
flex-direction: column;
justify-content: center;
`

export const ContainerGame = styled.div`
display:flex;
flex-direction: column;
@media(max-width: 1020px) {
   display:none
  };
  @media(max-width: 450px) {
    display:none;
  }
`