const express = require('express');
const router = express.Router();
const connection = require("../database/mysql");

// usuarios
router.get("/api/usuarios", (req, res, next) => {
    connection.query('SELECT * FROM usuarios ORDER BY idusuarios DESC', (err, rows, fields) => {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
        } else {
            res.render("users", { rows });
        } 
    })

});

router.post("/api/addUser", (req, res, next) => {
    const { nombreusuario, cargousuario, areausuario, estado, sucursal } = req.body;
    connection.query("INSERT INTO usuarios (nombreusuario, cargousuario, areausuario, estado, sucursal) VALUES(?,?,?,?,?)", [nombreusuario, cargousuario, areausuario, estado, sucursal], (err, rows, fields) => {
        if(err){
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
        }

        res.send("Contacto guardado!");
    })


});

// cuentas de usuarios
router.get("/api/cuentasUsuarios",  (req, res, next) => {
     connection.query("SELECT * FROM usuarios JOIN cuentasusuario ON usuarios.idusuarios = cuentasusuario.fkidusuario", (err, rows) => {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
        } else {
            res.status(200).render("countsUsers", { rows });
        } 
    })
});


// impresoras 
router.get("/api/impresoras", (req, res, next) => {
    connection.query("SELECT * FROM usuarios JOIN impresora ON usuarios.idusuarios = impresora.fkidimpresorausuario", (err, rows) => {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
        } else {
            res.status(200).render("users", { rows });
        } 
    })
});


// Cuentas de sistemas
router.get("/api/cuentasSistemas", (req, res, next) => {
    connection.query("SELECT * FROM cuentassistemas", (err, rows) => {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
        } else {
            res.status(200).render("users", { rows });
        } 
    })
});


module.exports = router;

