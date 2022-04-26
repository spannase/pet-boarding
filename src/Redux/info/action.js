//  action type
export const INFO_LOADING= 'INFO_LOADING';
export const INFO_SUCCESS= 'INFO_SUCCESS';
export const INFO_FAILURE= 'INFO_FAILURE';
export const RESET='RESET'

// ACTION CREATOR

export const infoLoading=()=>({
    type:INFO_LOADING
});
export const infoSuccess=(payload)=>({
    type: INFO_SUCCESS,
    payload

});
export const reset=()=>({
    type:RESET
})
export const infoFailure=()=>({
    type:INFO_FAILURE
})

export const info= ({name, city,address,capacity,cost,varified, ratings, about,facility,walks,size, transport, types  })=>(dispatch)=>{
    dispatch(infoLoading())
    fetch(`http://localhost:8080/data`,{
        method:"POST",
        body:JSON.stringify({name,city,address,capacity,cost,varified, ratings, about,facility,walks,size, transport, types }),
        headers:{
            "Content-Type":"application/json"
        }
       
    }) .then((res)=> res.json())
    .then((res)=> dispatch(infoSuccess({name,city, address,capacity,cost,varified, ratings, about,facility,walks,size, transport, types })))
    .catch((e)=> dispatch(infoFailure()))


}