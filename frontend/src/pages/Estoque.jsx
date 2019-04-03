import React from 'react'
import Main from '../components/templates/Main'
import Box from '../components/box/Box';
import Table from '../components/table/Table'
import axios from 'axios'

const baseEstoqUrl = 'http://localhost:3001/estoque'
//const baseMed ='http://localhost:3001/medicamento'
const initialState ={
    estoque:{
        medicamento:'',
        unidade:'',
        dataValidade:'',
        quantidade:0
    },
    list:[]
}

export default class Estoque extends React.Component{

    state = {...initialState}

    componentDidMount(){
        axios(baseEstoqUrl).then(resp =>{           
            let listEstoque = []            
            resp.data.forEach(obj =>{
                listEstoque.push({
                    id:obj.id, 
                    medicamento: obj.lote.medicamento.composicao,
                    unidade:obj.lote.medicamento.unidade,
                    dataValidade: obj.lote.dataValidade,
                    quantidade: obj.quantidade
                })                
            })
            //console.log(listEstoque)
            this.setState({list:listEstoque})
        })

    }
    
    
    render()
    {
        return( 
        <Main title="Estoque" subtitle="Estoque Atual">
            <Box title="Estoque Atual" width='12'>
                <Table tableHeader={['Medicamento', 'Unidade', 'Data de Validade', 'Quantidade']}
                        tableBody={this.state.list}
                    ></Table>

            </Box>
        </Main>)
    }
}