const mongoose=require ('mongoose');

const medicineSchema=new mongoose.Schema({
    medicine_name:String,
    medicine_salt:String,
    medicine_mfg:String,
    medicine_expiration:String,
    medicine_usage:String,
    best_time_to_take:String,
    medicine_storing_place:String,
    side_effects:String,
    strength:String,
    dosage_form:String

})
const medicineRecord=new mongoose.model('medicinerecord',medicineSchema);
module.exports=medicineRecord;