import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Modals from '../Modal'
import '../../styles/components/Sidebar.css'

const SidebarLink = () => {
  return (
   
    <Row className="text-start py-5 px-3">
        <Link className="list-text mb-4">Explore</Link>
        <Link className="list-text mb-4">History</Link>
        <Modals className="list-text text-start fs-4" modalTitle="Add Data" buttonName="Add Data"></Modals>
    </Row>
  )
}

export default SidebarLink