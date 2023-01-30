import React from "react";
import Container from "@mui/material/Container";

function Aid() {
  return (
    <>
      <nav>
        <Container maxWidth='lg'>
          <div className='flex justify-between'>
            <div className='flex mt-3'>
              <h2 className='font-bold text-black text-4xl'>Essay</h2>
              <h2 className='text-essay-col font-bold text-4xl'>Aid</h2>
            </div>
            <div className='flex mt-5'>
              <h3 className='font-bold text-xl mr-3'>Examples</h3>
              <h3 className='font-bold text-xl'>FAQ?</h3>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Aid;
