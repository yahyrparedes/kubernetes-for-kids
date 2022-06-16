var express = require('express');
var router = express.Router();

/* GET ping. */
router.get('/ping', function (req, res, next) {
    res.send('pong');
});


const db = [
    {
        "id": 1,
        "name": "Mario Vargas Llosa",
        "username": "mario_vargas_llosa",
        "avatar": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Mario_Vargas_Llosa_%28crop_2%29.jpg"
    },
    {
        "id": 2,
        "name": "César Vallejo",
        "username": "cesar_vallejo", 
        "avatar": "https://upload.wikimedia.org/wikipedia/commons/3/36/Cesar_vallejo_1929.jpg"
    },
    {
        "id": 3,
        "name": "Ricardo Palma",
        "username": "ricaldo_palma", 
        "avatar": "https://www.biografiasyvidas.com/biografia/p/fotos/palma_ricardo.jpg"
    },
    {
        "id": 4,
        "name": "José María Arguedas",
        "username": "jose_maria_arguedas", 
        "avatar": "https://www.biografiasyvidas.com/biografia/a/fotos/arguedas_jose_maria.jpg"
    },
    {
        "id": 5,
        "name": "José Carlos Mariátegui",
        "username": "jose_carlos_mariategui", 
        "avatar": "https://www.uch.edu.pe/sites/default/files/styles/blog_image/public/blog-img/jose-carlos-mariategui-nacimiento-uch.jpg?itok=7vD6J1m6"
    },
    {
        "id": 6,
        "name": "Abraham Valdelomar",
        "username": "abraham_valdelomar", 
        "avatar": "https://www.miraflores.gob.pe/wp-content/uploads/2021/04/Abraham_Valdelomar.JPG.jpg"
    }
]

/* GET users listing. */
router.get('/authors', async function (req, res, next) {
    res.json(db);
});

router.get('/author/:id', async function (req, res, next) {
    const user = db.find(r => r.id == req.params.id)
    res.json(user);
});


module.exports = router;
