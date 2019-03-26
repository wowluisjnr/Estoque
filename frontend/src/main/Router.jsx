import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Estoque from '../pages/Estoque'

export default props =>
    <Switch>
        <Route exact path='/' component={Estoque}/>        
        <Redirect from='*' to='/' />  
    </Switch>