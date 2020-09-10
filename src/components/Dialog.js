import React from 'react';
import changeWarningState from '../actions/changeWarningStateAction'
import {connect} from 'react-redux';
// import { state } from './ExcelLoad';
import { Background , Paragraph , Close , Warning } from './Dialog.css.js';


const Dialog = ({changeWarningState , text})=>{
    return(
        <>
            <Background></Background>
            <Warning>
                <Close onClick={()=>{changeWarningState(false)}}>X</Close>
                    <Paragraph>
                        {text}
                    </Paragraph>
            </Warning>
        </>
    )
}

const mapDispatchToProps = (dispatch)=>({
    changeWarningState : (state)=>dispatch(changeWarningState(state))
})

export default connect(null,mapDispatchToProps)(Dialog);