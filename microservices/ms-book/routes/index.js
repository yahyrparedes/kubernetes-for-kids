var express = require('express');
var router = express.Router();

/* GET ping. */
router.get('/ping', function (req, res, next) {
    res.send('pong');
});

const books = [
    {
        id: 1,
        name: 'La Ciudad y los Perros',
        author: 1,
        image: '#'
    },
    {
        id: 2,
        name: 'La Casa Verde',
        author: 1,
        image: '#'
    },
    {
        id: 3,
        name: 'Pantaleón y las Visitadoras',
        author: 1,
        image: '#'
    },
    {
        id: 4,
        name: 'Los Heraldos Negros',
        author: 2,
        image: '#'
    },
    {
        id: 5,
        name: 'Paco Yunque ',
        author: 2,
        image: '#'
    },
    {
        id: 6,
        name: 'Tradiciones Peruanas',
        author: 3,
        image: '#'
    },
    {
        id: 7,
        name: 'Yaguar Fiesta, ',
        author: 4,
        image: '#'
    },
    {
        id: 8,
        name: '7 Ensayos de Interpretación de la Realidad Peruana',
        author: 5,
        image: '#'
    },
    {
        id: 9,
        name: 'El Caballero Carmelo',
        author: 6,
        image: '#'
    }
]

router.get('/books', function (req, res, next) {
    res.json(books);
});

router.get('/book/:id', function (req, res, next) {
    const book = books.find(r => r.id == req.params.id)
    res.json(book);
});

router.get('/books/author/:id', function (req, res, next) {
    const book = books.filter(r => r.author == req.params.id)
    res.json(book);
});
 

module.exports = router;
