import React from "react";
import { Route, Routes } from "react-router-dom";

import Landingpage from "pages/customer/Landingpage";
import ChatGpt from "pages/customer/ChatApp/ChatGpt";
import HomeScreen from "pages/customer/ChatApp/HomeScreen";
import ChatSideBar from "pages/customer/AiAssistChat/ChatSideBar";
import PopularQuestion from "pages/customer/AiAssistChat/PopularQuestion";
import BriefChat from "pages/customer/AiAssistChat/BriefChat";
import SummarizaDoc from "pages/customer/AiAssistChat/SummarizaDoc";
import Aid from "pages/Essay/Aid";
import Essaydesc from "pages/Essay/Essaydesc";
import Selpackage from "pages/Essay/Selpackage";
import Essaykeypoint from "pages/Essay/Essaykeypoint";

function Main() {
  return (
    <>
      <main>
        <section className=' '>
          <Routes>
            <Route path='/landingPage' element={<Landingpage />} />
            <Route path='/ChatGpt' element={<ChatGpt />} />
            <Route path='/HomeScreen' element={<HomeScreen />} />
            <Route path='/' element={<ChatSideBar />} />
            <Route path='/PopularQuestion' element={<PopularQuestion />} />
            <Route path='/BriefChat' element={<BriefChat />} />
            <Route path='/SummarizaDoc' element={<SummarizaDoc />} />
            <Route path='/Aid' element={<Aid />} />
            <Route path='/Essaydesc' element={<Essaydesc />} />
            <Route path='/Selpackage' element={<Selpackage />} />
            <Route path='/Essaykeypoint' element={<Essaykeypoint />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default Main;
