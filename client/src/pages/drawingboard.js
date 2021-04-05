import React, { useState,useEffect } from "react";
import { Icons } from './icons';
import { getWindowWidth, getWindowHeight, throttle,trimCanvas } from './helpers'
import 'rc-slider/assets/index.css';
import { saveAs } from "@progress/kendo-file-saver";
import CreateGalaxy from "./create-galaxy";
import CustomSlider from "./iconSlider"
import Modal from 'react-modal';
Modal.setAppElement('#root');

const DrawingBoard = (props) => {
  const [canvas, setCanvas] = useState(null);

  const [icons] = useState(Icons);
  const [selectedIcon, setSelectedIcon] = useState(new Image({src: Icons[0],width:'32',height:'32'}));
  const [iconSize, setIconSize] = useState(32);
  const [mouseDown, setMouseDown] = useState(false);

  const [history, setHistory] = useState([]);
  const [step, setStep] = useState({ currentStep: 0, steps: 0 });
  const [windowSize] = useState({ height: getWindowHeight(), width: getWindowWidth() })
  const [galaxy, setGalaxy] = useState(null);
  const [galaxyImg, setGalaxyImg] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    if (canvas != null) {
        document.body.style.overflow = 'hidden';
    }
  })

  const buttonControlList = [
    {
      name: 'save',
      minStepForEnable: 0,
    },
    {
      name: 'undo',
      minStepForEnable: 0,
    },

    {
      name: 'redo',
      minStepForEnable: -1,
    },
    {
      name: 'clear',
      minStepForEnable: 0,
    },
  ];

  const handleIconClick = (i) => {
    setSelectedIcon(i.target);
  }
  


  const Icon = (props) => (
   
    <img id={`iconimg-${props.index}`} key={`iconimg-${props.index}`} className={`img-box ${selectedIcon.id === `iconimg-${props.index}` ? 'img-box-selected' : ''} pure-img`} alt={`iconimg-${props.index}`} src={props.image}
      onClick={(i) => { i.preventDefault();   
                        handleIconClick(i); }}
    />
 
  );



  const IconGroup = () => {

    return (

      <div className="pure-g">
        { icons.map((icon, index) => (
          <div className={`pure-u-1-6 pure-u-md-2-6`}>
          <Icon
            key={`icon-${index}`}
            image={icon}
            index={index}

          />
      </div>
        ))
        }
      </div>
    );
  }

  const handleDrawStart = (e) => {
    setMouseDown(true);
    
  }

  const handleDrawing =
    throttle(10, function (e) {
      if (mouseDown) {
        let ctx = e.target.getContext('2d');
        ctx.drawImage(selectedIcon, e.screenX - e.target.offsetLeft-50, e.clientY - e.target.offsetTop-20, iconSize, iconSize);

      }
    });
  const handleDrawingTouch = (e) =>
  {
    let ctx = e.target.getContext('2d');
    if(selectedIcon.id){
      ctx.drawImage(selectedIcon, e.targetTouches[0].clientX - e.target.offsetLeft-10, e.targetTouches[0].clientY-e.targetTouches[0].target.offsetTop-20, iconSize, iconSize);
 
    }
  }

  const getImage = () => {
    return (
      canvas.toDataURL("image/png",0.5)
    );
  }

  const handleDrawStop = (i) => {
    if(selectedIcon.id){
    setMouseDown(false);
    setCanvas(i.target);
    handleHistory(1);
    }
  }

  const handleHistory = (stepChange, updateHistory = true) => {

    setStep({ currentStep: step.currentStep + stepChange, steps: step.steps + 1 });
    let cnv = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    if (stepChange > 0 & updateHistory) {
      setHistory(history.concat(cnv));
    }


  }

  const handleButtonClick = (i, buttonName) => {
   
    switch (buttonName) {
      case 'save':
        let im = getImage();
        saveAs(im, 'outerspaceArtwork.png');
        break;
      case 'clear':
        return handleClear(i);

      case 'undo':
        return handleUndo(i);

      case 'send':
        break;
      case 'redo':
        return handleRedo(i);
      default:
        break;

    }
  }

  const handleRedo = (i) => {

    let ctx = canvas.getContext('2d');


    ctx.putImageData(history[step.currentStep], 0, 0);

    handleHistory(1, false);
  }

  const handleUndo = (i) => {

    let ctx = canvas.getContext('2d');

    if (step.currentStep <= 1) {
      handleClear(i);
    } else {
      ctx.putImageData(history[step.currentStep - 2], 0, 0);
    }
    handleHistory(-1);

  }

  const handleClear = (i) => {
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleHistory();

  }
  const getImageFile = () => {
    var tempCanvas = trimCanvas(canvas);

    let img = tempCanvas.toDataURL('image/png');
    setGalaxyImg(img);
    fetch(img)
      .then(function (res) { return res.arrayBuffer(); })
      .then(function (buf) { return new File([buf], 'temp.png', { type: 'image/png' }); })
      .then(function (file) {
        setGalaxy(file);
      })

  }
  const handleSlider = (i) => {
    setIconSize(i);
  }

  const handleCreateGalaxy = (i) => {
    getImageFile();
    //setCreatingGalaxy(true);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalStyles = {
    content: {
      top: '50%',
      left: 'auto',
      right: 'auto',
      marginTop:'25%',
      marginRight: '25%',
      marginLeft: '25%',
      backgroundColor: '#4e3fdb',
      display:'grid',
      color:'#E6E6FA',
      justifyItems:'center',
      fontFamily:'Roboto',
      fontWeight:900,
    }
  };



  return (
    <div className="pure-g">
      { (galaxy ?
      
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Send To Space Modal"
          className="Modal"
          style={modalStyles}

        >
          <CreateGalaxy
            updatePage={(username) => {
              setGalaxy(null);
              closeModal();
            }}
            img_src={galaxyImg}
            handleClose={closeModal}
            img={galaxy}
          />
         
        </Modal> : <noscript />)
      }
      <div className="pure-u-1 pure-u-md-1-4">



      <div className="pure-g">
        <div className="pure-u-1 pure-u-sm-1-2">
          <CustomSlider
            handleSlider={(i) => handleSlider(i)}
          ></CustomSlider>
          <div className="pure-button-group" role="group" aria-label="...">
          {
            buttonControlList.map((button, index) =>
              (
                <button
                  className="button-small pure-button"
                  key={button.name}
                  onClick={(i) => handleButtonClick(i, button.name)}
                  disabled={button.name === 'redo' ? step.currentStep === history.length : button.minStepForEnable === step.currentStep}
                >{button.name}
                </button>

              )
            )
          }
          <button className="button-small pure-button" onClick={() => {
            handleCreateGalaxy()
          }} 
          disabled={0 === step.currentStep}>Send to Space</button>
          </div>
        </div>
        <div className="pure-u-1 pure-u-sm-1-2">
        <IconGroup

        />
      </div>
      </div>
      </div>
      <div id="drawing-container" className="pure-u-1">
        <canvas id='drawingBoard' className="drawing-canvas"
          width={`${windowSize.width}px`}
          height={`${windowSize.height}px`}
          onMouseMove={(i) => handleDrawing(i)}
          onMouseDown={(i) => handleDrawStart(i)}
          onMouseUp={(i) => handleDrawStop(i)}
          ref={(el) => setCanvas(el)}
          onTouchStart={(i) => handleDrawStart(i)}
          onTouchEnd={(i) => handleDrawStop(i)}
          onTouchMove={(i) => handleDrawingTouch(i)}

        />
      </div>



    </div>

  );
}

export default DrawingBoard;
