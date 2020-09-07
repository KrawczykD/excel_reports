import React from 'react';


const Dialog = ()=>{
    return(
        <div style={{position:"absolute" , top:"25%" , left:"25%" , width:"50%" , height:"50%" , backgroundColor:"red"}}>
            <div style={{position:"absolute", top:"0" , left:"0" , width:"100%" , height:"100vh", zIndex:"0" , opacity:"0.4" , backgroundColor:"#000000"}}>
            </div>
        </div>
    )
}

export default Dialog;