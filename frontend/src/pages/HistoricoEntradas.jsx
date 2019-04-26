import React from 'react'
import Main from '../components/templates/Main'
import Box from '../components/box/Box';
import Table from '../components/table/Table'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/entradas'
const baseMedUrl='http://localhost:3001/medicamentos'
const baseLoteUrl='http://localhost:3001/lote'
const baseEstoqueUrl='http://localhost:3001/estoque'
const initialState ={
    medicamentos:{
        composicao:'',
        unidade:''
    },
    lote:{
        dataValidade:'',
        medicamento:{}
    },
    entrada:{
        data:'',
        lote:{},
        quantidade: null
    },
    list:[],
    listMed:[],
    listLote:[],
    estoquelist:[]
}

export default class HistoricoEntradas extends React.Component{

    state = {...initialState}

    componentDidMount(){
        axios(baseUrl).then(resp =>{           
            let listEstoque = []            
            resp.data.forEach(obj =>{
                listEstoque.push({
                    id:obj.id, 
                    data: obj.data,
                    medicamento:obj.lote.medicamento.composicao,
                    unidade:obj.lote.medicamento.unidade,
                    dataValidade: obj.lote.dataValidade,
                    quantidade: obj.quantidade
                })                
            })
            //console.log(listEstoque)
            this.setState({list:listEstoque})
        })
        axios(baseMedUrl).then( resp=> {
            this.setState({listMed: resp.data})
            //console.log(this.state.listMed)
        })
        axios(baseLoteUrl).then(resp=> {
            this.setState({listLote: resp.data})
        })
        axios(baseEstoqueUrl).then(resp=>{
            this.setState({estoquelist:resp.data})
        })

    }

    updateField(event){

        let medicamento = {...this.state.medicamentos}
        
        event.target.name === 'medicamento' && this.state.listMed.forEach(obj => {
        if(obj.id===parseInt(event.target.value)) medicamento = obj        
        })       
        
        const lote = {...this.state.lote}
        let entrada = {...this.state.entrada}
        if(event.target.name!=='quantidade')
            lote[event.target.name] = event.target.name==='medicamento'?medicamento : event.target.value
        else{
            const data = new Date()
            const dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(),
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear(),
            dataF=`${diaF}/${mesF}/${anoF}`
            entrada = {data:dataF, lote:lote, quantidade: parseInt(event.target.value)}            
        }

        this.setState({medicamentos:medicamento, lote:lote, entrada:entrada})
        
    } 

    getUpdatedList(entrada, add = true) {
        const list = this.state.list.filter(u => u.id !== entrada.id)

        const novaEntrada = {
            id:entrada.id, 
            data: entrada.data,
            medicamento:entrada.lote.medicamento.composicao,
            unidade:entrada.lote.medicamento.unidade,
            dataValidade: entrada.lote.dataValidade,
            quantidade: entrada.quantidade
        }  
        if(add) list.unshift(novaEntrada)
        return list
    } 

    addEstoque(lote, quantidade){
        //const loteNoEstoque = 
        console.log(this.state.estoquelist, lote)
        this.state.estoquelist.forEach(obj =>
            obj.lote.id === lote && console.log("teste OK") 

        )


    }
    

    save(){

//Ao adicionar uma nova entrada eu preciso atualizar a quantidade em estoque,
//
        

        let lote
        const hasOnTheListLote = this.state.listLote.find(obj => 
            obj.dataValidade === this.state.lote.dataValidade  
            && obj.medicamento.composicao === this.state.lote.medicamento.composicao            
        )

        if(!hasOnTheListLote){
            axios['post'](baseLoteUrl, this.state.lote)
                .then(resp =>{
                    this.setState({entrada:{lote:resp.data}})
            
                    //entrada.lote = resp.data                    
                    //console.log("NOVO ",entrada.lote)
                    //this.addEstoque(entrada.lote.id, entrada.quantidade)
                })               
        }
        else{
            //entrada.lote = hasOnTheListLote 
            this.setState({entrada:{lote:hasOnTheListLote}})
            //this.addEstoque(hasOnTheListLote.id, entrada.quantidade)         
        }

        const entrada = this.state.entrada
        console.log(entrada)

        const method = entrada.id ? 'put' : 'post'       
        const url = entrada.id ? `${baseUrl}/${entrada.id}` : baseUrl
        axios[method](url, entrada)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({entrada: initialState.entrada, list})               
            }) 
        //this.addEstoque(entrada.lote, entrada.quantidade)
        //incluir post
        //alterar put        
    }
    
    
    render()
    {
        return( 
        <Main title="Historico de Entradas">

            <Box title="Nova Entrada" width='12' elementFooter={<button class="btn btn-primary pull-right" onClick={()=>this.save()} >Adicionar</button>}>
            {this.formAddEst()}            

            </Box>
            <Box title="Historico de entradas" width='12'>
                <Table tableHeader={['Data', 'Medicamento', 'Unidade','Data de Validade', 'Quantidade']}
                        tableBody={this.state.list}
                        actionButtons={true}
                    ></Table>

            </Box> 
        </Main>)
    }

    formAddEst(){
        return (
        <form>
            <div className="col-xs-6">
                <label>Medicamento</label>
                <select className="form-control" name="medicamento" onChange={e=>this.updateField(e)}>
                    <option>Selecione medicamento</option>
                    {this.state.listMed.map(med=>
                        <option value={med.id} key={med.id}>{med.composicao} {med.unidade}</option>    
                    )}                    
                </select>
            </div>            
            <div className="col-xs-3">
                <label>Data de validade</label>
                <input type="date" className="form-control" 
                name="dataValidade" 
                onChange={e=>this.updateField(e)}
               />
            </div>
            <div className="col-xs-3">
                <label>Quantidade</label>
                <input type="number" className="form-control" 
                name="quantidade" 
                onChange={e=>this.updateField(e)}
                />
            </div>

            
        </form>)
    }
}