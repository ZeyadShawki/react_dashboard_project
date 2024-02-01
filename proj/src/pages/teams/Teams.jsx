import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { LockOutlined, Person2Outlined } from "@mui/icons-material";

const Teams = () => {
  const rows = [
    {
      id: 1,
      firstName: "John",
      email: "john@example.com",
      age: 25,
      phone: "123-456-7890",
      access: "admin",
    },
    {
      id: 2,
      firstName: "Jane",
      email: "jane@example.com",
      age: 30,
      phone: "987-654-3210",
      access: "user",
    },
    {
      id: 3,
      firstName: "Bob",
      email: "bob@example.com",
      age: 22,
      phone: "555-123-4567",
      access: "admin",
    },
    {
      id: 4,
      firstName: "Alice",
      email: "alice@example.com",
      age: 28,
      phone: "777-888-9999",
      access: "user",
    },
    // Add more dummy data as needed
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 200, resizable: true },
    {
      field: "firstName",
      headerName: "First Name",
      width: 200,
      resizable: true,
    },
    { field: "email", headerName: "Email", width: 200, resizable: true },
    { field: "age", headerName: "Age", width: 200, resizable: true },
    { field: "phone", headerName: "Phone", width: 200, resizable: true },
    {
      field: "access",
      renderCell: (params) => <MyButton text={params.value} />,
      headerName: "Access",
      width: 200,
      resizable: true,
    },
  ];

  return (
    <div
      style={{
        // height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        autoHeight
      />
    </div>
  );
};

const MyButton = ({ text }) => {
  return (
    <Box
      bgcolor={text == "user" ? blue[200] : red[500]}
      width={100}
      height={40}
      // margin={2}
      color="white"
      padding={2}
      borderRadius={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {text == "admin" && <LockOutlined style={{ marginRight: 5 }} />}
      {text == "user" && <Person2Outlined style={{ marginRight: 5 }} />}

      <Typography>{text}</Typography>
    </Box>
  );
};

export default Teams;
