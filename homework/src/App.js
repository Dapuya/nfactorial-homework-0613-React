import './App.css';
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import image4 from './images/image4.jpeg'
import image5 from './images/image5.jpeg'
import icon from './images/icon.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
      <>
        <div className="header">
            <img id={'iconID'} src={icon} width={'40px'}/>
            <input id={'inputID'} type={"search"} placeholder={'Type something'}/>
        </div>

        <div className={'divStyle'} >
            <div className={'smallDiv'}>
                <p>HEY</p>
                <img className={'image'} src={image1}/>
            </div>

            <div className={'smallDiv'}>
                <p>LET'S</p>
                <img className={'image'} src={image2}/>
            </div>

            <div className={'smallDiv'}>
                <p>GIVE</p>
                <img className={'image'} src={image3}/>
            </div>

            <div className={'smallDiv'}>
                <p>ALL</p>
                <img className={'image'} src={image4}/>
            </div>

            <div className={'smallDiv'}>
                <p>YOU CAN</p>
                <img className={'image'} src={image5}/>
            </div>
        </div>
    </>
  );
}

export default App;


// @media screen and (min-width: 1024px)
// .NewsRow_inner__35O05 {
//     flex-direction: row;
// }
