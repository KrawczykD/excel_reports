import React from 'react'
import Excel from '../macro/macro.xlsm';

const Macro = ()=>{
    return(
        <a style={{paddingLeft:"20px"}} href={Excel} download="Macro.xlsm"> Download Macro Here </a>
    )
}

export default Macro;