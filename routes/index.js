const express = require('express');

const router = express.Router();


router.use(express.static('public'));


router.get('/', (req, res) => {
    return res.render('index');
});

router.get('/about', (req, res) => {
    return res.render('about');
});



router.use((req, res) => {
    res.status(404).render('error');
});


module.exports = router;