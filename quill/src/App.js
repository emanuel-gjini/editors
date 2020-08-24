import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextEditor from './components/TextEditor/TextEditor';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App" data-testid="Quill-app">
      <Welcome />
      <TextEditor />
    </div>
  );
}

export default App;
