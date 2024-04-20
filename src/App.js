import './App.css';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import Tabs from './components/custom-tabs/tabs';
//import LightDarkMode from './components/light-dark-mode';
//import QrCodeGenerator from './components/qr-code-generator';
//import ScrollIndicator from './components/scroll-indicator/indx';
//import TreeView from './components/tree-view';
//import menus from './components/tree-view/data';
//import ImageSlider from './components/image-slider';
//import LoadMore from './components/load-more-data';
//import StarRating from './components/star-rating';
//import Accordion from './components/accordion';
//import RandomColor from './components/random-color';

function App() {
  return (
    <div className="App">
      {/* accordion component */}
      {/*<Accordion/>*/}
      {/* random color component */}
      {/*<RandomColor/>*/}
      {/* star rating component */}
      {/*<StarRating noOfStars={10}/>*/}
      {/* image slider component */}
      {/*<ImageSlider 
      url={"https://picsum.photos/v2/list"}
      page={'1'}
      limit={'4'}/>*/}
      {/* load more data component */}
      {/*<LoadMore/>*/}
      {/*Tree view component or menu UI component/>*/}
      {/*<TreeView menus={menus}/>*/}
      {/* QR code generator component */}
      {/*<QrCodeGenerator/>*/}
      {/*Light & Dark mode component*/}
      {/*<LightDarkMode/>*/}
      {/* scroll indicator component */}
      {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>*/}
      {/* custom tab component*/}
      {/*<TabTest/>*/}  
      {/*custom modal component*/}
      <ModalTest/>
    </div>
  );
}

export default App;
