import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const Modals = (props) => {
      
  const { buttonName, modalTitle, className} = props;

  const [show, setShow] = useState(false);
  const handleClose = () =>{
    setShow(false);
  } 
  const handleShow = () => {
    setShow(true);
  }
  const Myalert =() =>{
    alert("Data Succesfully Added");
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
        <Modal.Body>
          <form>
                    <div class="mb-3">
                    <Form.Label>Url</Form.Label>
                    <FloatingLabel controlId="floatingInput" label="Url">
                    <Form.Control type="text" placeholder="Url" />
                    </FloatingLabel>
                    </div>
                    <div class="mb-3"> 
                    <Form.Label>Title</Form.Label>
                    <FloatingLabel controlId="floatingInput" label="Title">
                    <Form.Control type="text" placeholder="Your Title" />
                    </FloatingLabel>
                      </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={4}  placeholder="Describe Your Book" />
                    </Form.Group> 
            </form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={Myalert}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  
  );
}

export default Modals;