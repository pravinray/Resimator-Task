import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Card,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SideNav from "../shared/SideNav";
import adminData from "../assets/data/adminData.json";
import users from "../assets/data/users.json";
import Logout from "../shared/Logout";

const AdminDashboard = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);

  const handleMenuOpen = (event, rowIndex) => {
    setAnchorEl(event.currentTarget);
    setCurrentRow(rowIndex);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentRow(null);
  };

  return (
    <div className="flex">
      {/* Sidenav */}
      <SideNav />

      <div className="p-6 bg-gray-100 min-h-screen flex-1">
        <div>
            <Logout />
        </div>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Paper elevation={3} className="p-4">
            <Typography variant="h6" component="h2" gutterBottom>
              Activity Trends
            </Typography>
            <BarChart
              width={300}
              height={200}
              data={adminData.activityTrends.map((value, index) => ({
                name: `Day ${index + 1}`,
                value,
              }))}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4F46E5" />
            </BarChart>
          </Paper>

          <Paper elevation={3} className="p-4">
            <Typography variant="h6" component="h2" gutterBottom>
              Task Statuses
            </Typography>
            <ul>
              {Object.entries(adminData.taskStatuses).map(([status, count]) => (
                <li key={status} className="flex justify-between text-gray-700">
                  <span>{status}</span>
                  <span>{count}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 px-4 py-2 bg-red-500 text-white rounded">
              Log Out Other Users
            </button>
          </Paper>
        </div>

        {/* User List Section */}
        <Paper elevation={3} className="p-4">
          <Typography variant="h6" component="h2" gutterBottom>
            User List
          </Typography>
          <TableContainer component={Card}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Email</b>
                  </TableCell>
                  <TableCell>
                    <b>Phone Number</b>
                  </TableCell>
                  <TableCell>
                    <b>Role</b>
                  </TableCell>
                  <TableCell>
                    <b>Status</b>
                  </TableCell>
                  <TableCell>
                    <b>Published on</b>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Chip
                        label={user.status}
                        color={
                          user.status === "Active"
                            ? "success"
                            : user.status === "Inactive"
                            ? "default"
                            : "warning"
                        }
                      />
                    </TableCell>
                    <TableCell>{user.date}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={(event) => handleMenuOpen(event, index)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={currentRow === index}
                        onClose={handleMenuClose}
                      >
                        <MenuItem
                          onClick={() => {
                            handleMenuClose();
                            console.log("View Details");
                          }}
                        >
                          View Details
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleMenuClose();
                            console.log("Edit User");
                          }}
                        >
                          Edit User
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleMenuClose();
                            console.log("Delete User");
                          }}
                        >
                          Delete User
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default AdminDashboard;
