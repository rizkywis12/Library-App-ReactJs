import React, { useState } from 'react'
import "../../styles/components/Card.css";
import { dataBooks } from '../../data/book';
import { Link } from 'react-router-dom';
const Card = () => {
 const [books] = useState(dataBooks)
  return (
    <div className='row ms-3 mb-3'>
        
           {books.map((book) => {
      return (
        <div class="col-lg-4 col-md-6">
        <div class="card">
          <Link className="text-decoration-none text-dark" to={'/detail/' + book.id }>
            <img src={book.image} alt="just-img" />
            </Link>
          <div class="card-body">
            <h5 class="card-title text-center">{book.title}</h5>
            <p class="card-text text-center">{book.description}</p>
          </div>
        </div>
        </div>
      );
    })}  
   
     </div>
  )
  }
  export default Card
  