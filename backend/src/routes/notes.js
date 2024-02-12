const {Router}=require('express');
const router=Router();
const {getNotes,createNote,getNote,updateNote,deteleNote}=require('../controllers/notes.controller');
router.route('/')
    .get(getNotes)
    .post(createNote);
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deteleNote) 

module.exports=router;