import React, { useEffect, useState } from 'react'
import "./Pagination.css"

const Pagination = ({showPerPage, onPaginationChange, total}) => {


    const [counter, setCounter] = useState(1);
    

    
    

    useEffect(() => {
        const value = showPerPage * counter;
        // console.log("start value: ", value - showPerPage);
        // console.log("end value: ", value);
        onPaginationChange(value - showPerPage, value)
    },[counter]);

    const onButtonClick = (type) => {
        if(type === "prev"){
          if(counter === 1) {
            setCounter(1)
          } else {
            setCounter(counter - 1)
          }
        } else if(type === "next"){
            if(Math.ceil(total/showPerPage) === counter){
                setCounter(counter)
            } else {
                setCounter(counter+1)
            }
        }
    }

  return (
    <div className='cont'>    
       <div className='btns'>
         <button onClick={()=> onButtonClick('prev') }>Previous</button>      
         
         <button onClick={()=> onButtonClick('next')}>Next</button>
       </div>
    </div>
  )
}

export default Pagination