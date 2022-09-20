import { useContext } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GlobalContext from './context/GlobalContext';
import { increaseCount, decreaseCount } from './redux/counter/Actions';
import SomeComp from './SomeComp';


function App(props) {


  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count {props.count.count}</h1>
        <div>
          <button onClick={() => {props.increaseCount(1)}}>Increase</button>
          <button onClick={() => {props.decreaseCount(1)}}>Decrease</button>
        </div>
        <SomeComp />
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  increaseCount: (value) => dispatch(increaseCount(value)),
  decreaseCount: (value) => dispatch(decreaseCount(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
