import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import "../App.css";
import api_endpoint from '../config';
import { CREATE_GALAXY } from "../data";
import {galaxyGroupList} from "./realGalaxies";
const CreateGalaxy = (props) => {
  const { updatePage } = props;
  const [createGalaxy, { loading }] = useMutation(CREATE_GALAXY);
  //const { data, error } = useQuery(GET_GROUPS);
  const [galaxyName, setGalaxyName] = useState("");
  // user data stored in state and passed to GraphQL
  const [userName, setuserName] = useState("");
  //const img = saveAs(props,'outerspaceArtist.png');
  //const [ galaxyImage,setgalaxyImage ] = useState(props.img);
  //const [galaxyImage] = useState(props.img);
  const [imageUri] = useState(props.img_src);
  //const [gcImage, setGcImage] = useState(null);
  const [group,setGroup] = useState("Local Group");
  //const [fileImage] = useState(file);
  // user's uploaded image kept in sexitate and padded to GraphQL
  //const [setUserImage] = useState(null);


  const createAGalaxy = (props) => {  
      createGalaxy({
          variables: {
              galaxyname: galaxyName,
              image: props.imgUri,
              username: userName,
              group: group,
          }
      })
      .then(() => {
        updatePage(galaxyName);
      } )
      .catch((e) => console.log('Err' + e));     
  }

  const onSubmit = (e) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        galaxyname: galaxyName,
        galaxyimage: imageUri,
        username: userName,
        group: group,
      })
  };

    fetch(api_endpoint,requestOptions)
    .then(res => res.text())
    .then(res => {
      createAGalaxy({imgUri:res});
});
  }
  
  return (
      <div className="margin-sm">
       <form className="pure-form pure-form-stacked" 
        id="main-login">
       <div >
       <span className="modal-subtitle">Send To Outerspace</span>
       <fieldset className="pure-group">
     
              <label> Galaxy Name </label>
              <input
                className="pure-input"
                disabled={loading}              
                onChange={(e) => setGalaxyName(e.target.value)}
                placeholder="some nifty name"
                required={true}
                type="text"
                name="galaxyname"
              />
               <label style={{ color: loading && "grey" }}> Artist Name </label>
            <input
            className="pure-input"
                disabled={loading}
                
                onChange={(e) => setuserName(e.target.value)}
                placeholder="venus picaso"
                required={true}
                type="text"
              />
               <label for="stacked-state">Group</label>
               <select id="stacked-state" className="pure-input-1-2"
                                onChange={(e) => setGroup(e.target.value)}
                            > <option>ALL</option>
                                {galaxyGroupList.map((group, index) => (
                                    <option>{group}</option>
                                ))}
                            </select>          
                   
   
              </fieldset>
 
              
              { /*(
                <div>

                   <img
                    //onLoad={(e) => setGalaxyImage(props.)}
                    className="pure-img"
                    src={imageUri}
                    alt="your galaxy"
                  />
                </div>
              )*/}
   


              <button
                
                className="pure-button"
                
                onClick={(e) => {
                  e.preventDefault();
                 
                  
                  onSubmit();
                
                }}
                
                disabled={loading}
                
              >
              
                {!loading ? "Send!" : "on the way 2 space"}
              </button>
              <button
                
                className="pure-button"
                onClick={(e) => {
                  e.preventDefault();                 
                  props.handleClose();
                
                }}
               
              >Close</button>
             </div>
          </form>
        
      </div>
  );
};




export default CreateGalaxy;
