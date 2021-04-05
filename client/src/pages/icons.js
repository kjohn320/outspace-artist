import moon1 from './assets/icons/moon1.png';
import moon2 from './assets/icons/moon2.png';
import moon3 from './assets/icons/moon3.png';
import star1 from './assets/icons/star1.png';
import star2 from './assets/icons/star2.png';
import star3 from './assets/icons/star3.png';


export const Icons = [moon1,
    moon2,
    moon3, 
    star1,
    star2,
    star3, 
    //rocketShip
];

export const IconSize = 32;
export const selectedIcon = (i) => {
    return new Image({scr: i })
}


export const Icon = (props) => (
   
    <img id={`iconimg-${props.index}`} 
    key={`iconimg-${props.index}`} 
    className={props.className} 
    alt={`iconimg-${props.index}`} 
    src={props.image}
    />
 
  );



export const IconGroup = (props) => {

    return (

      <div>
        { props.icons.map((icon, index) => (
          <Icon
            key={`icon-${index}`}
            image={icon}
            index={index}
            className={props.className}
          />
        ))
        }
      </div>
    );
  }