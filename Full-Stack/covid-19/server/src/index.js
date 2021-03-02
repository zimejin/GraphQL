
// load dependecies
import express from 'express'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import schema from './schema'


const app = express()

// express configuration
app.use(cors())
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));


app.listen(5000, () => {
  console.log('server running on 5000')
})

export default app