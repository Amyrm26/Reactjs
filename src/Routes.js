import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Componentes
import Home from './components/Home';
import Todo from './Containers/Todo';
import EspaciosTuristicosContainer from './Containers/EspaciosTuristicosContainer';
import ComidaContainer from './Containers/ComidaContainer';


const Routes  = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
           <Route path='/Cultura' component={Todo}/>
           <Route path='/EspaciosTuristicos' component={EspaciosTuristicosContainer}/>
           <Route path= '/Comida' component={ComidaContainer}/>



        </Switch>
    );
}

export default Routes;
