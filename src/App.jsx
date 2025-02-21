import React, { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Avatar, Button, Box } from '@mui/material';
import { format, getDaysInMonth, startOfMonth, addDays } from 'date-fns';
import { FaPlus, FaFileImport, FaFileExport, FaStar, FaCalendarAlt, FaCheck, FaTimes, FaStarHalfAlt, FaExclamationTriangle, FaPlaneDeparture } from 'react-icons/fa';
import Header from './Header';
import SideNav from './SideNav';
import './App.css'; // Import the CSS file for button styles

const App = () => {
  const [attendance, setAttendance] = useState({
    1: Array(31).fill('X'), // Representing attendance for each employee for the days of the month
    2: Array(31).fill('X'),
    3: Array(31).fill('X'),
    4: Array(31).fill('X'),
    5: Array(31).fill('X'),
    6: Array(31).fill('X'),
    7: Array(31).fill('X'),
    8: Array(31).fill('X'),
    9: Array(31).fill('X'),
    10: Array(31).fill('X'),
    11: Array(31).fill('X'),
    12: Array(31).fill('X'),
    13: Array(31).fill('X'),
    14: Array(31).fill('X'),
    15: Array(31).fill('X'),
    16: Array(31).fill('X'),
    17: Array(31).fill('X'),
    18: Array(31).fill('X'),
    19: Array(31).fill('X'),
    20: Array(31).fill('X'),
  });

  const employeeNames = [
    'Chase Burke', 'Enzo Mcintosh', 'Gwendolyn Christian', 'Dominique Conner', 'Sasha Kim',
    'Kaila Peters', 'Dallas Bowen', 'Haylie Lowe', 'Cecilia Christian', 'Alexia Scott',
    'Yandel Olsen', 'Oliver Lynch', 'Lucille Stephens', 'Phoenix Calderon', 'Justice Shields',
    'Kyson Rollins', 'Giuliana Arias', 'Maximilian Eaton', 'Aryana Mcmillan', 'Carlo Oconnell'
  ];

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleAttendanceChange = (employeeId, dayIndex) => {
    const updatedAttendance = { ...attendance };
    updatedAttendance[employeeId][dayIndex] = updatedAttendance[employeeId][dayIndex] === 'X' ? '✔️' : 'X';
    setAttendance(updatedAttendance);
  };

  const daysInMonth = getDaysInMonth(new Date(selectedYear, selectedMonth));
  const startDate = startOfMonth(new Date(selectedYear, selectedMonth));
  const dates = Array.from({ length: daysInMonth }, (_, i) => addDays(startDate, i));

  return (
    <div className="app">
      <SideNav />
      <div className="main-content">
        <Header
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <Container maxWidth={false} className="app-container" sx={{ padding: 0 }}>
          <Typography variant="h5" sx={{ marginBottom: '20px', padding: '0 20px' }}></Typography>
          <div className="button-container">
            <Button variant="contained" color="primary" startIcon={<FaPlus />} className="custom-button-attendance">
              Mark Attendance
            </Button>
            <Button variant="contained" startIcon={<FaFileImport />} className="custom-button">
              Import
            </Button>
            <Button variant="contained" startIcon={<FaFileExport />} className="custom-button">
              Export
            </Button>
          </div>
          <Box className="attendance-container" sx={{ margin: '0 auto', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: 'calc(100% - 10px)' }}>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              <FaStar /> Holiday | <FaCalendarAlt /> Day Off | <FaCheck /> Present | <FaStarHalfAlt /> Half Day | <FaExclamationTriangle /> Late | <FaTimes /> Absent | <FaPlaneDeparture /> On Leave
            </Typography>
            <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto' }}>
              <Table className="attendance-table" sx={{ tableLayout: 'fixed', width: '100%' }}>
                <TableHead className="TableHead">
                  <TableRow>
                    <TableCell sx={{ width: '100px' }}>Employee</TableCell>
                    {dates.map(date => (
                      <TableCell key={date} sx={{ width: '30px', padding: '4px', textAlign: 'center' }}>
                        {format(date, 'd')}
                        <br />
                        <span style={{ fontSize: 'small', color: 'gray' }}>{format(date, 'EEE')}</span>
                      </TableCell>
                    ))}
                    <TableCell sx={{ width: '80px' }}>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(attendance).map((employeeId, index) => {
                    const employeeAttendance = attendance[employeeId];
                    const totalPresent = employeeAttendance.filter(status => status === '✔️').length;
                    return (
                      <TableRow key={employeeId}>
                        <TableCell sx={{ width: '100px', display: 'flex', alignItems: 'center' }}>
                          <Avatar sx={{ width: 24, height: 24, marginRight: '8px' }} />
                          <Typography variant="body2" sx={{ fontSize: '12px' }}>
                            {employeeNames[index]}
                          </Typography>
                        </TableCell>
                        {employeeAttendance.slice(0, daysInMonth).map((status, dayIndex) => (
                          <TableCell
                            key={dayIndex}
                            sx={{ cursor: 'pointer', padding: '4px', textAlign: 'center' }}
                            onClick={() => handleAttendanceChange(employeeId, dayIndex)}
                          >
                            {status}
                          </TableCell>
                        ))}
                        <TableCell sx={{ width: '80px' }}>{totalPresent} / {daysInMonth}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default App;