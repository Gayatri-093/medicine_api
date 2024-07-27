const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/medicine_api').then(()=>{
    console.log('database connected')
}).catch(()=>{
    console.log('database not connected');

})