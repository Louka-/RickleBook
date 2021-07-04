const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.fiofa.mongodb.net/RickleBookTest',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to to connect to MongoDB", err));