const changeWarningState = (state)=>{

    return(
        {   
            type:"CHANGE_WARNING_STATE",
            state:state,
        }
    )
}

export default changeWarningState;