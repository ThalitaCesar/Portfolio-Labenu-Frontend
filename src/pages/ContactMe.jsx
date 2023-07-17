import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import code1 from '../assets/code1.png';
import code2 from '../assets/code2.png';
import code3 from '../assets/code3.png';
import { HelloContainer, HomeInfo, ContainerGame, Pages, Snake, Span, Span1, Span2, Span3, Text1, Text2, Text3, Text4, ContactInfo, ContactContainer, ContactInfoContact } from "./styles";
import { ContainerCode, Form, Input, Label, Submit, TextArea, TextCode, TextExperiences } from "../components/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import { slideIn, textVariant2 } from "../utils/motion";


export function ContactMe(){

    const [nameUser,setNameUser] = useState('')
    const [email,setEmail] = useState('')
    const [msg,setMsg] = useState('')

    const navigate = useNavigate();

    const handleSubmit=(e)=> {
    e.preventDefault();
  }

  const goToConfirmation = () => {
    navigate('/contactme/confirmation')
  };


    return(
            <Pages>
            <Header/>
            <ContactContainer>
              
            <motion.div variants={slideIn("right", "spring", 0, 1.8)}
                                initial="hidden"
                                animate="show">
                <ContactInfoContact>
                <Form>
                <Label>Name:</Label>
                <Input type="text" value={nameUser} onChange={(e)=>setNameUser(e.target.value)}/>
                <Label>Email:</Label>
                <Input  type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <Label>Message:</Label>
                <TextArea type="text" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                <Submit type="submit" value="enviar_mensagem" onSubmit={handleSubmit}
                  onClick={goToConfirmation}/>
                </Form>
                </ContactInfoContact>
                </motion.div>

                <motion.div variants={textVariant2} initial="hidden" whileInView="show">
                <Snake>
                <TextCode>
                        <span style={{color: "#607B96"}}>
                        <span style={{color: "#C98BDF "}}>const</span> 
                        <span style={{color: "#5565E8"}}> button </span>  
                        <span style={{color: "#C98BDF"}}>=</span> 
                        <span style={{color: "#5565E8"}}> document.querySelector</span> 
                        <span>(<span> 
                          <span style={{color: "#FEA55F"}}>'#sendBtn'</span>
                          </span>)</span>
                          <br></br>
                          <br></br>
                        <span style={{color: "#C98BDF "}}>const</span> 
                        <span style={{color: "#5565E8"}}> message </span>  
                        <span style={{color: "#C98BDF"}}>=</span> 
                        <span style={{color: "#607B96"}}>&#123; </span>
                         <br></br>
                         <span style={{color: "#5565E8"}}> name: </span>  
                         <span style={{color: "#FEA55F"}}>{nameUser}</span>, <br></br>
                         <span style={{color: "#5565E8"}}> email: </span> 
                         <span style={{color: "#FEA55F"}}>{email}</span>, <br></br>
                         <span style={{color: "#5565E8"}}> message: </span> 
                         <span style={{color: "#FEA55F"}}>{msg}</span><br></br>
                         <span style={{color: "#607B96"}}>&#125; </span>,<br></br>
                         <br></br>
                         <br></br>
                         <span style={{color: "#5565E8"}}> button.addEventListener<span/>
                         <span style={{color: "#607B96"}}>&#40;</span>
                          <span  style={{color: "#FEA55F"}}>'click'</span>,
                          <span style={{color: "#607B96"}}> &#40; &#41; </span> 
                          <span style={{color: "#C98BDF "}} >=></span>
                          <span style={{color: "#607B96"}}>&#123; </span> <br></br>
	                        <span style={{color: "#5565E8"}}>form.send</span>
                          <span style={{color: "#607B96"}}>&#40;</span>
                          <span style={{color: "#5565E8"}}> message</span>
                           <span style={{color: "#607B96"}}> &#41; ;</span>  <br></br>
                          <br></br>
                          <span style={{color: "#607B96"}}>&#125; </span>
                           <span style={{color: "#607B96"}}>  &#41; </span>


                           </span>
                           </span>
    
                         </TextCode>
                         </Snake>
                         </motion.div>
            </ContactContainer>
           <Footer/>
           </Pages>
    )
} 
