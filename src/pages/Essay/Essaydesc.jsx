import React, { useState } from "react";
import Aid from "./Aid";
import Container from "@mui/material/Container";
import Selpackage from "./Selpackage";
import Essaykeypoint from "./Essaykeypoint";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
function Essaydesc() {
  // let navigate = useNavigate();
  const navigate = useNavigate();

  return (
    <>
      <Aid />

      <hr className='border-1 border-black mt-3' />

      <Container maxWidth='md'>
        <hr className='border-1 border-black mt-20' />
        {/* <div className='vl flex justify-end'></div> */}
        <section id='step1'>
          <div className='mt-4'>
            <h2 className='sm:text-3xl font-bold text-5xl flex justify-center Essay-writ-styl'>
              What are you writing about today ?
            </h2>
            {/* <div className='flex justify-end'> */}
          </div>
          <div className='flex justify-end w-full mt-3 relative right'>
            <a href='#step1'>
              <span
                className='dot justify-end ml-1'
                // onClick={() => navigate("/Essaydesc")}
              ></span>
            </a>
            <a href='#step2'>
              <span
                // onClick={() => navigate("/Essaykeypoint")}
                className='dot ml-1'
              ></span>
            </a>
            <a href='#step3'>
              <span
                // onClick={() => navigate("/Selpackage")}
                className='dot ml-1'
              ></span>
            </a>
            <span className='dot ml-1'></span>
          </div>
          {/* </div> */}
          <div className='flex justify-center mt-6'>
            <input
              className='border-2 shadow-md rounded-lg px-56 essay-input-styl'
              type='text'
              placeholder='Enter your essay title here ...'
            />
            <button className='essay-btn-styl bg-orange-600 rounded-lg hover:bg-green-600 text-white px-6 py-2 ml-2'>
              Start Writing
            </button>
          </div>
          <div className='flex justify-center'>
            {" "}
            <hr className='essay-line ' />
            {/* <div className='vl-two flex justify-end'></div> */}
          </div>
          <h2 className='essay-txt flex justify-center font-bold text-xl mt-2'>
            Write better essays , i half the time , with artifical intelligence
          </h2>
          <p className='flex justify-center mt-5'>
            Essay Genius uses cutting-edge A1 to help you write your essays{" "}
            <br />
            like never before. Complete and rephrase sentences, generate new{" "}
            <br />
            paragraphs, and have your essay structure built for you
          </p>
          <Essaykeypoint />
          {/* <h2 className='sm:text-2xl essay-txt-two font-bold text-3xl mt-12 flex justify-center'>
          Please state the keypoints you wish the A1 to address:
        </h2>
        <div className='flex justify-center mt-10 '>
          <textarea
            className='border-2 shadow-md rounded-xl w-8/12 text-center h-44 px-4'
            placeholder='FOR A SPECIFIC RESPONSE PLEASE PROVIDE AS MUCH INFORMATION AS POSSIBLE'
            name=''
            // id=''
            // cols='30'
            // rows='10'
          ></textarea>
        </div> */}
        </section>
      </Container>

      <Selpackage />
      <br />
    </>
  );
}

export default Essaydesc;
