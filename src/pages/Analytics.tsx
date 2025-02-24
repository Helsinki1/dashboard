import React from 'react'
import PieChart from '../components/Pie'

function Analytics() {
  return (
    <div className="flex flex-col w-full h-full justify-start bg-slate-100">
      <h1 className="text-3xl font-bold ml-20 mt-16 text-gray-700">Sales Analytics</h1>

      <div className="flex w-full mt-12 h-80 items-center justify-center space-x-12">
        <div className="flex flex-row bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Customer Origin</h1>
          <PieChart 
            label="Percent (%)"
            labels={["Social Media", "Website", "Tech Fair", "Word-of-Mouth", "Returning Customer"]}
            values={[25,8,17,20,30]}
            colors={["#4CAF50", "#2196F3", "#FF9800","#9C27B0", "#F44336"]}
            hoverColors={["#388E3C", "#1976D2", "#F57C00", "#7B1FA2", "#D32F2F"]}
          ></PieChart>
        </div>
        <div className="flex flex-row bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Inventory</h1>
          <PieChart 
            label="Percent (%)"
            labels={["Delivered", "Shipped", "Unsold"]}
            values={[40,8,52]}
            colors={["#4CAF50", "#2196F3", "#FF9800",]}
            hoverColors={["#388E3C", "#1976D2", "#F57C00"]}
          ></PieChart>
        </div>
        <div className="flex flex-row bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Popular Products</h1>
          <PieChart 
            label="Percent (%)"
            labels={["Portable Pumps", "Portable Compressors", "Air Filters", "Vaccuums"]}
            values={[33,17,20,30]}
            colors={["#4CAF50", "#2196F3", "#FF9800","#9C27B0", "#F44336"]}
            hoverColors={["#388E3C", "#1976D2", "#F57C00", "#7B1FA2", "#D32F2F"]}
          ></PieChart>
        </div>
      </div>

      <div className="flex w-full mt-20 h-32 items-center justify-center space-x-16">
        <div className="flex flex-col bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Outstanding Payments</h1>
          <p className="mt-3 font-bold text-2xl">$220,880</p>
        </div>
        <div className="flex flex-col bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Active Promotions & Discounts</h1>
          <p className="mt-3 font-bold text-2xl">35</p>
        </div>
      </div>
      <div className="flex w-full mt-8 h-32 items-center justify-center space-x-16">
        <div className="flex flex-col bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Units Rented</h1>
          <p className="mt-3 font-bold text-2xl">1,242</p>
        </div>
        <div className="flex flex-col bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Low Stock Alerts</h1>
          <p className="mt-3 font-bold text-2xl">56</p>
        </div>
        <div className="flex flex-col bg-white h-full w-96 shadow-2xl rounded-xl p-5">
          <h1 className="text-xl text-blue-500 font-bold">Lead Conversion Rate</h1>
          <p className="mt-3 font-bold text-xl">34%</p>
        </div>
      </div>

    </div>
  )
}

export default Analytics