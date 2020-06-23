import React,{useContext, useState} from  'react'
import {Globalstore} from './Datacontext'


const TodoApp = ()=>
{
    let {store,addtodo,deletetodo,handlecheck}= useContext(Globalstore)
    let  [todotext,setTodo] = useState('')
    let  [id, setId] = useState(1);
    
    
    const Handlechange = (e)=>
    {
        setTodo(e.target.value)
    }
    
    const Handlesubmit = ()=>{
        if(todotext===''|| todotext===" ")
        {
            alert("Please Enter something in the Text field \nEmpty Todo can't be added")
        }
        else{
        setId(id+1)
        addtodo({
            todo:todotext,
            id:id,
            checked:true,
        })
    }

    }
  
    return(
        <div className='container mt-4 '>
            <div className="form-group ">
                <h1 className="font-weight-bolder  txtshadow text-center font-size  pt-4 pb-2">TODO APP</h1>
                <input type="text" placeholder="Enter Todo here..." className="input-group"  onChange={Handlechange}/>
                <button  className=' btn mt mt-3 border btn-info btn-lg ' onClick={Handlesubmit}>Add</button>
                <br/>
    <label className="font-weight-bold font-size-13 mt-2">checked Todo = {store.filter(item=> item.checked === !true).length} 
                <br/> unchecked Todo = {store.filter(item=> item.checked !== false).length}   
                <br/>Total Todo= {store.length}</label>
                
            </div>
            <div>
                <ul className="list-group-flush ">
                
                        {store.map((item,ind)=>{
                            return(
                                <li key={ind} className="list-group-item list-group-item-action hoverr d-flex
                                justify-content-between align-items-center  p-1 ">
                       
                           
                         <button type="button" onClick={()=> deletetodo(item.id)} className=" btn btn-sm  hoverin newcolor ">X</button>
                        <span className="font-size-14">{item.todo}
                        </span>
                           <span className="badge badge-info badge-pill"><input type="checkbox" className="checkbox-light" value="" onChange={()=> handlecheck(item.id)}></input></span>
                            
                            </li>
                            )
                        })}
                     
                </ul>
                <span className="mt-5 newcolor">Created Using React By @syedSabtain</span>
           </div>
            
        </div>
    )
}


export default TodoApp;