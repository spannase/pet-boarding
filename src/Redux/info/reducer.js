import {INFO_LOADING,INFO_SUCCESS, INFO_FAILURE, RESET}  from "./action"

const initState= {
    loading:false,
    error:false,
    name:"",
    city:"",
    address:"",
    capacity:"",
    cost:"",
    varified:"",
    ratings:"",
    about:"",
    facility:"",
    walks:"",
    size:"",
    transport:"",
    types:""


}
export const infoReducer=(store= initState,{type, payload})=>{
    switch(type){
        case INFO_LOADING:
            return{
                ...store,
                loading:true
            }
            case INFO_SUCCESS:
                return{
                    ...store,
                    loading:false,
    error:false,
    name:payload.name,
    city:payload.city,
    address:payload.address,
    capacity:payload.capacity,
    cost:payload.cost,
    varified:payload.varified,
    ratings:payload.ratings,
    about:payload.about,
    facility:payload.facility,
    walks:payload.walks,
    size:payload.size,
    transport:payload.transport,
    types:payload.types
   }
   case INFO_FAILURE:
       return{
           ...store, 
           error:true
       }
       case RESET:
           return{...initstate}
       default:
           return store
    }
}