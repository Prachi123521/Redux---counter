import { useState ,useMemo} from "react";
import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { deleteTodo,editTodo,clearTodo,filterTodo,toggleComplete} from "../Redux/todoSlice";
import{FaPencilAlt,FaTrash} from 'react-icons/fa';





const Todolist = () => {
    const [text,setText]=useState("");
    const [editTodoObj,seteditTodoObj]=useState({});
    const [isEdit,setIsEdit]=useState(false);
    
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
       
      
      
      const editHandler = (textobj) =>{
        seteditTodoObj(textobj);
        setText(textobj.value);
        setIsEdit(true);
      }
    
  
      const saveBtnHandler = () =>{
        dispatch(editTodo({id:editTodoObj.id,text:text}));
        setText('');
        setIsEdit(false);
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
                  <div className ={`${todo.completed ? "line-through text-green-400" : "text-orange-400"}`}>
                <span>{todo.text}</span>
                 </div>
                <div className="flex">
                <button  className =" bg-green-400 mr-2 p-2  rounded" onClick={()=>handleDeleteTodo(todo.id)}><FaTrash/></button>

              
              
    

                {isEdit ? (
                  <>
                  <input type = "text" placeholder="Edittodo"/>
                  <button onClick={()=>saveBtnHandler()}>Save</button>
                  </>
                ):(<button className = "bg-red-400 p-2 rounded" onClick ={()=>editHandler(todo)}><FaPencilAlt/></button>
              )}
            {/*<button className = "bg-red-400 p-2 rounded" onClick ={()=>editHandler(todo)}><FaPencilAlt/></button>*/}
              
              </div>
              </li>
    
              ))}
            </ul>
            </div>
             )}
            



           <div>
           <button  className = "bg-red-400 mr-2 p-2 rounded" onClick={handleClearTodo}>Clear</button>
           </div>
        
    </>
        
           ) }
          
    



export default Todolist;
