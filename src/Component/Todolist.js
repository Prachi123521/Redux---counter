import { useState} from "react";
import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { deleteTodo,editTodo,clearTodo,filterTodo,toggleComplete} from "../Redux/todoSlice";
import{FaPencilAlt,FaTrash} from 'react-icons/fa';
import { useGetAllProductsQuery } from "../Redux/apiSlice";





const Todolist = () => {
    const [text,setText]=useState("");
    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState("");
    
    const todos = useSelector((state)=>state.todo.todos);
    const filter = useSelector((state)=>state.todo.filter);
    
    

    const dispatch = useDispatch();
    console.log(todos);
   
  

    const handleDeleteTodo = (id)=>{
        dispatch(deleteTodo(id));
       };
    
      
       
       const handleClearTodo =()=>{
        dispatch(clearTodo());
       }

       const handleSort = (filter)=>{
       dispatch(filterTodo(filter));
       }
       
       const sortTodo = todos.filter((todo)=>{
        if(filter === "All") return true;
        if(filter === "Active" && todo.completed)return true;
        if(filter === "Not Completed" && !todo.completed)return true;
        return false;
       });

       const handleToggleComplete = (id)=>{
        dispatch(toggleComplete({id}));
       };
       
      
      
     const handleEditClick = (id,currentText)=>{
       setEditId(id);
       setEditText(currentText);
     }

     const handleSaveClick = (id)=>{
      dispatch(editTodo({id,text:editText}));
      setEditId(null);
      setEditText("");
     }
    

    

    
      

  return (
         <>
         <div className=" mx-auto mt-6 items-center flex flex-col bg-indigo-400 rounded">
          <div>
          <select onChange={(e)=>handleSort(e.target.value)}>
          <option value ="All">All</option>
          <option value = "Active">Active</option>
          <option value = "Not Completed">Not Completed</option>
          </select>
         </div>
         </div>
         {todos.length > 0 && (
            <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4  "> 
            <ul>
            
              {sortTodo.map((todo)=>(
              <li className="flex item-center justify-between bg-white p-3 mb-3">
                <input type = "checkbox" onClick={()=>{handleToggleComplete(todo.id)}}/>
                  <div className ={`${todo.completed ? "line-through text-green-400" : "" }`}>
                {todo.text}
                 </div>
                
                <div className="flex">
                <button  className =" bg-green-400 mr-2 p-2  rounded" onClick={()=>handleDeleteTodo(todo.id)}><FaTrash/></button>
                {editId === todo.id ? (
                  <>
                  <input type = "text" value={editText} onChange={(e)=>setEditText(e.target.value)} />
                  <button onClick={()=>handleSaveClick(todo.id)}>Save</button>
                  </> ) : (
              
                  
                  <button className = "bg-red-400 p-2 rounded" onClick ={()=>handleEditClick(todo.id,todo.text)}><FaPencilAlt/></button>
              
                ) }
               
              </div>
              </li>
    
              ))}
            </ul>
            </div>
             )}
            
            <div>
              <div className="flex item-center gap-4">

              </div>
            </div>


           <div>
           <button  className = "bg-red-400 mr-2 p-2 rounded" onClick={handleClearTodo}>Clear</button>
           </div>
        
    </>
        
           ) }
          
    



export default Todolist;
