import React from 'react'
import './styles.css'

function Button({text, onClick, disabled}) { 
  return (
    <div 
    className="btn" 
    onClick = {onClick} 
    disabled = {disabled}> 
    {text}
    </div>
  ) 
}

export default Button