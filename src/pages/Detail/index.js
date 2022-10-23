import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Modals from '../../components/Modal';
import ModalDelete from '../../components/ModalDelete';
import { dataBooks } from '../../data/book';
import '../../styles/pages/Detail.css';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Detail = () => {
    const {id} = useParams();
    const [book] = useState( dataBooks[id-1]);
 
  return (
<div class="col-12">
    <div class="d-flex position-absolute end-0">
    <Modals className="text-light fs-4 fw-bold" buttonName="Edit" modalTitle="Edit Data"></Modals>
    <ModalDelete mytext={book.title} className="text-light fs-3 fw-bold" buttonName="Delete" modalTitle="Delete This Data"></ModalDelete>
    </div>
    <Link className='fs-1 fw-bold text-light position-absolute start-0 ms-2'  to="/"><BsFillArrowLeftCircleFill /></Link>
    <img class="banner" src={book.cover} alt=""/>
    <div class="container">
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <div class="row">
                    <div class="col-lg-12 py-3">
                    <Link className="btn btn-warning text-light mt-3 mb-2">{book.category}</Link>
                    </div>
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-10 ">
                            <h3 className="fs-3 fw-bolder ">{book.title}</h3>
                            </div>
                            <div class="col-lg-2">
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                    <div>
                  <p className='fs-3 mt-3 fw-bolder text-success'>{book.stock}</p>
          </div>
                        <p>30 Juni 2019</p>
                    </div>
                </div>
                </div>
                </div>
                </div>
</div>


  )
}

export default Detail