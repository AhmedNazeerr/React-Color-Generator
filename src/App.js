import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color,setcolor]=useState("#f15025");
  const [error,seterror]=useState(false);
  const [list,setlist]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    try{
       let colors=new Values(color).all(10);
       setlist(colors);
    }
    catch(error){
        console.log(error);
        seterror(true);
    }
  
  }
  return (
    <>
      <section className="container">
        <h3>Color Generator by AhmedNazeer </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={color} onChange={(e)=>setcolor(e.target.value)} placeholder='#f15025' className={`${error?'error' : null}`}/>
            <button className="btn" type='submit'>Get Colors</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color,index)=>{  
            console.log(color);
            return(
              <>
                 <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
              </>
            )
          })
        }
      </section>
    </>
  )
}

export default App
