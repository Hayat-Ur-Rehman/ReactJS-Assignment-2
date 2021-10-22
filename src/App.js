import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mydata from "./Object";

function App() {
  const [group,setGroup] = useState('')
  const [model,modelno] = useState('')

  const groupHandler =(name) =>{
  setGroup(name)
}

 const Foo =(modelno)=>{
  'setModelno'(modelno)
 }
  return (
    <>
    <div className="container mt-5 p-5">
      <div className="row">
        {mydata.filter((elem,index)=>elem.group == modelno).map((newelem,ind)=>{
          return <div className="col-lg-4 mb-5">
           <div className="card">
             <div className="card-body">
               <h2>{newelem.modelno}</h2>
               <p>{newelem.name}</p>
               <h5>{newelem.group}</h5>
             </div>
           </div>
         </div>
        })}
      </div>
    </div>
     
     <div className="container mb-5 ">
      <button className="btn btn-danger btn-lg m-1" onClick={()=>groupHandler('1558')}> Group-A</button>
      <button className="btn btn-danger btn-lg m-1 " onClick={()=>groupHandler('1558')} >Group-B</button>
      <button className="btn btn-danger btn-lg m-1 " onClick={()=>groupHandler('1559')} >Group-C</button>
      <button className="btn btn-danger btn-lg m-1 " onClick={()=>groupHandler('1660')} >Group-D</button>
      <button>Btn</button>
     </div>
    </>
  );
}

export default App;
