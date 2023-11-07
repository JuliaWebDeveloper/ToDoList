import './App.css';
import { ToDoList } from './ToDoList';

function App() {
return (
  <div className='App'>
    <div className='containerMain'>
      <div className='radius'>
      <p>My day</p>
      </div>
      <ToDoList />
      </div>
  </div>
);
}
export default App;