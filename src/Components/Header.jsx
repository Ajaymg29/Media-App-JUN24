import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar className="bg-warning">
        <Container>

          <Navbar.Brand className='fw-bolder'>
            <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>
              <i class="fa-solid fa-play fa-beat me-3 fs-3"></i>
              Media-Player
            </Link>
          </Navbar.Brand>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header