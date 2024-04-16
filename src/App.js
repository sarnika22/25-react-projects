import './App.css';
import StarRating from './components/star-rating';
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
      <StarRating noOfStars={10}/>

    </div>
  );
}

export default App;
