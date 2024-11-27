import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/actions';
import { RootState } from './redux/store';

const TodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('Pending');
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.todos.error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo({ text, status }));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TodoForm;