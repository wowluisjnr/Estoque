import React from 'react'

export default props =>
<div className={`col-md-${props.width} col-sm-6 col xs-12`}>
   <div className={`info-box ${props.children && props.theme}`}>
        {/* <!-- Apply any bg-* className to to the icon to color it --> */}
        <span className={`info-box-icon ${!props.children && props.theme}`}><i className={`fa ${props.icon}`}></i></span>
        <div className="info-box-content">
            <span className="info-box-text">{props.subject}</span>
            <span className="info-box-number">{props.stats}</span>       
            {props.children} 
        </div>   
   </div>
</div>
