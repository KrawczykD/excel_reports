import React from 'react'
import excel from '../macro/macro.vbs';



console.log(excel)

const Macro = ()=>{
    return(
        <a style={{paddingLeft:"20px"}} href={excel} download="Macro.vbs"> Download Macro Here </a>
    )
}

export default Macro;