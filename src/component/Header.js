import React from 'react'

const Header = () => {
  return (
    <div className='headFont'>
        <div className='container p-2 align-items-center'>
             <div className='row'>
                <div className='col-4'>
                     <img src={require('../asset/image/Logo.svg').default} alt=''/>
                </div>
                <div className='col-8'>
                      <div className='row'>
                         <div className='col-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                            <img src={require('../asset/image/time.svg').default} className='d-block' alt=''/>
                            <p className='text-white krub ms-2'>Mon - Sat 9.00 -18.00<br/>Sunday Close</p>

                            </div>
                         </div>
                         <div className='col-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                            <img src={require('../asset/image/email.svg').default} className='d-block' alt=''/>
                            <p className='text-white krub ms-2'>Email:<br/>Follyb@logistic.com</p>

                            </div>
                         </div>
                         <div className='col-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                            <img src={require('../asset/image/call.svg').default} className='d-block' alt=''/>
                            <p className='text-white krub ms-2'>Call us<br/>(00)112 365 489</p>

                            </div>
                         </div>
                      </div>
                </div>
             </div>

        </div>
    </div>
  )
}

export default Header
