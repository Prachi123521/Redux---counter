import { createSlice } from "@reduxjs/toolkit";


{/*const task = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem(('todos'))) : []*/}




const initialState = {
    todos:[],
    filter:"All",
    
}
const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers:{
        addTodo:(state,action) => {
              state.todos.push(action.payload);
              console.log(action.payload);
              
              {/*localStorage.setItem('todos',JSON.stringify(state.todos.map(task=>task)))*/}
              
              
        }, 

       filterTodo:(state,action)=>{
        state.filter=action.payload;
          
       },
      
       
    
        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
          
        },

        editTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(todo.id === action.payload.id){
                    todo.text=action.payload.text
                }
                return todo;
            });
        },

        toggleComplete:(state,action)=>{
            const {id} = action.payload;
            const index = state. todos.findIndex((todo)=>todo.id === id);
            state.todos[index].completed =!state.todos[index].completed;
        },


    
        clearTodo:(state,action)=>{
            state.todos=[];
        },

    
        
    


     

        
        

},
});
        

console.log("Actions" ,todoSlice.initialState);

export const {addTodo,deleteTodo,editTodo,clearTodo,setFilter,filterTodo,toggleComplete,setTodo}=todoSlice.actions;
export default todoSlice.reducer;