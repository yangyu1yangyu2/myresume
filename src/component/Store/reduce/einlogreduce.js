import { createSlice } from "@reduxjs/toolkit";

const EinlogSlice=createSlice({

name:'Einl',
initialState:{



usereinlog: false,
userleinlog:false,
isvisible: false,
isimag: true


},

reducers:{
    seteinloguser(state,action){

       state.usereinlog=action.payload
       //console.log('i am reduce usereinlog')
       //console.log(state.usereinlog)

    },

    setleinloguser(state,action){

        state.userleinlog=action.payload
       // console.log('i am reduce userleinlog')
       // console.log(state.userleinlog)
 
 
     },
 
   setisvisible (state,action){

      state.isvisible=action.payload
      
   },

   setisimag (state,action){

      state.isimag=action.payload
      
   },

}
});

export const {seteinloguser,setleinloguser, setisvisible, setisimag}=EinlogSlice.actions;
//export const{reducer: regreduce}=ReSlice;

export default EinlogSlice