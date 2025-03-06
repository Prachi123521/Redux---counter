import React from 'react'

 function Button({styleClass,onClick,text,...props}) {
  return (
    <div>
      <button className={styleClass} onClick={onClick}>
        {text}
        {...props}
      </button>
    </div>
  );
}

export default Button;
