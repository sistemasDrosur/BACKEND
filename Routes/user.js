const express = require('express');
const router = express.Router();
const db = require("../database/mysql");

// usuarios
router.get("/api/usuarios", (req, res) => {
    db.query('SELECT * FROM usuarios ORDER BY idusuarios DESC', (err, rows) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json({ usuarios: rows });
        }
    })

});

// cuentas de usuarios
router.get("/api/cuentasUsuarios",  (req, res) => {
     db.query("SELECT * FROM usuarios JOIN cuentasusuario ON usuarios.idusuarios = cuentasusuario.fkidusuario", (err, rows) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json({cuentasUsuarios: rows });
        }
    })
});


// impresoras 
router.get("/api/impresoras", (req, res) => {
    db.query("SELECT * FROM usuarios JOIN impresora ON usuarios.idusuarios = impresora.fkidimpresorausuario", (err, rows) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json({cuentasUsuarios: rows });
        }
    })
});


// Cuentas de sistemas
router.get("/api/cuentasSistemas", (req, res) => {
    db.query("SELECT * FROM cuentassistemas", (err, rows) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).json({cuentasUsuarios: rows });
        }
    })
});


module.exports = router;

