import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div className="bg-main w-full h-full">
          <div className="container mx-auto">
            <div className="w-full p-5 md:p-[100px] flex items-start gap-[100px">
              <div className="w-full md:w-1/3">
                <h2 className="uppercase mb-4 md:mb-8">Maha Copy Co</h2>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>{" "}
                  <li>
                    <a href="#">Services</a>
                  </li>{" "}
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
