import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
import { galaxyGroupList } from './realGalaxies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft,faArrowAltCircleRight, faSpinner } from '@fortawesome/free-solid-svg-icons'


//import { GET_GALAXY } from "../data";

const GET_GALAXY = gql`
{
    galaxies{
      username
      galaxyname
      imageuri
    group
    }
  }
  `


const Galaxy = (props) => {

    const [pageDisplay] = useState(props.page);
    useEffect(() => {
        if (pageDisplay) {
            document.body.style.overflow = 'unset';


        }
    })

    const setGalaxy = (galaxy) => {
        setSelectedGalaxy(galaxy);
        //setIsOpen(true);
    }


    const { data, loading, error } = useQuery(GET_GALAXY);
    const [selectedGalaxy, setSelectedGalaxy] = useState(null);
    //const [isOpen, setIsOpen] = useState(false);
    const [group, setGroup] = useState('ALL');
    if (loading) return <div><p><FontAwesomeIcon 
    icon={faSpinner} 
    color='white'
    size="6x"
    spint
    /> </p></div>;
    if (error) return <div><p>Error</p></div>;
    return (
        <div>


            <div >
                {(selectedGalaxy ?
                    <div className="Galaxy">

                        <div className="Galaxy-viewer">
                        <button onClick={() => setGalaxy(null)} className="button">view all</button>
                                        <button className="button" onClick={() => props.handleCreateDrawing()}>Create Artwork</button>
                              
                            <table class="galaxy-table">
                      
                                    
                                <thead>
                                <td>
                                        <button
                                            disabled={selectedGalaxy.index === 0}
                                            onClick={(e) => { e.preventDefault(); setGalaxy({ galaxy: data.galaxies[selectedGalaxy.index - 1], index: selectedGalaxy.index - 1 }) }}
                                            className="Galaxy-button">
                                                <FontAwesomeIcon 
                                                icon={faArrowAltCircleLeft} 
                                                color={selectedGalaxy.index === 0 ? 'black' : 'white'}
                                                size="3x"
                                                /> 
                                        </button>
                                    </td>
                                    <td>
                                        <span className="galaxy-title"> {selectedGalaxy.galaxy.galaxyname}</span>
                                        <p className="galaxy-subtitle">created by: {selectedGalaxy.galaxy.username}</p>
                                      
                                    </td>
                                    <td>
                                        <button
                                            disabled={selectedGalaxy.index === data.galaxies.length - 1}
                                            onClick={() => setGalaxy({ galaxy: data.galaxies[selectedGalaxy.index + 1], index: selectedGalaxy.index + 1 })}
                                            className="Galaxy-button">
                                                <FontAwesomeIcon 
                                                icon={faArrowAltCircleRight} 
                                                color={selectedGalaxy.index === data.galaxies.length - 1 ? 'black' : 'white'}
                                                size="3x"                    
                                                /> 
                                          
                                         </button>
                                    </td>
                                </thead>
                                <tr>
                                <td>
                                  
                                    </td>
                                    <td>

                                        <img src={(selectedGalaxy.galaxy.imageuri ? selectedGalaxy.galaxy.imageuri : '')}
                                            className="App-logo"
                                            key={selectedGalaxy.galaxy.galaxyname}
                                            alt={selectedGalaxy.galaxy.galaxyname}
                                        />

                                    </td>
                                    <td>
                                      
                                    </td>
                                </tr>

                            </table>
                        </div>




                    </div>
                    :
                    <div>
                        <p className="galaxy-subtitle">Click a Galaxy to View</p>
                        <div className="margin-sm">
                            <label for="stacked-state">Group</label>
                            <select id="stacked-state"
                                onChange={(e) => setGroup(e.target.value)}
                            > <option>ALL</option>
                                {galaxyGroupList.map((group, index) => (
                                    <option>{group}</option>
                                ))}
                            </select>
                        </div>
                        <div className="pure-g">
                            {data &&
                                data.galaxies &&
                                data.galaxies.map((galaxy, index) => (
                                    galaxy.group === group || group === 'ALL' ?
                                        <div key={index} className="pure-u-1-4 pure-u-sm-*"
                                        >
                                            <img src={galaxy.imageuri}
                                                alt={galaxy.galaxyname}
                                                className="pure-img"
                                                onClick={() => setGalaxy({ galaxy: galaxy, index: index })} />

                                            <span className="galaxy-subtitle">{galaxy.galaxyname}</span>

                                        </div> : <div hidden />
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>

    );


}

export default Galaxy;

