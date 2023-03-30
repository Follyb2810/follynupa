import React from 'react'

const Banner = () => {
  return (
    <section className='bannerBig'>
        <img src={require('../asset/image/container.svg').default} alt='' className='img-fluid d-block bannerImg'/>
        <div class="container overlay">
             <div className='container p-5'>
                <div className='row'>
                    <div className='col-6'>
                    <article className=''>
                         <span className='heroAbout'>Why Us</span>
                         <p className='BannerContentPara'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. 
                                Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                        <div className='mt-3'>
                                <img src={require('../asset/image/box.svg').default} alt='' className=''/>
                                <span className='ms-4'>Delivery on Time</span>
                            </div>
                            <div className='mt-3'>
                                <img src={require('../asset/image/moni.svg').default} alt=''/>
                                <span className='ms-4'>Optimized Travel Cost</span>
                            </div>
                         </article>
                    </div>
                    <div className='col-6'>
                        <div className='container planeOverlay'>
                        <img src={require('../asset/image/plane1.svg').default} alt='' className='img-fluid  '/>
                        <img src={require('../asset/image/plane2.svg').default} alt='' className='img-fluid ImgOverlay'/>
                        </div>
                    </div>
                </div>

             </div>
        </div>
            
    </section>
  )
}

export default Banner


//    <div className='col-6 position-relative'>
//    <div className='container'>
//    <img src={require('../asset/image/plane1.svg').default} alt='' className='img-fluid '/>
//    <img src={require('../asset/image/plane2.svg').default} alt='' className='img-fluid planeImg'/>
//    </div>

  