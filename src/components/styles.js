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
@media screen and (max-width: 700px) {
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
  @media screen and (max-width: 700px) {
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
export const ButtonMenuLogo = styled.button`
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
  @media screen and (max-width: 700px) {
      display: block;
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
  @media(max-width: 700px) {
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
  @media screen and (max-width: 700px) {
    border: none;
    color: ${({ open }) => open ? 'transparent' : '#FFFFFF'};

  }
`

export const ButtonGroup2 = styled.div`
display: flex;
flex-direction: row;


`