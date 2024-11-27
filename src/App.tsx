import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;