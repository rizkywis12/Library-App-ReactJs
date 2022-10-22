import '../../styles/components/NavbarBS.css'
import Form from 'react-bootstrap/Form';
import Dropdown from '../Dropdown';
import booksshelft from '../../assets/books.png'




function NavbarBS() {
  return (
    <div className='col-sm-5 col-lg-12'>
    <nav class="navbar navbar-expand-lg navbar-light shadow">
       <Dropdown />
       <Form className="form-inline mx-auto">
            <input
               className="search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
          <img className='logoside' src={booksshelft} alt="b" srcset="" />
                    <h1 class="sidetitle mt-2">Library</h1>
    </nav>
    </div>
  );
}

export default NavbarBS;