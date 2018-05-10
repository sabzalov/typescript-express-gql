import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import { resolver } from './test/resolvers';
import * as baseSchema from './test/schema/schema.graphql';

const app = express();

const schema = buildSchema((baseSchema as any));

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}));

app.listen(4000);
console.log('App running localhost:4000');
