import styled from 'styled-components';
import Blur from '../assets/Blur.png'
import ContainerSnake from '../assets/BackgroundSnake.png'

export const Pages = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
box-sizing: border-box;
width: 94vw;
height: 88vh;
margin: 40px;
background: #011627;
border: 1px solid #1E2D3D;
border-radius: 8px;
`
export const HelloContainer = styled.div `
display:flex;
justify-content: space-evenly;
background-image: url(${Blur});
background-repeat: no-repeat;
background-position: right;
background-size:45%;
height: 100vh;
`
export const HomeInfo = styled.div `
display:flex;
flex-direction: column;
justify-content: center;
`
export const Text1 = styled.p `
font-style: normal;
font-size: 16px;
line-height: 41px;
color: #E5E9F0;
`
export const Text2 = styled.span `
font-style: normal;
font-size: 42px;
color: #E5E9F0;
`
export const Text3 = styled.span `
font-style: normal;
font-weight: 450;
font-size: 24px;
color: #4D5BCE;
`

export const Text4 = styled.p `
font-style: normal;
font-size: 16px;
line-height: 24px;
color: #E5E9F0;
`
export const Span = styled.span `
font-style: normal;
font-weight: 450;
font-size: 14px;
color: #607B96;
`
export const Span1 = styled.span `
font-size: 14px;
color: #4D5BCE;
`
export const Span2 = styled.span `
font-size: 14px;
color: #43D9AD;
`
export const Span3 = styled.a`
font-size: 14px;
color: #E99287;
text-decoration: none;
`

export const Snake = styled.span `
display:flex;
flex-direction: column;
justify-content: center;
`

export const ContainerGame = styled.div`
background-image: url(${ContainerSnake});
padding:80px;
`