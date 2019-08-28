import React from 'react';
import ReactDOM from "react-dom";
import Clock from './clock';
import Tabs from './tabs';
// import Weather from './weather';

let tabs = [{ header: "first", content: "first content" },
  { header: "second", content: "second content" },
  { header: "third", content: "third content" }
]

document.addEventListener('DOMContentLoaded', () => {
  const clock = document.querySelector('#clock');
  const tabs_el = document.querySelector('#tabs');
  // const weather = document.querySelector('#weather');

  
  ReactDOM.render(<Clock></Clock>, clock); 
  ReactDOM.render(<Tabs tabs={tabs}></Tabs>, tabs_el); 
  // ReactDOM.render(<Weather></Weather>);
   //as a last step come back here 

});

