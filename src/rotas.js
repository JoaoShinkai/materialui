import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from '../src/pages/Inicio'
import NaoEncontrado from '../src/pages/NaoEncontrado/'
import Login from '../src/pages/Login/'
import Menu from '../src/pages/Menu/'
import Tarefas from '../src/pages/Tarefas'
import RotaPrivada from './rotasPrivadas'


export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/login" component={Login} />
                <RotaPrivada exact path="/menu" component={Menu} />
                <RotaPrivada exact path="/tarefas" component={Tarefas} />
                <Route component={NaoEncontrado} />
            </Switch>
        </BrowserRouter>
    )
}