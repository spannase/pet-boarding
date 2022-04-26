import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {
    const [details, setDetails]= useState({})
    const {id}= useParams();
    useEffect(()=>{
        fetch(`http://localhost:8080/data/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }
        }).then((res) => res.json())
        .then((res) =>setDetails(res))
        .catch((err)=>console.log(err))
    },[])
  

  return (
    <div>
      <h1>Details</h1>
      <div>
          <h4>Name:  {details.name}</h4>
          <h4>city: {details.city}</h4>
          <h4>Address: {details.Address}</h4>
          <h4>about: {details.about}</h4>
          <h4>capacity: {details.capacity}</h4>
          <h4>cost per day: {details.cost}</h4>
          <h4>varified or Not: {details.varified}</h4>
          <h4>ratings: {details.ratings}</h4>
          <h4>Walks per day: {details.walks}</h4>
          <h4>Facility: {details.facility}</h4>
          <h4>maximum size: {details.size}</h4>
          <h4>Emergency Transport: {details.transport}</h4>
          <h4>Type of pets: {details.types}</h4>
          
      </div>
    </div>
  )
}

