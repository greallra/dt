const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_ATLAS_URL,{
 useNewUrlParser: true,
 useCreateIndex: true
}, () => console.log("db connected") )
