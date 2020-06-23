
const Todoreducer = (state,action)=>
{
    switch(action.type)
    {
        case "ADD_TODO":
            return [...state,action.payload]
        case "DELETE_TODO":
            return state.filter( item=> item.id !== action.payload)
        case "CHECKED":
            return (
                state.map(item=>
                    {
                        if(item.id !== action.payload)
                        {
                            return item
                        }
                        else
                        {
                            return{
                                todo:item.todo,
                                id: item.id,
                                checked: !item.checked,
                            }
                        }
                    })
            )
    }
}

export default Todoreducer