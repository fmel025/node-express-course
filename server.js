const express = require('express');
const bodyParser = require('body-parser');
const { userRoutes } = require('./routes/usersRoutes')

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.use("/users", userRoutes);

app.post("/login", (req, res) => {
    const {username, password} = req.body;

    const mockUsername="billyTheKid";
 	const mockPassword="superSecret";

     if(username === mockUsername && password === mockPassword) {
        res.status(200).json({
            success: true,
            message: 'password and username match',
            token: 'encoded token goes here'
        })

        return;
     }

     res.status(404).json({
        success: false,
        message: 'password and username do not match'
     });
})

app.listen(PORT, () => {
    console.log("Server listening on port %d",PORT);
})