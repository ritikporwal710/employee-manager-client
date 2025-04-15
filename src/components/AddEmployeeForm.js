import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { addEmployee } from "../Services/EmployeeService";

function AddEmployeeForm({ onAddEmployee }) {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const employee = {
      username: formData.username,
      name: formData.name,
      email: formData.email,
    };
    await addEmployee(employee);
    if (formData.username && formData.name && formData.email) {
      onAddEmployee(formData);
      setFormData({
        username: "",
        name: "",
        email: "",
      });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
        Add New Employee
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            size="large"
            sx={{ mt: 2 }}
          >
            Add Employee
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddEmployeeForm;
