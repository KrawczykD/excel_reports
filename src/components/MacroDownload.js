import React from 'react'
import Excel from '../macro/macro.xlsm';

const Macro = ()=>{
    return(
        <a href={Excel} download="Macro.xlsm"> Download Here </a>
    )
}

export default Macro;