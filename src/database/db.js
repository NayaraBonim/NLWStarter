const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*db.serialize( () => {
//CREATE
    db.run(`

    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
    `)
//INSERT
    const query =`
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
`

    
        const values = [
            "http://",
            "Colectoria",
            "Jardim América",
            "260",
            "Santa Catarina",
            "Rio do sul",
            "Resíduos eletronicos, lâmpadas"
        ]
    
        function afterInsertData(err) {
            if(err) {
                return console.log(err)
            }

            console.log("Cadastrado com sucesso")
            console.log(this)
        }
        

    //db.run(query, values, afterInsertData)

    //SELECT
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros")
        console.log(rows)
    })

    //DELETAR
    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
        if(err) {
            return console.log(err)
        }
        console.log("Registros apagados")
    })
    
})*/