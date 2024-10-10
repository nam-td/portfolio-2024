import React from "react";

const clientList = [
  "/apexx/clients/1541200196.png",
  "/apexx/clients/1541200208.png",
  "/apexx/clients/1541200252.png",
  "/apexx/clients/1541200261.png",
  "/apexx/clients/1541200272.png",
  "/apexx/clients/1541200315.png",
  "/apexx/clients/1541200330.png",
  "/apexx/clients/1543910331.jpg",
  "/apexx/clients/1543910340.png",
  "/apexx/clients/1543910376.jpg",
  "/apexx/clients/1543910387.jpg",
  "/apexx/clients/1543910398.jpg",
  "/apexx/clients/1543910412.png",
  "/apexx/clients/1543910428.jpg",
  "/apexx/clients/1543910464.jpg",
  "/apexx/clients/1543910476.jpg",
  "/apexx/clients/1543910500.jpg",
  "/apexx/clients/1543910510.jpg",
  "/apexx/clients/1543910531.jpg",
  "/apexx/clients/1543910552.jpg",
  "/apexx/clients/1543910601.jpg",
  "/apexx/clients/1543910636.jpg",
  "/apexx/clients/1543910648.png",
  "/apexx/clients/1543910660.jpg",
  "/apexx/clients/1543910953.png",
  "/apexx/clients/1543910967.png",
  "/apexx/clients/1543910977.png",
  "/apexx/clients/1543911004.png",
  "/apexx/clients/1543911017.png",
  "/apexx/clients/1543911027.jpg",
  "/apexx/clients/1543911041.jpg",
  "/apexx/clients/1543911050.png",
  "/apexx/clients/1543911059.png",
  "/apexx/clients/1543911075.png",
  "/apexx/clients/1543911083.png",
  "/apexx/clients/1543911153.png",
];

const ClientList = () => {
  return (
    <>
      <div className="max-w-[1440px] m-auto px-2 mt-12 4cols:px-4 mb-40">
        <h1 className="mb-6 4cols:mb-8 font-kanit text-2xl font-bold text-gray-500 border-b border-gray-500">
          OUR CLIENTS
        </h1>
        <div className="clients w-full p-8 4cols:px-12 grid grid-cols-fluid gap-8 bg-gray-400">
            {clientList.map((client, index) => {
                return (
                    <div className="client-logo w-full aspect-square bg-white flex justify-center items-center" key={index}>
                        <img 
                        className="w-[80%] grayscale"
                        src={client} alt="" />
                    </div>
                );
            })}
        </div>
      </div>
    </>
  );
};

export default ClientList;
