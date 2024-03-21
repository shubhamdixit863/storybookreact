import React from 'react'
import './Toast.css';

const Toast = ({children,showToast,errorPart}) => {
  return (
    <>
     {
      errorPart? <div className={`toast ${showToast ? 'show' : ''}`}>
      <p>{children}</p>
    </div>:<div className={`toast ${showToast ? 'show' : ''}`}>
      <p>{children}</p>
    </div>
    }
    
    </>
   
   
  )
}

export default Toast