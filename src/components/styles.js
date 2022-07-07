import styled from 'styled-components';

export const FooterContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-top: 1px solid #1E2D3D;
@media(max-width: 450px) {
  justify-content: flex-start;
}
`

export const HeaderContainer = styled.nav`
display: flex;
flex-direction: row;
align-items:  center;
justify-content: space-between;
border-bottom: 1px solid #1E2D3D;
@media(max-width: 450px) {
padding-left: 0px;
padding-right:10px;
padding-top:5px;
}

`

export const Nav = styled.div`

`;

export const Ul = styled.ul`
margin-top: -15px;
margin-bottom: -15px;
display: flex;
    
    @media (max-width: 768px) {
      flex-flow: column nowrap;
      position: fixed;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      text-align: start;
      top: 55px;
      left: 0px;
      right:0px;
      width: 74vw;
      height: 79vh;
      margin-left: 25px;
      margin-top: 20px;
      background-color: ${({ open }) => open ? '#011627' : 'transparent'};
      transition: transform 0.3s ease-in-out;}
  
`;


export const Hamburguer = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
right: 40px;
z-index: 20;
display: none;
@media (max-width: 768px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}
div {
  width: 2rem;
  height: 0.15rem;
  background-color: ${({ open }) => open ? '#607B96' : '#607B96'};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
    `
  

export const Li = styled.li`
list-style-type: none;
@media screen and (max-width: 768px) {
  text-align: start;
  margin: 0px;
}
`;


export const ButtonGroup1 = styled.div`
display: flex;
flex-direction: row;


`
export const ButtonMenu = styled.button`
background-color: transparent;
border:none;
border-left: 1px solid #1E2D3D;
padding:10px;
font-size:16px;
text-decoration:none;
color: #607B96;
&:hover {
    color: #E5E9F0;
  };
  @media screen and (max-width: 768px) {
    border: none;
    color: ${({ open }) => open ? 'transparent' : '#FFFFFF'};
  }
`;

export const ButtonMenuFooter = styled.button`
background-color: transparent;
border:none;
border-right: 1px solid #1E2D3D;
padding:10px;
font-size:16px;
text-decoration:none;
color: #607B96;
&:hover {
    color: #E5E9F0;
  };
`;

export const Span5 = styled.span`
background-color: transparent;
border:none;
border-right: 1px solid #1E2D3D;
padding:10px;
font-size:16px;
text-decoration:none;
color: #607B96;
@media screen and (max-width: 1200px) {
  display: none;
}
`;
export const ButtonMenuLogo = styled.button`
display:flex;
background-color: transparent;
border:none;
border-right: 1px solid #1E2D3D;
padding:10px;
align-items: flex-start;
width: 300px;
font-size:16px;
text-decoration:none;
color: #607B96;
&:hover {
    color: #E5E9F0;
  };
  @media screen and (max-width: 768px) {
      display: block;
      border-right: none;
  }
`
export const Link1 = styled.a`
background-color: transparent;
border:none;
border-right: 1px solid #1E2D3D;
padding:10px;
font-size:16px;
text-decoration:none;
color: #607B96;
&:hover {
    color: #E5E9F0;
  }
`
export const Link2 = styled.a`
background-color: transparent;
border:none;
border-left: 1px solid #1E2D3D;
padding: 10px;
font-size:16px;
text-decoration:none;
color: #607B96;
&:hover {
    color: #E5E9F0;
  };
  @media(max-width: 768px) {
    border-right: 1px solid #1E2D3D;
  }
`


export const ButtonMenu2 = styled.button`
background-color: transparent;
border:none;
border-left: 1px solid #1E2D3D;
padding: 10px;
font-size:16px;
text-decoration:none;
color: #607B96;
&:hover {
    color: #E5E9F0;
  };
  @media screen and (max-width: 768px) {
    border: none;
    color: ${({ open }) => open ? 'transparent' : '#FFFFFF'};

  }
`

export const ButtonGroup2 = styled.div`
display: flex;
flex-direction: row;
`

export const AsideSideInfoContainer = styled.aside`
width: 299px;
border-right: 1px solid #1E2D3D;
display: flex;
flex-direction: rows;
@media screen and (max-width: 820px) {
  flex-direction: column;
  border-right: none;
  width: 85vw;
  border-bottom: 1px solid #1E2D3D;
  padding-bottom:20px;
}
`

export const MenuAboutMe = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const ListaAboutMe = styled.button`
background-color: transparent;
border:none;
padding-left: 10px;
padding-top: 10px;
font-size:16px;
color: #607B96;
&:hover {
    color: #FFFFFF;
  };

`
export const MenuIcons = styled.div`
padding-left: 10px;
padding-top: 10px;
display: flex;
flex-direction: column;
align-items: flex-start;
border-right: 1px solid #1E2D3D;
@media screen and (max-width: 820px) {
  flex-direction: row;
  border-right: none;
  border-bottom: 1px solid #1E2D3D;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 414px) {
  width: 83vw;
  border-bottom: 1px solid #1E2D3D;
}
`

export const TextBox = styled.div`

padding: 40px;
`

export const NumberOfLines = styled.span`

`
export const SpanCode = styled.span`
@media screen and (max-width: 1280px) {
  display:none;
}
`
export const ResponsiveText = styled.p`
display:none;
@media screen and (max-width: 1280px) {
  display: block;
}
`

export const LinesContainer = styled.div`
padding-top: 40px;
padding-left:20px;
display: flex;
flex-direction: column;
@media screen and (max-width: 1280px) {
  display:none;
}

`
//education

export const ContainerInfoEducation = styled.div`
display:flex;
flex-direction: row;
align-itmes:center;
justify-content: center;
overflow: auto;
height: 68vh;
padding:20px;
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

@media screen and (max-width: 912px) {
  height: 68vh;
  width: 84vw;
  padding:0px;
  padding-top:20px;
}
@media screen and (max-width: 768px) {
  height: 58vh;
}
@media screen and (max-width: 375px) {
  height: 48vh;
}
`
export const CardFlex = styled.div`
display:flex;
flex-direction: row;
@media screen and (max-width: 1024px) {
  flex-direction: column;
  padding-left:5px;
  padding-left:5px;
}
@media screen and (max-width: 375px) {
  padding: 0;
}

`

export const Card = styled.div`
width: 280px;
height: 420px;
background: #011221;
border: 1px solid #1E2D3D;
border-radius: 15px;
margin-right: 30px;
@media screen and (max-width: 1024px) {
  margin-right: 0px;
  margin-bottom: 30px;
}
@media screen and (max-width: 375px) {
  padding: 0;
}
`
export const CardImg = styled.img`
border-top-left-radius: 15px;
border-top-right-radius: 15px;

`
export const CardContent = styled.div`
padding:20px;

`
export const SpanTitleCard = styled.span`
font-family: 'Fira Code';
font-style: normal;
font-weight: 450;
font-size: 16px;
line-height: 21px;
color: #607B96;
`
export const CardText = styled.p`

`
export const Time = styled.p`
font-size: 16px;
text-align: center;
color: #FFFFFF;

`
export const Description = styled.p`

`
export const CardTitle = styled.p`
font-size: 16px;
color: #5565E8;
text-align: center;

`

export const ContainerInfoExperiences = styled.div`
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
@media screen and (max-width: 375px) {
  height: 50vh;
}
`

export const TextExperiences = styled.p`
padding-top: 40px;
padding-left: 40px;
padding-right: 40px;

`

export const ContainerInfoHobbies = styled.div`
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
@media screen and (max-width: 375px) {
  height: 50vh;
}
`