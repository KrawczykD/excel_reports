import React from 'react';


const Dialog = ()=>{
    return(
        <>
            <div style={{position:"absolute", top:"0" , left:"0" , width:"100%" , height:"100vh", zIndex:"0" , opacity:"0.4" , backgroundColor:"#000000"}}></div>
            <div style={{position:"absolute" , top:"50%" , left:"50%" ,  transform: "translate(-50%, -50%)" , width:"30%" , height:"40%" , backgroundColor:"white" , borderRadius:"10px"}}>
                <p style={{position:"relative" , top:"0" , right:"-95%"}}>X</p>
                <div class="warning">
                    <p>
                        You added wrong report sheet
                    </p>
                </div>
            </div>
        </>
    )
}

export default Dialog;