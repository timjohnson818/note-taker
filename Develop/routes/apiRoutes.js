const store = require('../db/store');
const router = require('express').Router();

router.post('/notes', (req,res) => {
    store.getNotes()
    .then((notes) => {
        return res.json(notes);
    })
});

router.get('/notes', (req,res) => {
    store.addNote(req.body)
    .then((note) => res.json(note))
});


module.exports = router;