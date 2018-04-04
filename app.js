import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();
app.use(`/bakery`, graphqlHTTP({
    schema,
    graphiql: true
}))
  
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/bakery');
