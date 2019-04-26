import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Estoque from '../pages/Estoque'
import Medicamentos from '../pages/Medicamentos'
import HistoricoEntradas from '../pages/HistoricoEntradas'

export default props =>
    <Switch>
        <Route exact path='/' component={Estoque}/>
        <Route path='/medicamentos' component={Medicamentos}/>  
        <Route path='/historicoEntradas' component={HistoricoEntradas}/>                   
        <Redirect from='*' to='/' />  
    </Switch>