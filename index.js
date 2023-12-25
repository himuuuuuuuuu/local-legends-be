require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const healthRoutes = require('./routes/HealthRoutes');
const app = express();



mongoose.connect(process.env.DATABASE_URL);
mongoose.connection.once('connected', () => console.log('🟢 DATABASE CONNECTED'));
mongoose.connection.on('error', err => console.log('🟥 error', err));

app.use('/health', healthRoutes);

app.listen(process.env.APP_PORT, () => console.log(`🟢 APP IS LISTENING ON PORT :${process.env.APP_PORT}`))

