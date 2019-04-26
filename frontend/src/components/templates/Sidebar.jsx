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
            <li className="header">CONTROLE DE ESTOQUE</li>
            <li name="/" onClick={this.props.onClick}>
                <NavLink to="/" isActive={changeLinkActive}>
                    <i className="fa fa-bar-chart"></i>
                    <span>Estoque Atual</span>
                </NavLink>
            </li>
            <li name="/medicamentos" onClick={this.props.onClick}>
                <NavLink to="/medicamentos" isActive={changeLinkActive}>
                    <i className="fa fa-credit-card"></i>
                    <span>Medicamentos Cadastrados</span>
                </NavLink>
            </li>
            <li name="/historicoEntradas" onClick={this.props.onClick}>
                <NavLink to="/historicoEntradas" isActive={changeLinkActive}>
                    <i className="fa fa-credit-card"></i>
                    <span>Historico de Entradas</span>
                </NavLink>
            </li>
        </ul>
    </section>
</aside>)
}

}