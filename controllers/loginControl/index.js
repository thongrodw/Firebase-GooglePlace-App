const { router } = require('../../app')
const service = require('./service')
const statusCode = require('../../utils/statusCode')

async function signUp(req,res){
    try {
        var signUpResult = await service.createUser(req.body.username,req.body.password)
        if(signUpResult) res.status(200).json({message: 'Success'})    
    } catch (error) {
        res.status(statusCode.BAD_REQUEST).json({error: error.message});
    }
}

async function loginByEmail(req,res){
    try {
        var authenResult = await service.signInWithEmail(req.body.username,req.body.password)
        if(authenResult) res.status(200).json({message: 'Authorized'})    
    } catch (error) {
        res.status(statusCode.BAD_REQUEST).json({error: error.message});
    }
}

async function loginByGoogle(req,res){
    try {
        var authenResult = await service.signInWithGoogle()
        if(authenResult) res.status(200).json({message: 'Authorized'})    
    } catch (error) {
        res.status(statusCode.BAD_REQUEST).json({error: error.message});
    }
}

module.exports = {
    loginByEmail,
    loginByGoogle,
    signUp
}