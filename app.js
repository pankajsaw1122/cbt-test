const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const manageExamRoutes = require('./routes/manageExam');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/auth');
const examRoutes = require('./routes/exam');
const categRoutes = require('./routes/categ');
const quesRoutes = require('./routes/ques');
const ansRoutes = require('./routes/answer');
const candtRoutes = require('./routes/candidates');
const resultRoutes = require('./routes/result');

const app = express();
app.use(bodyParser.json()); 
app.use(cors());
app.use('/manageExam', manageExamRoutes);
app.use('/register', registerRoutes);
app.use('/admin', loginRoutes);
app.use('/candt', loginRoutes);
app.use('/exam', examRoutes);
app.use('/categ', categRoutes);
app.use('/ques', quesRoutes);
app.use('/answer', ansRoutes);
app.use('/candidate', candtRoutes);
app.use('/result', resultRoutes);


app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.json({ status: statusCode, message: message, data: data });
});

app.listen(5000);