import React from 'react'
import ContentHeader from './ContentHeader';

export default props =>            
        <div className="content-wrapper"> 
            <ContentHeader {...props}/>
            <section className="content">           
                {props.children}   
            </section>        
        </div>   
