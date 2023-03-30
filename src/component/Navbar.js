import React from 'react'

const Navbar = () => {
  return (
    
      <nav class="navbar navbar-expand-lg primary2">
            <div class="container p-3">
                <a class="navbar-brand text-white" href="#">Home</a>
                <a class="navbar-brand text-white" href="#">About</a>
                <a class="navbar-brand text-white" href="#">Pages</a>
                <a class="navbar-brand text-white" href="#">Project</a>
                <a class="navbar-brand text-white" href="#">Contact</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <a class="nav-link active me-4" aria-current="page" href="#">
                        <img src={require('../asset/image/insta.svg').default}alt=''/>
                    </a>
                    <a class="nav-link me-4" href="#">
                    <img src={require('../asset/image/face.svg').default}alt=''/>
                    </a>
                    <a class="nav-link me-4" href="#">
                    <img src={require('../asset/image/twit.svg').default}alt=''/>
                    </a>
                    <a class="nav-link me-4">
                    <img src={require('../asset/image/linl.svg').default}alt=''/>
                    </a>
                    <button className='btn-white '> Request Qoute</button>
                </div>
                </div>
            </div>
</nav>
  )
}

export default Navbar
