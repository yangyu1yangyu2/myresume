import EinlogSlice from './reduce/einlogreduce';
import ReSlice from './reduce/rereduce';

import { configureStore } from '@reduxjs/toolkit';


const store=configureStore({

reducer:{
 einlog: EinlogSlice.reducer,
 register: ReSlice.reducer

}


});

export default store;