import React, {useReducer} from 'react';
import './App.css';
import './bootstrap/bootstrap.min.css'
import TodoApp from './Todoapp';
import {Globalstore} from './Datacontext'
import Todoreducer from './Todoreducer';

function App() {

    const initialdata = [
        {
            todo:'Try it yourself',
            id:0,
            checked:true,

        },
    ]
    let [state,dispatch] =useReducer(Todoreducer,initialdata)

     function Addtodo(obj)
     {
         dispatch({
             type:"ADD_TODO",
             payload:{
                 todo:obj.todo,
                 id:obj.id,
                 checked:obj.checked
             }
         })
     }

     function Deletetodo(obj)
     {
         dispatch({
             type:"DELETE_TODO",
             payload:obj
         })
     }
     function Handlecheck(id)
     {
         dispatch({
             type:"CHECKED",
             payload:id
         })
     }
    return (
        <Globalstore.Provider value={{store:state,addtodo:Addtodo,deletetodo:Deletetodo,handlecheck:Handlecheck}}>
            <div className="container mt-4 ">
            <div className=' specfic shadow-lg'>
            <TodoApp></TodoApp>
            </div>
                
            </div>
        </Globalstore.Provider>

    )
}

export default App;
