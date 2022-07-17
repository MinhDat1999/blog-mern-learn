import React from "react";

const boxleft = () => {
  return (
    <div>
      <div className=" hidden lg:block py-8 px-3">
        <div className=" h-56 p-1 bg-lime-900 mb-5 ">
          <div className="w-full h-full bg-white mb-5  ">
            <h1 className="py-1 border-y-2 border-gray-900 text-center">
              Cartory
            </h1>
            <div className="grid grid-cols-2  ">
              <div className="w-full h-[50%] border-b-2 py-4  flex items-center justify-center">
                Sport
              </div>
              <div className="w-full h-[50%] border-b-2 py-4 flex items-center justify-center">
                Law
              </div>
              <div className="w-full h-[50%] border-b-2 py-4  flex items-center justify-center">
                Women
              </div>
              <div className="w-full h-[50%] border-b-2 py-4 flex items-center justify-center">
                Travel
              </div>
              <div className="w-full h-[50%] border-b-2 py-4  flex items-center justify-center">
                Health
              </div>
              <div className="w-full h-[50%] border-b-2 py-4 flex items-center justify-center">
                Sport
              </div>
            </div>
          </div>
        </div>
        <div className="h-[40%] text-center px-4 shadow-2xl border-2 border-slate-900 border-opacity-10 ">
          <h1 className="py-4 border-b-2 font-bold border-slate-500">
            About Me
          </h1>
          <img
            className="w-80% h-[30%%]"
            src="https://images.unsplash.com/photo-1657829170207-13fc839c5e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p className="text-center mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            dolorum consectetur, eligendi laudantium libero sint iusto quia,
            natus nobis esse voluptate laboriosam nihil
          </p>
        </div>
      </div>
    </div>
  );
};

export default boxleft;
