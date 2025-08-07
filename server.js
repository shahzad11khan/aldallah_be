
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const step1Routes = require('./routes/step1.Routes.js');
const step2Routes = require('./routes/step2.Routes.js');
const verifyOtp = require('./controllers//verify.Otp.Controller.js');

//swagger
const swaggerSpec = require('./appSwagger.js');
const swaggerHTML = require('./swaggerCustomUIHTML.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());

app.get('/swagger.json',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(swaggerSpec);
})


app.get('/api-docs',(req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send(swaggerHTML);
})

// API Routes
app.use('/api/step1', step1Routes);
app.use('/api/step2', step2Routes);
// opt verification route
app.post('/api/verify-otp', verifyOtp);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
