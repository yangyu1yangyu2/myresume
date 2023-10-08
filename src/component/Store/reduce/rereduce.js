import { createSlice } from "@reduxjs/toolkit";

const ReSlice=createSlice({

name:'re',
initialState:{

reg:[
    {useName:'jobgeber', 
    passWord: '555555', 
    islog: false,
    email: ''}],

isreg: false,
istest: 'hallo'

},

reducers:{

setnewreg(state,action){
   if(!state.isreg)
   { state.reg=[...state.reg,action.payload]
    //State([...reg, action.payload])
    }
   // console.log('here ist reg')
    //console.log(state.reg)
},

Pruefregname(state,action){
    state.isreg=false
state.reg.find((element)=>{if(element.useName===action.payload){ alert("your name is da")
return state.isreg=true
   }   else return false})



},
Pruefregemail(state,action){

    if(state.reg.find((element)=>{if(element.email===action.payload){return true}else return false}))
    {state.isreg=true
    alert("your email is da")}
    
    
    },

setnewisreg(state, action){
state.isreg=action.payload

}




}

});
export const {setnewreg,Pruefregname,Pruefregemail,setnewisreg}=ReSlice.actions;
//export const{reducer: regreduce}=ReSlice;

export default ReSlice
