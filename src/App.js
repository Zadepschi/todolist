
import './App.css';
import { List } from './List';

function App() {
  return (
    <div>
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <div>
          <List />
        </div>
    </div>
  );
}

export default App;
