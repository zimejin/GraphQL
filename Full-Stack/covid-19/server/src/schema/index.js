import axios from 'axios'
import { 
    GraphQLObjectType,
    GraphQLInt, 
    GraphQLString, 
    GraphQLList,
    GraphQLSchema,
} from 'graphql'



const World = new GraphQLObjectType({
    name: 'World',
    fields: () => ({
        last_update: { type: GraphQLString},
        total_cases: { type: GraphQLInt},
        total_deaths : { type: GraphQLInt},
        total_recovered: { type: GraphQLInt },
    })
});

// rocket type

const Country = new GraphQLObjectType({
    name: 'Country',
    fields: () => ({
        name: { type: GraphQLString},
        alpha2: {type: GraphQLString}
    })
});

const Cases = new GraphQLObjectType({
    name: 'Cases',
    fields: () => ({
        country: { type: GraphQLString},
        last_update: { type: GraphQLString},
        cases : { type: GraphQLInt },
        deaths : { type: GraphQLInt },
        recovered : { type: GraphQLInt }
    })
})

//root query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        lists: {
            type: new GraphQLList(World),
            resolve(parent, args) {
                return axios.get('https://covid19-api.org/api/timeline')
                    .then(res => res.data.reverse());
            }
        },
        byCountry: {
            type: new GraphQLList(Cases),
            args: {
                country: { type: GraphQLString}
            },
            resolve(parent, args) {
                return axios.get(`https://covid19-api.org/api/timeline/${args.country}`)
                    .then(res => res.data.reverse());
            }
        },
        countries: {
            type: new GraphQLList(Country),
            resolve(parent, args) {
                return axios.get('https://api.covid19api.com/countries')
                    .then(res => res.data);
            }
        }

    }
})

export default new GraphQLSchema({
    query: RootQuery
});