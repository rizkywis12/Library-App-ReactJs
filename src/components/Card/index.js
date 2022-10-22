import React from 'react'
import "../../styles/components/Card.css";
const Card = (props) => {
  const { img, cardTitle, cardDesc} = props;
  return (
  <div class="col-lg-4 col-md-6">
      <div class="card">
        <a href="./detail.html">
          <img src={img} alt="just-img" srcset="" />
        </a>
        <div class="card-body ">
          <h5 class="card-title text-center ">{cardTitle}</h5>
          <p class="card-text text-center">{cardDesc}</p>

        </div>
      </div>
    </div>
  )
  }
  export default Card
  