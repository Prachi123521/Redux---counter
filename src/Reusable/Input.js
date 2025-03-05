import React from 'react'

 function Input({type="text",placeholder,value,onChange,id,name,...props}) {
  return (
    
      <input type = {type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name ={name}
      {...props}/>
    
  );
}
export default Input;
