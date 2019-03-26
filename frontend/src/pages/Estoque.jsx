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
    listEstoq:[]
}

export default class Estoque extends React.Component{

    state = {...initialState}

    componentDidMount(){
        axios(baseEstoqUrl).then(resp =>{
            
            console.log(resp.data)
        })

    }
    
    
    render()
    {
        return( 
        <Main title="Estoque" subtitle="Estoque Atual">
            <Box title="Estoque Atual" width='12'>
                <Table tableHeader={['Medicamento', 'Unidade', 'Data de Validade', 'Quantidade']}
                    ></Table>

            </Box>
        </Main>)
    }
}