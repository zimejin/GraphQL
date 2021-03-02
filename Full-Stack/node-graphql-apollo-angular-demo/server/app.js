const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://tushar:tushar1234@cluster0.ry4fz.mongodb.net/gql-test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
});
app.use('/graphql', graphqlHTTP({
    schema
}));
app.use(cors({ origin: 'http://localhost:4200', }));
app.options('*', cors());
app.listen(4000, () => console.log('Server Running on port 4000'));