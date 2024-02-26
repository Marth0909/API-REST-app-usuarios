const catchError = require('../utils/catchError');
const User = require('../models/User');

//GET
const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

//GET ONE TRAE USUARIOS POR ID
const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
});

//CREATE
const create = catchError(async(req, res) => {
    const {first_name, last_name,  email, password, birthday } = req.body
    const user = await User.create ({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday,
    });  
    return res.status(201).json(user);
});
 //DELETE ELIMINA REGISTRO POR ID
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id: id } });
    // return res.status(204);Con esta línea se queda crgando y no elimina, ya que esta es por si encadenas algo al final, la que hace la petición es res.sendStatus
    return res.sendStatus(204);
});

//UPDATE
const update = catchError(async(req, res) => {
    const { id } = req.params;
    const {first_name, last_name,  email, password, birthday } = req.body;
    const user =  await User.update({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday,
     }, { where: { id: id }, returning: true });
    
    return res.json(user);
});





module.exports = {
    getAll,
    create,
    remove,
    getOne,
    update,
}