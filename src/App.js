import React from 'react';
import Dropdown from './Dropdown';
import "./app.css"


function App() {
  const options = ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'NodeJs', 'MySQL'];

  return (
    <div className='app'>
      <h1>React DropDown</h1>
      <h3>Select Your Programming Language</h3> <hr/>
    
      <Dropdown options={options} />
      <div className='para' >Hover over Languages</div>
    </div>
  );
}

export default App;
