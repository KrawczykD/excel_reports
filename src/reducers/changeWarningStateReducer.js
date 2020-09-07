const changeWarningStateReducer = (state = null , action)=>{
    switch(action.type) {
        case "CHANGE_WARNING_STATE":
            return state = action.state
    

        default:
            return state
    }
}

export default changeWarningStateReducer;
