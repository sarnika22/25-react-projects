import './App.css';
//import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more-data';
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
      <LoadMore/>
    </div>
  );
}

export default App;
