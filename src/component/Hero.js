import React from 'react'

export const Hero = () => {
  return (
    <section className="hero">
        <div className='container'>
           <span className='heroLogistic text-white'>Logistic & Supply Chain Solution</span>
           <h1 className='text-white '>YOUR GATEWAY<br/>TO ANY DESTINATION<br/>IN THE WORLD</h1>
           <p className='text-white'> In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu<br/> no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim <br/> diam interdum nulla, sed laoreet risus lectus.</p>
            <span className='button1 p-2'>
            Explore More
            </span>
        </div>
        
    </section>
  )
}

export const About=()=>{
    return (
        <section className='container'>
             <div className='row p-5'>
                 {/* <div className='col-4'> */}
                 <div className='col-4'>
                    <div className=''>
                        <div>
                        <span className=' heroAbout text-dark'>What We Do</span>
                        <h1>Safe & Reliable <br/> Cargo Solutions</h1>  
                        </div>
                        {/* <div>
                            <img src={require('../asset/image/harbour.svg').default} alt=''/>
                        </div> */}
                    </div>
                {/* </div> */}
                 </div>
                 <div className='col-8'>
                     <div className='row'>
                     <div className='row p-5 justify-content-between'>
                <div className='col-6'>
                <div className='d-flex justify-content-between'>
                        <div>
                        <h1 className='service'>Sea Transport Services</h1>  
                        <p className=' '>Following the quality of our service thus having gained trust of our many clients.</p>
                        </div>
                        <div>
                            {/* <img src={require('../asset/image/hau.svg').default} alt=''/> */}
                            <img src={require('../asset/image/harbour.svg').default} alt=''/>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                <div className='d-flex justify-content-between'>
                        <div>
                        <h1 className='service'>Warehousing Services</h1>  
                        <p className=' '>Following the quality of our service thus having gained trust of our many clients.</p>
                        </div>
                        <div>
                            <img src={require('../asset/image/hau.svg').default} alt=''/>
                            {/* <img src={require('../asset/image/harbour.svg').default} alt=''/> */}
                        </div>
                    </div>
                </div>
                {/* <div className='col-6'>
                <div className='d-flex justify-content-between'>
                        <div>
                        <h1 className='service'>Warehousing Services</h1>  
                        <p className=' '>Following the quality of our service thus having gained trust of our many clients.</p>
                        </div>
                        <div>
                            <img src={require('../asset/image/plane.svg').default} alt=''/>
                        </div>
                    </div>
                </div> */}
                <div className='col-6'>
                <div className='d-flex justify-content-between'>
                        <div>
                        <h1 className='service'>Air Fright Services</h1>  
                        <p className=' '>Following the quality of our service thus having gained trust of our many clients.</p>
                        </div>
                        <div>
                            {/* <img src={require('../asset/image/buss.svg').default} alt=''/> */}
                            <img src={require('../asset/image/plane.svg').default} alt=''/>
                        </div>
                    </div>
                </div>
                
                <div className='col-6'>
                <div className='d-flex justify-content-between'>
                        <div>
                        <h1 className='service'>Local Shipping Services</h1>  
                        <p className=' '>Following the quality of our service thus having gained trust of our many clients.</p>
                        </div>
                        <div>
                            <img src={require('../asset/image/buss.svg').default} alt=''/>
                        </div>
                    </div>
                </div>
             </div>
                     </div>
                 </div>

             </div>
        </section>
    )
}

