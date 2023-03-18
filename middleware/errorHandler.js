const BaseError = require("../errors/BaseError")

const handleError = (error, req,res,next) =>{
    if(error instanceof BaseError){
        return res.status(error.statusCode).json({err:error.message});
    }else{
        return res.status(500).json({err:error.message});

    }
}

module.exports = handleError;
