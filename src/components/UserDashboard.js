import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import userData from "../assets/data/userData.json";
import SideNav from "./SideNav";
import Logout from "../shared/Logout";

const UserDashboard = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="p-6 bg-gray-100 min-h-screen flex-1 ">
        <div className="float-right">
          <Logout />
        </div>
        <div className="place-items-center place-content-center">
          <h1 className="text-2xl font-semibold">User Dashboard</h1>
          <p>Tasks Completed: {userData.tasksCompleted}</p>
          <p>Pending Tasks: {userData.pendingTasks}</p>

          <div className="mt-4">
            <h2 className="text-lg">Weekly Activity</h2>
            <LineChart
              width={300}
              height={200}
              data={userData.weeklyActivity.map((value, index) => ({
                name: `Day ${index + 1}`,
                value,
              }))}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
