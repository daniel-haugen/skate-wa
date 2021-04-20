import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/nav'
import Search from './components/search'
import ParkGallery from './components/parkGallery'

class App extends React.Component {
  render(){
  return (
    <>
    <Nav />
    <Search />
    <ParkGallery />
    </>
  );
}
}

export default App;
