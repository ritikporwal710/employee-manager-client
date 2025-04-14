import React, { useEffect, useState } from "react";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeForm from "./components/AddEmployeeForm";
import { getEmployees } from "./Services/EmployeeService";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

function App() {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const employees = await getEmployees();
      setEmployees(employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            Employee Management System
          </Typography>
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <AddEmployeeForm onAddEmployee={handleAddEmployee} />
          </Paper>
          <Paper elevation={3} sx={{ p: 3 }}>
            <EmployeeList
              employees={employees}
              onDeleteEmployee={handleDeleteEmployee}
            />
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
