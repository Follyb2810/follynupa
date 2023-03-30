import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Founder = () => {
    // const [value, setValue] = React.useState(5);
  return (
    <div className='container'>
            <div className='testimony'>
                <span className=''> Testimonial</span>
                <div className='row'>
                    <h3 className='col-6'>What Our Customer Say</h3>
                    <h3 className='col-6'>
                        <img src={require('../asset/image/arow.svg').default} alt=''/>
                        <img src={require('../asset/image/arrow.svg').default} alt=''/>
                    </h3>
                </div>
            </div>
            <div className='row'>
            <div className='col-6'>
                 <div className='row secondary1 p-5'>
                    <div className='col-6'>
                            <img src={require('../asset/image/User.svg').default} alt=''/>
                            <h3>Kathleen Smith</h3>
                            <h6>Fuel Company</h6>
                    </div>
                    <div className='col-6'>
                        <img src={require('../asset/image/userl.svg').default} alt=''/>
                    </div>
                    <div className='col-12 fuel'>
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </div>
                    <div className='col-12'>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                        >
                            <Rating
                                name="simple-controlled"
                                value={5}
                            />
                            <Typography component="legend"></Typography>

                        </Box>
                    </div>
                 </div>
            </div>
            <div className='col-6'>
            <div className='row primary2 p-5 justify-content-between'>
                    <div className='col-6'>
                            <img src={require('../asset/image/User.svg').default} alt=''/>
                            <h3 className='text-white'>John Martin</h3>
                            <h6 className='text-white'>Restoration Company</h6>
                    </div>
                    <div className='col-6'>
                        <img src={require('../asset/image/userl.svg').default} alt=''/>
                    </div>
                    <div className='col-12 restoration'>
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </div>
                    <div className='col-12'>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                        >
                            <Rating
                                name="simple-controlled"
                                value={5}
                            />
                            <Typography component="legend"></Typography>

                        </Box>
                    </div>
                 </div>
            </div>
        </div>
      
    </div>
  )
}

export default Founder
