{/*import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../Redux/todoSlice';

function Tabs() {
    const  tabs = ["All","Active","Completed"];
    const selectedTab = useSelector(state=>state.todo.filter);
    const dispatch = useDispatch();
  return (
    <div>
        <ul>
            {tabs.map((tab)=>(
         <li className = {selectedTab == tab? `active` : ``}
         onClick={()=>dispatch(setFilter(tab))}>
            {tab}

         
            
         </li>
            ))}
        </ul>
      
    </div>
  )
}

export default Tabs;*/}
