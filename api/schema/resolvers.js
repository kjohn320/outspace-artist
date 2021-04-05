
var { gql } = require("apollo-server-express");
var path = require("path");
var firebaseConfig = require('../firebase-config.js');
var groupData = require('./groupData');
var firebase = require('firebase');
var app = firebase.initializeApp(firebaseConfig);

let Data = [];
let galaxyData = [];
let groups = [];
const Query = {
  getUser: () => {
    return Data;
  },
  async galaxies() {
    const galaxys = await app
        .firestore()
        .collection('galaxys')
        .get();
    return galaxys.docs.map(galaxy => galaxy.data());
},

  //users: () => users,
  galaxys: (limit) => {
      app
        .database()
        .ref("galaxys")
        .once("value")
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]))
        .then((data) => {return data;})
  },
  groups:() => {
    return groups;
  },
};

const removeWhiteSpaces = (name) => {
  let newName = name.replace(/\s+/g, "");

  return newName;
};

const  uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
const Mutation = {
  createGalaxy:  async(_, { galaxyname, image,username,group }) => {
    const Id = uuidv4();
    const galaxys = await app
        .firestore()
        .collection('galaxys')
        .add({
            id: Id,
            username: username,
            galaxyname: galaxyname,
            imageuri: image,
            group:group
          });
     /*     
    galaxyData.push({
        id: Id,
        username: username,
        galaxyname: galaxyname,
        imageuri: image,
        group:group
      });
*/

  },
  deleteGalaxy: (_, {id}) => {
    let ID = id;
    galaxyData = galaxyData.filter((galaxy) => galaxy.id !== ID);
    return id;
},
  deleteUser: (_, {}) => {
    Data = [];

    if (Data.length < 1) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = {Mutation,Query};
