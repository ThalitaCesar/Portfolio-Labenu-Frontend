import React, { useEffect, useState } from 'react';
import { ListaAboutMe, NavDropDown } from './styles';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { SiFiles } from 'react-icons/si';
    
    export function DropdownList({ show, listRef }) {

        const [search, setSearch] = useState('');

	useEffect(() => {
		if (!show) {
			setSearch('');
		}
	}, [show]);

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
        return (
            <AnimatePresence>
            {show && (
                    <div initial={{ opacity: 0, height: '0%' }}
					animate={{ opacity: 1, height: 'auto' }}
					exit={{ opacity: 0 }}>
            <NavDropDown ref={listRef}>
                <ListaAboutMe onClick={goToBio} >
             <strong> > </strong> 
            <SiFiles style={{color: '#E99287'}}/>
            <span> bio</span> 
            </ListaAboutMe>
            <ListaAboutMe onClick={goToEducation} >
            <strong> > </strong> 
            <SiFiles style={{color: '#43D9AD'}} />
            <span> cursos e bootcamps </span> 
            </ListaAboutMe>
            <ListaAboutMe onClick={goToExperiences} >
            <strong> > </strong> 
            <SiFiles  style={{color: '#3A49A4'}}/> 
            <span> experiências</span> 
            </ListaAboutMe>
            <ListaAboutMe onClick={goToHobbies}>
            <strong> > </strong> 
            <SiFiles  style={{color: '#FEA55F'}}/> 
            <span> hobbies e +</span> 
            </ListaAboutMe>
            </NavDropDown>
            </div>
             )}    
            </AnimatePresence>
        );
    };
