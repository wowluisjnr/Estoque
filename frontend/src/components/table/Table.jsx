import React from 'react'

export default props =>
<div className="box-body table-responsive no-padding">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {props.tableHeader.map(thValor=>
                            <th key={thValor}>{thValor}</th>)}             
                    </tr>                    
                </thead>
                <tbody>
                    {props.tableBody.map(obj => 
                        <tr key={obj.id}>
                            {Object.entries(obj).map(property => 
                            {if(property[0]!=='id'){
                                return <td key={property[0]}>{property[1]}</td>
                            }})                            
                        }
                        <td>
                            <button className='btn bg-warning btn-sm' onClick={() => props.onClick(obj,false)}>
                                <i className='fa fa-pencil'></i>
                            </button> 
                            <button className='btn bg-danger btn-sm' onClick={() => props.onClick(obj, true)}>
                                <i className='fa fa-trash'></i>
                            </button>
                        </td>
                        </tr>)}
                        {/* Children para adicionar linhas personalizadas <tr>*/}
                        {props.children}
                </tbody>
                
            </table>
            
            </div>