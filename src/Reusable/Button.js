import React from 'react'

 function Button({styleClass,onClick,text}) {
  return (
    <div>
      <button className={styleClass} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
