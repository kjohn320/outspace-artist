const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type File {
  filename: String!
  mimetype: String!
  encoding: String!
}

type User {
  id: Int
  username: String
  galaxyname: String
  imageuri: String
  image: File
}

type Group{
  groupName: String
  shortDescription: String
  longDescription: String
  imageLink: String
}

type Galaxy {
  id: ID
  username: String
  galaxyname: String
  imageuri: String
  group: String
}

type Query {
  getUser: [User]
  galaxies:[Galaxy]
  users:[User]
  groups:[Group]
  galaxys(limit: Int): [Galaxy]
}

type Mutation {
  createUser(username: String!, image: String!, galaxyname: String): User
  deleteGalaxy(id:String!):String
  deleteUser: Boolean
  createGalaxy(username: String!, galaxyname: String!, image: String!, group: String! ): Galaxy
}
`;

module.exports = typeDefs;