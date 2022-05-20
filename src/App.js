import React from 'react'
import Pages from './pages/Pages'
import Category from './components/Category'

function App() {
  return (
    <div className='App'>
      <Category/>
      <Pages/>
    </div>
  );
}

//process.env.REACT_APP_API_KEY

export default App;
