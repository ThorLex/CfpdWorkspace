import React from "react";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./home";

export default function page() {
  return (
    <div className=" w-full h-full">
      {/*header*/}
      <div className="header">
        {" "}
        <Navbar></Navbar>
      </div>

      {/*header end **************************************************** */}

      {/* midle content*/}
      <div>
        {" "}
        <Home></Home>
      </div>

      {/*midle end content****************************************************************/}

      {/*footer*/}
      <div className="footer top-10">
        <Footer></Footer>
      </div>
      {/*footer end ********************************************************/}
    </div>
  );
}
