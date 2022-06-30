const userService = require("../services/user.service");
const logger = require('../logger/api.logger');

class UserController{
    constructor(){}
    async register(user){
        logger.info('Controller: register', user);
        console.log("BODY USER: "+ user);
        return await userService.register(user);
    }
    async login(user){
        logger.info('Controller: login', user);
        console.log("BODY USER: "+ user);
        return await userService.login(user);
    }
}

module.exports = new UserController();
