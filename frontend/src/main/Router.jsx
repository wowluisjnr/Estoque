import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Teste from '../pages/Teste'

export default props =>
    <Switch>
        <Route exact path='/' component={Teste}/>        
        <Redirect from='*' to='/' />  
    </Switch>