import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Selpackage() {
  return (
    <>
      {/* <Container maxWidth='lg' className='border-2 border-black'> */}
      <h2 className='font-bold text-3xl flex justify-center mt-10'>
        Select Your Package:
      </h2>
      <br />
      <Container maxWidth='lg' className=''>
        <Grid container spacing={2} className=''>
          {/* <div className='flex justify-space-evenly'> */}
          <Grid item xs={12} lg={4} sm={4} md={4}>
            {/* <div className='flex justify-center'> */}
            <div className='ml-20  sm:ml-1 xs:ml-12'>
              {/* <div className='vl-three flex justify-end'></div> */}
              <hr className='esay-styl' />

              <div className='card-essay-styl border-2 w-6/12 h-60 ml-4 bg-white shadow-lg relative mt-2 '>
                {/* <div className='mt-4'> */}
                <h2 className='ml-5 mt-4'>Monthly</h2>
                <p className='text-orange-600 ml-5 font-bold text-xl '>$4.99</p>
                <p className='ml-5'>per month</p>
                <p className='ml-5'>
                  Power through your <br /> essays with upto <br />
                  100 generations per <br />
                  month
                </p>
                <button className='border-1 bg-orange-600 ml-5 px-8 rounded-lg mt-2 py-1'>
                  Upgrade
                </button>
              </div>
            </div>
            {/* </div> */}
          </Grid>
          <Grid item xs={12} lg={4} sm={4} md={4}>
            <div className='ml-20 sm:ml-1 xs:ml-12'>
              <hr className='esay-styl' />
              {/* <div className='vl-three flex justify-end'></div> */}
              <div className='card-essay-styl border-2 w-6/12 h-60 ml-4 bg-white shadow-lg relative mt-2'>
                <h2 className='ml-5 mt-2'>Monthly</h2>
                <p className='text-orange-600 ml-5 font-bold text-xl'>$4.99</p>
                <p className='ml-5'>per month</p>
                <p className='ml-5'>
                  Power through your <br /> essays with upto <br />
                  100 generations per <br />
                  month
                </p>
                <button className='border-1 bg-orange-600 ml-5 px-8 rounded-lg mt-2 py-1'>
                  Upgrade
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} sm={4} md={4}>
            <div className='ml-20 sm:ml-1 xs:ml-12'>
              <hr className='esay-styl' />
              {/* <div className='vl-three flex justify-end'></div> */}
              {/* <hr className='line-wrap' /> */}

              <div className='card-essay-styl border-2  w-6/12 h-60 ml-4 bg-white shadow-lg relative mt-2'>
                <h2 className='ml-5 mt-2'>Monthly</h2>
                <p className='text-orange-600 ml-5 font-bold text-xl'>$4.99</p>
                <p className='ml-5'>per month</p>
                <p className='ml-5'>
                  Power through your <br /> essays with upto <br />
                  100 generations per <br />
                  month
                </p>
                <button className='border-1 bg-orange-600 ml-5 px-8 rounded-lg mt-2 py-1'>
                  Upgrade
                </button>
              </div>
            </div>
          </Grid>
          {/* </div> */}
        </Grid>
      </Container>
    </>
  );
}

export default Selpackage;
