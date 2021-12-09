import React from 'react';
import '../styles/widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import { FiberManualRecord } from '@material-ui/icons';

const Widgets = () => {

    const newArticle=(heading,subtitle)=>(
        <div className='widgetsArticles'>
            <div className='widgetsLeft'>
                <FiberManualRecord/>
            </div>
            <div className='widgetsRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
    return (
    <div className="widgetsContainer">
        <div className="widgetsHeader">
            <h2 className="widgetsHeader">LnkedIn News</h2>
        <InfoIcon/>
        </div>
{newArticle("Bitcoin Breaks $25k","crypto - 8000 readers")}
{newArticle("Tesla hits new","cars & auto - 359 readers")}
{newArticle("Is redux too good?","code - 123 readers")}


    </div>
    );
}
 
export default Widgets;