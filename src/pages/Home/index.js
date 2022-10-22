import React from 'react'
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import NavbarBS from '../../components/NavbarBS';
import cover1 from '../../assets/CardCover/cover1.png'
import cover2 from '../../assets/CardCover/cover2.png'
import cover3 from '../../assets/CardCover/cover3.png'
import Sidebar from '../../components/Sidebar/index';

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
    <div className='row m-0 p-0'>
      <Card img={cover1} cardTitle="Dilan 1990" cardDesc="buku ini adalah buku dilan RAAWWRR"/>
      <Card img={cover2} cardTitle="Sebuah Seni Untuk ..." cardDesc="Buku untuk bersikap bodoamat"/>
      <Card img={cover3} cardTitle="React Native" cardDesc="jangan di baca pusing"/>
    </div>
      </header>
    </div>
    </Sidebar>
  );
};

export default index