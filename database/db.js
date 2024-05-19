import mongoose from 'mongoose';




const Connection=()=>{

    const DB_URI=`mongodb://svahitha25:salaazlan2605@ac-s9kmnit-shard-00-00.pdcutow.mongodb.net:27017,ac-s9kmnit-shard-00-01.pdcutow.mongodb.net:27017,ac-s9kmnit-shard-00-02.pdcutow.mongodb.net:27017/?ssl=true&replicaSet=atlas-sdhqwf-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try{
        mongoose.connect(DB_URI,{useNewUrlParser: true});
    console.log('Database connected successfully');
    
    
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}

export default Connection;