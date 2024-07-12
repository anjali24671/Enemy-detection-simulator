import React from "react";



const Button1 = ({ buttonTitle, location }) => {
    console.log(location)
    return <>
       
            <button onClick={()=>  window.location.href = location }>
                {buttonTitle}
            </button>
      
        
    </>
}

export default Button1