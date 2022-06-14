import React,{useState,useEffect} from 'react';
import Axios from "axios";

import {
  
    Link
  } from 'react-router-dom';
import cry from './img/AVAETAR.jpeg';
import jay from './img/hmh.png';
//import axios from 'axios';

const User=()=>{

    const [EmployyeeName,setEmployyeeName] =useState("");
    const [EmployeeEmail,setEmployeeEmail] =useState("");
   
    const[EmployeeList,setEmployeeList]=useState([]);

     useEffect(()=>{
         Axios.get("http://localhost:3001/get").then((response)=>{
             setEmployeeList(response.data);
         });
     
     },[]);

     const deleteEmplo=(id) =>{
         Axios.delete(`http://localhost:3001/${id}`);
     }



    return(
          <body class="nick">
      <nav>
      <img id="logo"src={jay}/>
        <div id="leftdiv">
            <input type="text"  placeholder="Search.." name="search"/>
        </div>
    </nav>
    <div id="right">
       <img src={cry} alt="logo" width="100" height="100" class="Avatar1"/>
       <p className='m4'> Name : John black</p>
       <p  className='m4'> Email : jon@gmail.com</p>
       <p  className='m4'>Postion : CEO</p>
       <button className='siya' >Edit</button>
       <button className='nicky'>Delete</button>
       </div>
    
<div id="left">
        {/* <img src={cry} alt="logo" width="100" height="100" class="Avatar"/>
        <img src={cry} alt="logo" width="100" height="100" class="Avatar"/>
        <img src={cry} alt="logo" width="100" height="100" class="Avatar"/>
         <img src={cry} alt="logo" width="100" height="100" class="Avatar"/>
 <br/>
         <img src={cry} alt="logo" width="100" height="100" class="Avatar"/>
         <img src={cry} alt="logo" width="100" height="100" class="Avatar"/>
         <img src={cry} alt="logo" width="100" height="100" class="Avatar"/>
         <img src={cry} alt="logo" width="100" height="100" class="Avatar"/> */}
</div> 

  { EmployeeList.map((val,key)=>{
      return<div><h1>{val.EmployyeeName}</h1><h1>{val.EmployeeEmail}</h1></div>
  })}
</body>

    );
}
export default User;