import React from 'react';
import Tabs from "./components/Tabs";
import './App.css';

function App() {
  return (
    <div>
      <h1>Your Faviourite Tabs</h1>
      <div>
        <Tabs> 
          <div label="Whatsapp"> 
            Your Whatsapp Desktop<em>Whatsapp</em>! 
          </div> 
          <div label="News-TOI"> 
            News Tab<em>TOI</em>! 
          </div> 
          <div label="Facebook"> 
            Facebook Tab <em>Your Facebook Account</em>! 
          </div> 
        </Tabs>
      </div>
    </div>
  );
}

export default App;
