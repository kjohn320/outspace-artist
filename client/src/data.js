
import { gql } from "@apollo/react-hooks";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $image: String!, $galaxyname: String) {
    createUser(username: $username, image: $image, galaxyname: $galaxyname) {
      username
    }
  }
`;

export const CREATE_GALAXY = gql`
  mutation createGalaxy( $galaxyname: String!, $image: String!, $username: String!,$group: String!) {
    createGalaxy(galaxyname: $galaxyname,  image: $image, username: $username, group: $group) {
      galaxyname
    }
  }
`;

export const DELETE_ACCOUNT = gql`
  mutation deleteAccount {
    deleteUser
  }
`;

export const GET_USER = gql`
  query getUser {
    getUser {
      username
      imageuri
    }
  }
`;

export const GET_GALAXY = gql`
  query galaxys($limit: Int) {
    galaxys(limit:$limit) {
      galaxyname
      username
      imageuri
    }
  }
`;

export const GET_GROUPS = gql`
query groups {
  groups {
    groupName     
  }
}
`;