import React from "react";
import Chart from "../../Components/Chart/Chart";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ColumnChart from "../../Components/Chart/Columnchart";

function Dashboard() {
 
  const chartData = [30, 40, 45, 50, 49, 60, 70, 91, 125];
  const chartCategories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9'];


  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full ">
        <h2>Dashboard</h2>

        <div className="flex space-x-8 py-6">
          <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
            <h2>Yatharth Verma</h2>
            <p className="text-gray-500 mt-3">Your Expenses: Rs10000</p>
          </div>
          <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
            <h2>Yatharth Verma</h2>
            <p className="text-gray-500 mt-3">Your Savings: Rs100000</p>
          </div>
        </div>
        <div className="flex space-x-8 py-6 w-4/5">
          <div className="flex flex-col rounded-md border w-full p-8 justify-center">
            Expenses Graph
            <ColumnChart data={chartData} categories={chartCategories} />
            <Chart />
          </div>
        </div>
        <div className="flex space-x-8 py-6">
          <div className="flex flex-col rounded-md border  w-[400px] h-[200px] p-8 justify-center">
            <h2>Your Activity</h2>
            <li className="text-gray-500 mt-3">Sent Rs 10000 to mother</li>
          </div>
          <div className="flex flex-col rounded-md border w-[400px] h-[200px] p-8 justify-center">
            <h2>Pending Bills</h2>
            <li className="text-gray-500 mt-3">Broadband bill: Rs 1000</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
