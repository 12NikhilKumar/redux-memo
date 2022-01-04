import logo from './logo.svg';
import './App.css';
import TodoInput from './todo/todo.input';
import Todo from './todo/todolist';
import CounterInput from './counter/counterinput';
import Counter, { MemoizedCounter } from './counter/counter';

function App() {
  return (
    <div className="App">
      <MemoizedCounter/>
    </div>
  );
}

export default App;
