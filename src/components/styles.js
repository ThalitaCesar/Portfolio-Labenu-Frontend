import styled from 'styled-components';

export const FooterContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-top: 1px solid #1E2D3D;
`

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-bottom: 1px solid #1E2D3D;
`

export const ButtonGroup1 = styled.div`
display: flex;
flex-direction: row;

`
export const ButtonMenu = styled.button`
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
  }
`

export const ButtonGroup2 = styled.div`
display: flex;
flex-direction: row;

`