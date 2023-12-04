import React from "react";
import { Pagination } from '@mui/material';
import "./style.css"
const Paginaton = ({totalPages,setQuery}) => {
   function handleChange(e){
      setQuery(e.target.textContent)
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      
   }
  return <div className="paginations">
      <Pagination
              count={totalPages>=500?500:totalPages}
              variant='outlined'
              shape='rounded'
             onChange={(e)=>handleChange(e)}
            />
  </div>
};

export default Paginaton;
