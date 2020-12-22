const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/App', {useNewUrlParser:true, useUnifiedTopology:true}, 
    err => {
        if(!err)
            console.log('MongoDb is connected successfully')
        else
            console.log('Error while connectin MongoDb : ' , JSON.stringify(err, undefined,2))
    }
)