const { Router } = require("express");
const router = Router();
const pool = require("../database/mysql");

router.get("/", async (req, res) => {
    await pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`SELECT * FROM cuentassistemas`, (err, rows) =>{
            connection.release()
            if(!err){
                res.status(200).render("users", { rows })
            } else {
                res.status(500).render(`Ocurrio el siguiente error ${err.message}`);
            }
        })
    })
});

module.exports = router;
