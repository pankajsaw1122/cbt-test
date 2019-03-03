const express = require('express');
const authCheck = require('../middleware/auth-token');


const examController = require('../controller/exam');

const router = express.Router();

router.post('/addExam', authCheck, examController.addExam);
router.post('/updateExam', authCheck, examController.updateExam);
router.get('/getExamData', authCheck, examController.getExamData);
router.delete('/deleteExam', authCheck, examController.deleteExam);


console.log('In routes');

module.exports = router;