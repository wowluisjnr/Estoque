import React from 'react'
import Main from '../components/templates/Main'
import Table from '../components/table/Table';
import Modal from '../components/modal/Modal'

import axios from 'axios'
import Box from '../components/box/Box';


const baseUrl = 'http://localhost:3001/medicamentos'
const initialState = {
    medicamentos: { 
        composicao:'',
        unidade:'' 
    },
    list: [],
    loading:true,
    showModal:false 
}

export default  class Medicamentos extends React.Component{

    state = {...initialState}

    componentDidMount(){
        axios(baseUrl).then(resp => this.setState({list:resp.data, loading:false}))
    }

    controleModal(isSave){                 
        this.setState({showModal: false})
        isSave && this.save()
        this.clear()
    }

    addMedicamento(){
        this.setState({showModal: true})
    }

    clear() {
        this.setState({ medicamentos: initialState.medicamentos })
    }

    save(){
        const medicamentos = this.state.medicamentos
        
        const method = medicamentos.id ? 'put' : 'post'
        const url = medicamentos.id ? `${baseUrl}/${medicamentos.id}` : baseUrl
        axios[method](url, medicamentos)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({medicamentos: initialState.medicamentos, list})               
            })    
        //incluir post
        //alterar put        
    }

    updateField(event){
        const medicamentos ={...this.state.medicamentos}
        medicamentos[event.target.name] = event.target.value
        this.setState({medicamentos})
    } 
    getUpdatedList(medicamentos, add = true) {
        const list = this.state.list.filter(u => u.id !== medicamentos.id)
        if(add) list.push(medicamentos)
        return list
    } 

    editOrRemove(medicamentos, remover) {        
        if(remover) { 
            window.confirm(`Realmente deseja excluir o Medicamento "${medicamentos.composicao}"?`) &&            
            axios.delete(`${baseUrl}/${medicamentos.id}`).then(resp => {
                const list = this.getUpdatedList(medicamentos, false)
                this.setState({ list })
            })
        }
        else{
            this.setState({ medicamentos })
            //console.log(this.state)
            this.setState({showModal:true})
        }
    }


    render(){
        return(
        <Main title="Medicamentos" subtitle="Medicamentos cadastrados">   
            
                <Box width={6} 
                    theme='box-success' 
                    loading={this.state.loading}
                    title={'Medicamentos Cadastrados'} 
                    button={true} 
                    onClick={() => this.addMedicamento()}                   
                    >
                    <Table 
                        onClick={(objCategoria, remove) => this.editOrRemove(objCategoria, remove)}
                        actionButtons={true}
                        tableHeader={["Medicamento", "Unidade","Ações"]} 
                        tableBody={this.state.list} />               
                 </Box>
                 <Modal show={this.state.showModal} 
                    onClick={(isSave)=> this.controleModal(isSave)}
                    title="Adicionar Medicamento!">
                    {this.renderForm()}
                </Modal> 
        </Main>)
        }

        renderForm(){
            return(
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label"> Medicamento: </label>
                        <div class="col-sm-10">
                            <input type="text" className="form-control" 
                            name="composicao" value={this.state.medicamentos.composicao}
                            placeholder="Composição do medicamento" 
                            onChange={e=>this.updateField(e)}
                            />
                        </div>
                    </div>  
                    <div className="form-group">
                        <label className="col-sm-2 control-label"> Unidade: </label>
                        <div class="col-sm-10">
                        <select class="form-control" name="unidade" onChange={e=>this.updateField(e)}>
                            <option value="CP">CP</option>
                            <option value="SUP">SUP</option>
                            <option value="GTS">GTS</option>
                            <option value="AMP">AMP</option>
                        </select>
                        </div>
                    </div>                   
                </form>   
            )
        }

}