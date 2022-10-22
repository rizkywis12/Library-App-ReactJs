import React from 'react'
import {Link} from 'react-router-dom';

const Dropdown = () => {
  return (
    <><div class="dropdown px-3">
          <Link class="mybtn dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              All Categories
          </Link>
          <ul class="dropdown-menu">
              <li><Link class="dropdown-item" href="#">Romance</Link></li>
              <li><Link class="dropdown-item" href="#">Historical</Link></li>
              <li><Link class="dropdown-item" href="#">Comic Book</Link></li>
          </ul>
      </div><div class="dropdown px-3">
              <Link class="mybtn dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  All Time
              </Link>
              <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" href="#">Newest</Link></li>
                  <li><Link class="dropdown-item" href="#">Oldest</Link></li>
                  <li><Link class="dropdown-item" href="#">Popular</Link></li>
              </ul>
          </div></>
  )
}

export default Dropdown