const displayDataReducer = (state = [[],[]] , action)=>{
    switch(action.type) {
        case "ADD_DATA":
            return [action.OTIF , action.OPEN]

    

        default:
            return [...state]
    }
}

export default displayDataReducer;
