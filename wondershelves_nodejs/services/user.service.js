const userRepository = require('../repositories/user.repository');
class UserService{
    constructor(){}
    
    async register(user){
        return await userRepository.register(user);
    }
    async login(user){
        return await userRepository.login(user);
    }
}

module.exports = new UserService();