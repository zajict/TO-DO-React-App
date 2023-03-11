import './App.css';
import {Header} from './components/header'
import {Todos} from './components/toDo'


function App() {
  return (
   <div className='App'>
      <Header className='App-header'></Header>
      <Todos className='App-todo'></Todos>
   </div>
  );
}

export default App;
