import React from 'react';
import dilan from '../../assets/dilan.png'
import radit from '../../assets/radit.png'
import laskar from '../../assets/laskar.png'
import '../../styles/components/Carousel.css'
// Or for ES2015 module
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 1,
    wrapAround: true
}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >

      <div class="gallery-cell">
        <img src={dilan} alt="spiderman" srcset="" />
        <div className="carousel-caption d-none d-md-block">
          <h4 className="text-center"><u>Dilan 1990</u></h4>
          <p className="text-center">Jk Rowling kali ah.</p>
        </div>
      </div>

      <div class="gallery-cell">
        <img src={radit} alt="buku" srcset="" />
        <div className="carousel-caption d-none d-md-block">
          <h4 className="text-center"><u>Ubur-ubur Lembur</u></h4>
          <p className="text-center">Raditya Dika</p>
        </div>
      </div>

      <div class="gallery-cell">
        <img src={laskar} alt="b" srcset="" />
        <div className="carousel-caption d-none d-md-block">
          <h4><u>Laskar Pelangi</u></h4>
          <p>Andrea Hirata</p>
        </div>
      </div>
    </Flickity>
  )
}

export default Carousel