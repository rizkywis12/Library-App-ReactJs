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
    <ModalDelete booktitle={book.title} desc="Book deleted" className="text-light fs-3 fw-bold" buttonName="Delete" modalTitle="Delete This Data"></ModalDelete>
    </div>
    <Link className='fs-1 text-light position-absolute ms-2'  to="/"><BsFillArrowLeftCircleFill /></Link>
    <img class="banner" src={book.cover} alt=""/>
    <div class="container content">
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-lg-12 py-3">
                    <Link className="btn btn-warning text-light mt-3 mb-2">{book.category}</Link>
                    </div>
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-10 ">
                            <h3 className="fs-3 fw-bolder ">{book.title}</h3>
                            <h5 className="fs-2r ">{book.penulis}</h5>
                            </div>
                            <div class="col-lg-2">
                            <p className='text-success fw-bold'>{book.stock}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                    <p>{book.date}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                    <p>{book.description}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-4 py-3">
                <img class="cover" src={book.image} alt="Cover" />
                <ModalDelete className="button btn btn-warning  text-light fs-4 fw-bold bottom-0" buttonName="Borrow" 
                modalTitle="Borrow This Book" booktitle={book.title} desc="Buku Berhasil Di Pinjam" ></ModalDelete>
            </div>
        </div>
        </div>
        </div>


  )
}

export default Detail