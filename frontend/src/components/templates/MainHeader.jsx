import React from 'react'
import Logo from './Logo';
//import {Link} from 'react-router-dom'

import NavTop from './NavTop';
import Sidebar from './Sidebar';

export default class MainHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }   
          
    handleClick(isLinkClick) {
        let element = document.getElementsByTagName('body')[0]
        if(element.clientWidth <= 750){            
            element.classList.remove('sidebar-collapse')            
            element = this.state.isToggleOn ? element.classList.add('sidebar-open') : element.classList.remove('sidebar-open')
            this.setState(state => ({
                isToggleOn: !state.isToggleOn
                }));
        }
        else if(!isLinkClick){
            element.classList.remove('sidebar-open')
            element = this.state.isToggleOn ? element.classList.add('sidebar-collapse') : element.classList.remove('sidebar-collapse')
            this.setState(state => ({
                isToggleOn: !state.isToggleOn
                }));
        }
            
      }

render(){
    return(
        <React.Fragment>        
            <header className="main-header">
                <Logo nameProgram="Estoque"/>
                <NavTop 
                    onClick={() => this.handleClick(false)} 
                    />
            
            </header>
            <Sidebar onClick={() => this.handleClick(true)}/>
        </React.Fragment>)
}
}
    


