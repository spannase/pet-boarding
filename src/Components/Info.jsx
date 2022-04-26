import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { info } from "../Redux/info/action";

export const Info = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [capacity, setCapacity]= useState("")
  const dispatch = useDispatch();
  const[cost, setCost]= useState("")
  const[varified, setVarified]= useState("")
  const [ratings, setRatings]=useState("")
  const[about, setAbout]= useState("")
  const[facility, setFacility]= useState("")
  const [walks, setWalks]= useState("")
  const[size, setSize]= useState("")
  const [transport, setTransport]= useState("")
  const [types, setTypes]= useState("")


  const handleinfo = () => {
    const payload = {
      name,
      city,
      address,
      capacity,
      cost,
      varified,
      ratings,
      about,
      facility,
      walks,
      size,
      transport,
      types
    };
    dispatch(info(payload));
   
  };
  return (
      <div>
          <h1>CREATE</h1>
    <div style={{"display":"grid", "gridTemplateColumns":"repeat(2, 1fr)", "gap":"30px", "margin":"100px","marginTop":"5px"}}>
       <input
       
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      /> 
      <input
        type="text"
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="capacity for pets"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
      /> 
       <input
        type="number"
        placeholder="cost per day"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
        <select
        type="text"
        placeholder="varified"
        value={varified}
        onChange={(e) => setVarified(e.target.value)}>
        <option value="">Varified or not</option>
        <option value="yes">yes</option>
        <option value="no">no</option>
        </select>
        <input
        type="number"
        placeholder="ratings"
        value={ratings}
        onChange={(e) => setRatings(e.target.value)}
      />
        <input
        type="text"
        placeholder="about"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      /> 
        <input
        type="text"
        placeholder="facility"
        value={facility}
        onChange={(e) => setFacility(e.target.value)}
      />
        <input
        type="number"
        placeholder="number of walks per day"
        value={walks}
        onChange={(e) => setWalks(e.target.value)}
      /> 
        <input
        type="number"
        placeholder="weight of pets"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <select  type="text"
        placeholder="transport"
        value={transport}
        onChange={(e) => setTransport(e.target.value)} >
             <option value="">Emergency transport facility</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
      </select>
       
       <input
        type="text"
        placeholder="types of pets"
        value={types}
        onChange={(e) => setTypes(e.target.value)}
      />
       
      <button onClick={handleinfo}>submit</button>
    </div>
    </div>
  );
};
