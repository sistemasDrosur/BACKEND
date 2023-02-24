const { Router } = require("express");
const router = Router();
const pool = require("../database/mysql");

const NodeCache = require("node-cache");

const myCache = new NodeCache({ stdTTL: 10 });

// Get all of users
router.get("/", async (req, res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`SELECT * FROM usuarios ORDER BY idusuarios DESC `, (err, rows) =>{
            connection.release()
            if(!err){
                myCache.set(rows, json);
                res.status(200).json(rows)
            } else {
                res.status(500).send(`Ocurrio el siguiente error ${err.message}`);
            }
        })
    })
});

// Get one user
router.get("/:id", async (req, res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        const id = req.params.id;
        connection.query(`SELECT * FROM usuarios WHERE idusuarios = ?`, [id], (err, rows) =>{
            connection.release()
            if(!err){
                myCache.set(rows, json);
                res.status(200).json(rows)
            } else {
                res.status(500).send(`Ocurrio el siguiente error ${err.message}`);
            }
        })
    })
});

// Add one user
router.post("/", async (req, res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        const { idusuarios, nombreusuario, cargousuario, areausuario, estado, sucursal } = req.body;

        connection.query(`INSERT INTO usuarios SET idusuarios = ?, nombreusuario = ?, cargousuario = ?, areausuario= ?, estado = ?, sucursal = ?`,[idusuarios, nombreusuario, cargousuario, areausuario, estado, sucursal], (err) => {
            connection.release()
            if(!err) {
                res.send("/users");
            } else {
                res.status(500).send(`Ocurrio el siguiente error ${err.message}`)
            }
        } )
    })

});

// Update one user
router.put("/:id", async (req, res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        const { idusuarios, nombreusuario, cargousuario, areausuario, estado, sucursal } = req.body;

        connection.query(`UPDATE usuarios SET idusuarios = ?, nombreusuario = ?, cargousuario = ?, areausuario= ?, estado = ?, sucursal = ?`,[idusuarios, nombreusuario, cargousuario, areausuario, estado, sucursal], (err) => {
            connection.release()
            if(!err) {
                res.send("/users");
            } else {
                res.status(500).send(`Ocurrio el siguiente error ${err.message}`)
            }
        } )
    })

});

// Delete one user
router.delete("/:id", async (req, res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        const id = req.params.id;

        connection.query(`DELETE usuarios WHERE idusuarios = ?`,[id], (err) => {
            connection.release()
            if(!err) {
                res.send("/users");
            } else {
                res.status(500).send(`Ocurrio el siguiente error ${err.message}`)
            }
        } )
    })

});


module.exports = router;

