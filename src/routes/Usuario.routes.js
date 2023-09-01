const express = require('express');

const {getUsers, saveUser, deleteUser, getUser, updateUser} = require('../controller/usuario.controller')

const router = express.Router();

router.get('/users', getUsers);

router.post('/save/user', saveUser);

router.get('/edit/user/:id', getUser);

router.post('/edit/user/:id', updateUser);

router.get('/delete/user/:id', deleteUser)

module.exports = router;