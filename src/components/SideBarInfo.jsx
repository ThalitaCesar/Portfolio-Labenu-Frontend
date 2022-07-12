import { SiFiles } from 'react-icons/si';
import { AsideSideInfoContainer, ListaAboutMe, MenuAboutMe, MenuIcons, DropDownMenu, IconDrodown, NavDropDown } from './styles';
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DropdownMenu } from './DropDownMenu';


export function SideBarInfo() {

    const navigate = useNavigate();

    const goToBio = () => {
        navigate('/about/bio')
      };
    const goToExperiences = () => {
        navigate('/about/experiences')
    };
    const goToEducation = () => {
        navigate('/about/education')
    };
    const goToHobbies = () => {
        navigate('/about/hobbies')
    };
    const [currency, setCurrency] = useState('USD');
    return (
        <AsideSideInfoContainer>
            <MenuIcons>
                <img src={icon1} style={{paddingBottom:"10px", paddingRight:"10px"}}/>
                <img src={icon2} style={{paddingBottom:"10px", paddingRight:"10px"}}/>
                <img src={icon3} style={{paddingBottom:"10px"}}/>
            </MenuIcons>

        <MenuAboutMe>
        <DropdownMenu />

        </MenuAboutMe>
        </AsideSideInfoContainer>
    )
}
