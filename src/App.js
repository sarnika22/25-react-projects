import './App.css';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlag from './components/feature-flag';
//import SearchAutoComplete from './components/search-autocomplete';
import TicTacToe from './components/tictactoe';
//import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import Tabs from './components/custom-tabs/tabs';
//import GithubProfileFinder from './components/github-profile-finder';
import LightDarkMode from './components/light-dark-mode';
//import QrCodeGenerator from './components/qr-code-generator';
//import ScrollIndicator from './components/scroll-indicator/indx';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
//import ImageSlider from './components/image-slider';
//import LoadMore from './components/load-more-data';
//import StarRating from './components/star-rating';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';

function App() {
  return (
    <div className="App">
      {/* accordion component */}
      {/* {<Accordion/>} */}

      {/* random color component */}
      {/* {<RandomColor/>} */}

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
      {/* {<TreeView menus={menus}/>} */}

      {/* QR code generator component */}
      {/*<QrCodeGenerator/>*/}

      {/*Light & Dark mode component*/}
      {/* {<LightDarkMode/>} */}

      {/* scroll indicator component */}
      {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>*/}

      {/* custom tab component*/}
      {/* {<TabTest/>}   */}

      {/*custom modal component*/}
      {/*<ModalTest/>*/}

      {/*github profile finder component*/}
      {/*<GithubProfileFinder/>*/}

      {/* search suto complete component */}
      {/*<SearchAutoComplete/>*/}
       
      {/* tictactoe component */}
      {/* {<TicTacToe/>} */}

      {/* feature flag implementation component */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag/>
      </FeatureFlagGlobalState>
       */}

       {/* use fetch component */}
       {/* <UseFetchHookTest/> */}

       {/* use outside click component */}
       <UseOnclickOutsideTest/>
    </div>
  );
}
export default App;
