import React from 'react'
import { NavLink} from 'react-router-dom'

export default class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state ={linkIsActive: true}
    }

    render(){
        const changeLinkActive = (match) =>{
            if(!match){
                return false
            }
            let li = document.getElementsByName(`${match.path}`)
            let pai
            if(li.item(0)){
                pai =li.item(0).parentNode
                for(var i = 0; i < pai.children.length; i++){
                    pai.children[i].classList.remove('active')                    
                }
                li.item(0).classList.add('active')
            }                        
        }

        
return(
<aside className="main-sidebar">
    <section className="sidebar">
        <ul className="sidebar-menu">
            <li className="header">CONTROLE FINANCEIRO</li>
            <li name="/" onClick={this.props.onClick}>
                <NavLink to="/" isActive={changeLinkActive}>
                    <i className="fa fa-bar-chart"></i>
                    <span>Visão Geral</span>
                </NavLink>
            </li>
            <li name="/despesas" onClick={this.props.onClick}>
                <NavLink to="/despesas" isActive={changeLinkActive}>
                    <i className="fa fa-credit-card"></i>
                    <span>Despesas</span>
                </NavLink>
            </li>
            <li name="/categorias" onClick={this.props.onClick}>
                <NavLink  to="/categorias" isActive={changeLinkActive}>
                    <i className="fa fa-tags"></i><span>Categorias</span>
                </NavLink>
            </li>
        </ul>
    </section>
</aside>)
}

}