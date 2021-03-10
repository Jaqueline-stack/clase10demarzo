var express = require('express');
var router = express.Router();
var usuario = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//esto solo realiza el proceso de autenticacion pero aun no teine elementos de
//seguridad
router.post('/login',(req, res, next) =>{
//console.log(req.body.email,req.body.passwd);
usuario.login(req.body.email,req.body.passwd,(e,d)=>{
  if (d) {
    res.send('Login correcto');
    ses=req.session;
    console.log(ses.id);
  
    // crear ña sesion
    /*1 reutilizar ña sesion original del chrome
    2 crear una nueva y desechar la anterior
    */
  }else {
    res.json(e);
  }
});
});
module.exports = router;
