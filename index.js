const {ApolloServer} = require("apollo-server");
const {typeDefs} = require('./schema');
const {Query} = require('./resolvers/Query')
const {Category} = require('./resolvers/Category')
const {Product} = require('./resolvers/Product')
const {Mutation} = require('./resolvers/Mutation')
const {db} = require("./db");

// string, Int, Float, Boolean - скалярные типы/scalar types
// что бы запретить null,добавить просто "!" в конце


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category,
        Product
    },
    context: {
        // products,
        // categories,
        // reviews
        db
    }
});

server.listen().then(({url}) => {
    console.log('Server is ready at ' + url)
});