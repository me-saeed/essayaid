import React from "react";
import Container from "@mui/material/Container";

function Essaykeypoint() {
  return (
    <>
      <section id='step2'>
        <Container maxWidth='md'>
          <h2 className='sm:text-2xl essay-txt-two font-bold text-3xl mt-12 flex justify-center'>
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
          </div>
        </Container>
      </section>
    </>
  );
}

export default Essaykeypoint;
