import React from 'react'

export const Transport = () => {
  return (
    <div className='container mt-5'>
    
                <div className='row'>
                    <div className='col-6 d-flex gap-3 align-items-center transportBorde p-3'>
                         <div className=' transpoetNumber'>1294</div>
                         <div><img src={require('../asset/image/Pattern.svg').default} alt='' className='img-fluid '/></div>
                         <div className='text-warning transportDetails'>Delivered Packages</div>
                    </div>
                    <div className='col-6 d-flex gap-3 align-items-center transportBorder p-3 '>
                    <div className='transpoetNumber'>3594</div>
                         <div><img src={require('../asset/image/Pattern.svg').default} alt='' className='img-fluid '/></div>
                         <div className='text-warning transportDetails'>Satisfied Clients</div>
                    </div>
                </div>
                <div className='v-stack .transportHolder'>
                        <h1 className='transportH1'>Transporting Across The World</h1>
                        <div className='row'>
                            <div className='col transportImg'><img src={require('../asset/image/1.svg').default} alt='' className='img-fluid '/> </div>
                            <div className='col transportImg'><img src={require('../asset/image/2.svg').default} alt='' className='img-fluid '/></div>
                            <div className='col transportImg'><img src={require('../asset/image/3.svg').default} alt='' className='img-fluid '/></div>
                            <div className='col transportImg'><img src={require('../asset/image/4.svg').default} alt='' className='img-fluid '/></div>
                            <div className='col transportImg'><img src={require('../asset/image/5.svg').default} alt='' className='img-fluid '/></div>
                        </div>
                        <div className='grade text-center '>
                              <button className='btn  btn-md bg-dark text-white btn-block '>  More Work</button>
                              
                        </div>
                     
                </div>
            </div>
  )
}

