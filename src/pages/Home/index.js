import React from 'react'
import Card from '../../components/Card';

import Carousel from '../../components/Carousel';
import NavbarBS from '../../components/NavbarBS';
import Sidebar from '../../components/Sidebar';
const index = () => {
  return (
    <Sidebar>
    <div className="App">
      <header className="App-header">
       
        {/* navbar component */}
       <NavbarBS/>
       <Carousel/>
       <div class="my-5 ms-3 px-2">
    <h1>List Book</h1>
    </div>
   
      <Card/>

      </header>
    </div>
    </Sidebar>
  );
};

export default index