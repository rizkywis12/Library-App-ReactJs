import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import checked from '../../assets/checked.png'

const ModalDelete = (props) => {
      
    const { buttonName, modalTitle, className,mytext} = props;
    
  
    const [show, setShow] = useState(false);
    const handleClose = () =>{
      setShow(false);
    } 
    const handleShow = () => {
      setShow(true);
    }
    const Myalert =() =>{
      alert("Data Succesfully Delete");
     setShow(false)
    }
  
    return (
      <>
        <Button className={className} variant="none" onClick={handleShow}>{buttonName}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="mx-auto justify-content-center">
             <div className="mx-auto text-center">
             <img src={checked} alt=""/>
             <h3>{mytext} deleted</h3>
             </div>
              </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={Myalert}>
             OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    
    );
  }
  
  export default ModalDelete;