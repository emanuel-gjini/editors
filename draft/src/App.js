import React from 'react';
import './App.css';
import TextEditor from './components/TextEditor/TextEditor';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App" data-testid="Draft-app">
      <Welcome />
      <TextEditor />
    </div>
  );
}
export default App;
