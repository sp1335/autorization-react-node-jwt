module.exports = class UserDto{
    email;
    id;
    isActivated;

    constructor(model){
        this.email = mode.email;
        this.id = model._id;
        this.isActivated = model.isActivated
    }
}