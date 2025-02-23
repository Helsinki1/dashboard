import React from 'react';
import LineGraph from "../components/Line"
import BarGraph from "../components/Bar"

function Home() {
  
  return (
    <div className="flex flex-col w-full h-full justify-start bg-slate-100">
      <h1 className="text-3xl font-bold ml-20 mt-14 text-gray-700">Welcome Back, David</h1>
      <p className="text-md ml-20 mt-2 text-gray-700">Here is the latest information.</p>
      <div className="flex w-full mt-8 h-32 items-center justify-center space-x-16">
        <div className="flex flex-col bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Total Sales</h1>
          <p className="mt-3 font-bold text-2xl">$2,556,980</p>
        </div>
        <div className="flex flex-col bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Deals Pending</h1>
          <p className="mt-3 font-bold text-2xl">68</p>
        </div>
        <div className="flex flex-col bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Client Messages</h1>
          <p className="mt-3 font-bold text-2xl">254</p>
        </div>
      </div>
    
      <div className="flex mt-20 w-full justify-center h- space-x-14">
        <div className="bg-white w-5/12 h-full rounded-md shadow-2xl">
          <LineGraph/>
        </div>
        <div className="bg-white w-5/12 h-full rounded-md shadow-2xl">
          <BarGraph/>
        </div>
      </div>
    </div>
  )
}

export default Home