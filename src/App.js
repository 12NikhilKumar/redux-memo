import logo from './logo.svg';
import './App.css';
import TodoInput from './todo/todo.input';
import Todo from './todo/todolist';
import CounterInput from './counter/counterinput';
import Counter, { MemoizedCounter } from './counter/counter';
import { Provider } from 'react-redux';
import {store} from './todoredux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Todo/>
      </Provider>
    </div>
  );
}

export default App;
