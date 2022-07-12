import {useEffect, useState} from "react";

export function useOutsideClick (el, initialState){
    const [isActive, setIsActive] = useState(initialState);

    useEffect(()=>{
        const onClick = e => {
            if(el.current !== null && !el.current.contains(e.target)){
                setIsActive(!isActive);
            }
        }
        if(isActive){
            window.addEventListener("clique", onClick)
        }

        return ()=>{
            window.removeEventListener("click", onClick)
        }
        
    },[isActive, el])
    return [isActive, setIsActive]
}