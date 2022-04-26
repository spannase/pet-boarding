import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const [home, setHome]= useState([])
    const navigate= useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:8080/data`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }
        }).then((res) => res.json())
        .then((res) =>setHome(res))
        .catch((err)=>console.log(err))
    },[])
    function handleSort1(){
        const sortCost= [...home].sort((a,b)=>{
           return a.cost>b.cost?1:-1
        })
        setHome(sortCost)
    }
    function handleSort2(){
        const sortCost= [...home].sort((a,b)=>{
           return a.cost<b.cost?1:-1
        })
        setHome(sortCost)
    }
    function handleRating1(){
        const sortRating= [...home].sort((a,b)=>{
           return a.ratings>b.ratings?1:-1
        })
        setHome(sortRating)
    }
    function handleRating2(){
        const sortRating= [...home].sort((a,b)=>{
           return a.ratings<b.ratings?1:-1
        })
        setHome(sortRating)
    }

   
    function handleVarified(){
        const filterVarified=
            [...home].filter((e)=>{
             return  e.varified==="yes"
    
            
        })
        setHome(filterVarified)
    }  
    function handleVarified2(){
        const filterVarified2=
            [...home].filter((el)=>{
             return  (el.varified==="no")
            
        })
        setHome(filterVarified2)
    }
  
    
  return (
    <div>
        
        <div style={{"display":"flex", "alignItems":'center','width':'90%',"gap":"25px", "margin":"auto"}}>
            <div  style={{display:"flex", "gap":"2px","alignItems":"center"}}>
        <p>Sort by cost per day:</p>
      <button onClick={handleSort1}>Low to High</button>
      <button onClick={handleSort2}>High to Low</button></div>
        <div style={{display:"flex", "gap":"2px","alignItems":"center"}}>

        <p>Sort by Ratings:</p>
        <button onClick={handleRating1}>Low to High</button>
      <button onClick={handleRating2}>High to Low</button></div>

      <div style={{display:"flex", "gap":"2px","alignItems":"center"}}>
      <p>Filter:</p>
      <button onClick={handleVarified}>Verified</button>
      <button onClick={handleVarified2}>Not verified</button></div>

     
      

      </div>

        <table style={{"padding":"20px","margin":"auto", "width":"90%","fontSize":"20px","boxShadow": "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
                <thead style={{"fontWeight":"1000"}}>
                    <th>id</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>Capacity</th>
                    <th>Cost per day</th>
                    <th>Varified</th>
                    <th>Rating</th>
                </thead>
                {
        home.map(e=>(
                <tbody key={e.id} onClick={()=>navigate(`/listing/${e.id}`)}>
                    <td >{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.city}</td>
                    <td>{e.address}</td>
                    <td>{e.capacity}kg</td>
                    <td>Rs.{e.cost}</td>
                    <td>{e.varified}</td>
                    <td>{e.ratings}</td>
                </tbody>
                 ))
                }
                
            </table>
          
       
     
    </div>
  )
}


