import React,{useState} from 'react';
import { Icons,IconGroup } from './pages/icons';
import DrawingBoard from './pages/drawingboard'
import Galaxy from './pages/galaxy'
import './Space.scss';
import './Homepage.scss'
import './App.css';

function App() {
  const [pageSelected,setPageSelected] = useState(null);
  if(pageSelected==='drawing'){
    return(
      
      <div className="App NoScroll">  
        <h2 onClick={() => setPageSelected(null)}>
          OUTERSPACE ARTIST
        </h2>
      <button onClick={() => setPageSelected('galaxy')}>Visit Space</button>
        <DrawingBoard/>
      </div>
    )
  }
  else if(pageSelected==='galaxy'){
    return(
      <div className="Galaxy Scroll">  
        <h2 onClick={() => setPageSelected(null)}>
          OUTERSPACE ARTIST
        </h2>
        
        <Galaxy 
             handleCreateDrawing = {(i) => setPageSelected('drawing')}
             page={pageSelected}   
            />
      </div>
    )
  }
  else if(pageSelected==='space'){

    return(
      <div className="App NoScroll">  
        <h2 onClick={() => setPageSelected(null)}>
          OUTERSPACE ARTIST
        </h2>
        <button onClick={() => setPageSelected('drawing')}>Create Artwork</button>
        <button onClick={() => setPageSelected('galaxy')}>Galaxy Gallary</button>
        <Galaxy 
              page={pageSelected}  
            />
      </div>
    )
  }else{
    document.body.style.overflow = 'hidden';
 const iconList = [];
 for(var i = 0; i< Icons.length;++i){
  iconList.push(Icons[i]);
  iconList.push(Icons[i]);
}
 iconList.concat(Icons.map((x) => x));
 console.log(iconList.length);
  return (
        
      <div className='page'>     
      <div className="homepage-main">     
        <h2>
        OUTERSPACE ARTIST
  </h2> 
  <button className="pure-button App-button" onClick={() => setPageSelected('drawing')}>Create Artwork</button>
  <br></br><br></br>  
 <button className="pure-button App-button" onClick={() => setPageSelected('galaxy')}>Galaxy Gallary</button>
  <p>website by izzy johnson <br></br> art by paria almasi</p>     
  <br></br>
</div>
<div className="wrap">
<IconGroup
icons={iconList}
className={"svg"}
/>
</div>
</div>
   
  );
}
}


export default App;
