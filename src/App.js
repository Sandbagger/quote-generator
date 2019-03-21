import React, { useState } from 'react';

import './App.css';

const App = () => {

  const [quote, setquote] = useState("This is a quote")
  
    return (
      <div className="App">
          <p>
            {quote}
          </p>
      </div>
    );
  }


export default App;
