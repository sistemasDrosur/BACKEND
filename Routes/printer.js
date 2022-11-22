const { Router } = require("express");
const router = Router();
const pool = require("../database/mysql");

router.get("/", async (req, res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`SELECT * FROM usuarios JOIN impresora ON usuarios.idusuarios = impresora.fkidimpresorausuario`, (err, rows) =>{
            connection.release()
            if(!err){
                res.status(200).json(rows)
            } else {
                res.status(500).render(`Ocurrio el siguiente error ${err.message}`);
            }
        })
    })
});

router.get("/:id", async (req, res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`SELECT * FROM impresora WHERE idimpresora = ? `, [req.params.id], (err, rows) => {
            connection.release()
            if(!err){
                res.status(200).json(rows)
            } else {
                res.status(500).render(`Ocurrio el siguiente error ${err.message}`);
            }
        })
    })
});

router.post("/", async(req,res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        const { fkidimpresorausuario, nombreimpresora, areaubicacion, serial, referenciatoner, estado, ip, empresa } = req.body;

        connection.query(`INSERT INTO impresora SET  fkidimpresorausuario = ?, nombreimpresora = ?, areaubicacion = ?, serial = ?, referenciatoner = ?, estado = ?, ip = ?, empresa = ?`,[fkidimpresorausuario, nombreimpresora, areaubicacion, serial, referenciatoner, estado, ip, empresa], (err) => {
            connection.release()
            if(!err){
                res.send("/printers")
            } else {
                res.status(500).send(`Ocurrio el siguiente error ${err.message}`)
            }
        } )
    })
});

router.put("/", async(req,res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        const { fkidimpresorausuario, nombreimpresora, areaubicacion, serial, referenciatoner, estado, ip, empresa } = req.body;
        
        connection.query(`UPDATE impresora SET  fkidimpresorausuario = ?, nombreimpresora = ?, areaubicacion = ?, serial = ?, referenciatoner = ?, estado = ?, ip = ?, empresa = ?`,[fkidimpresorausuario, nombreimpresora, areaubicacion, serial, referenciatoner, estado, ip, empresa], (err) => {
            connection.release()
            if(!err){
                res.send("/printers")
            } else {
                res.status(500).send(`Ocurrio el siguiente error ${err.message}`)
            }
        } )
    })
});

router.delete("/:id", async (req, res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        const id = req.params.id;

        connection.query(`DELETE impresora WHERE idimpresora = ?`,[id], (err) => {
            connection.release()
            if(!err) {
                res.send("/printers");
            } else {
                res.status(500).send(`Ocurrio el siguiente error ${err.message}`)
            }
        } )
    })

});

module.exports = router;

