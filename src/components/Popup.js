import React from 'react';
import {PopupDiv} from './Popup.css';

const Popup = (props) => {

    let list =  props.items.map((item , index) => <li key={index}>{item}</li>)

    return(
            <PopupDiv displayPopupOpacity={props.displayPopupOpacity} displayPopup={props.displayPopup}>
                <p>Uploaded Sucesfully {list.length} Reports</p>
                <ul>{list}</ul>
            </PopupDiv>
    )
}


export default Popup;