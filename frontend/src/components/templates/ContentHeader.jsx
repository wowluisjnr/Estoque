import React from 'react'
import {Link} from 'react-router-dom'


export default props =>
        <section className="content-header">
            <h1>{props.title}
                {props.subtitle && <small>{props.subtitle}</small>}
            </h1>

            {/* Caminho para a pagina, arvore */}
            <ol className="breadcrumb">
                <li>
                    <Link to="/"><i className="fa fa-dashboard"></i> Level</Link>                    
                </li>
                <li className="active"> Here</li>
            </ol>  

        </section>