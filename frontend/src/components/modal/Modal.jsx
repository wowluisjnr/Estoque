import React from 'react'

export default props=>
<div className={`modal fade ${props.show ? 'in' : ''} `} style={{display:`${props.show ? 'block' : 'none' }`}}>
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <button className="close" onClick={()=>props.onClick(false)}><span>x</span></button>
                <h4 className="modal-title">{props.title}</h4>
            </div>
            <div className="modal-body">
                {props.children}
            </div>
            <div className="modal-footer">
            <button className="btn btn-default pull-left" onClick={() => props.onClick(false)} >Cancelar</button>
            <button className="btn btn-primary" onClick={(e) => props.onClick(e,true)}>Salvar</button>
            </div>
        </div>
    
    </div>
</div>