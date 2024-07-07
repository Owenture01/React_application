import React, { useState } from "react";
import PropTypes from 'prop-types'

function Input({addPost}){
    
    const [input, setInput] = useState('');  // empty string for the initial value
    
    const handleChange = (event) => {   // without this, we cannot type anything and the input field will always be empty
        setInput(event.target.value);
    }

    const handleKeyDown = (event) => {
        const title = event.target.value;
    
        if (event.key === "Enter" && title){
          addPost(title);
          setInput('');    // clean and reset the input when the "Enter" is clicked
        }
    }


    return(
        <div className="Input">
            <div className="Input_header"> Create Post </div>
            <input 
                className = "Input_field" 
                type = "text" value={input} 
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

Input.prototype = {
    addPost: PropTypes.func.isRequired
}


export default Input;