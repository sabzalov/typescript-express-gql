import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import * as baseSchema from './schema.gql';

const app = express();

const schema = buildSchema((baseSchema as any));

const resolver = {
    info: () => 'I have come to talk to you again'
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}));

app.listen(4000);
console.log('App running localhost:4000');
