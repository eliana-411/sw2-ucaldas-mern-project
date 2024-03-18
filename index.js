// Imporatcion del framework express para realizar solicitudes http
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")


// poder acceder a leer el archivo .env
require('dotenv').config();
const CONNECTION_PORT = process.env.PORT || 3005;
app.listen(CONNECTION_PORT, () => {
    console.log(`Server running on port ${CONNECTION_PORT}`);
});
