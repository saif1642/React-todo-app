import React from 'react';
import uuid from 'uuid';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <div className="container">
          <TodoList />
      </div>
    </div>
  );
}

export default App;
