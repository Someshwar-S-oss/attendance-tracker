import React from 'react';
import { FaSearch, FaBell, FaClock, FaPlus, FaPowerOff } from 'react-icons/fa';

const Header = ({ selectedMonth, setSelectedMonth, selectedYear, setSelectedYear }) => {
  return (
    <div className="header-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: 0, color: '#213547' }}>Attendance</h2>
          <nav style={{ fontSize: '14px', color: '#888' }}>
            Home • Attendance
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaSearch style={{ marginRight: '20px', cursor: 'pointer' }} />
          <FaClock style={{ marginRight: '20px', cursor: 'pointer' }} />
          <FaPlus style={{ marginRight: '20px', cursor: 'pointer' }} />
          <div style={{ position: 'relative', marginRight: '20px', cursor: 'pointer' }}>
            <FaBell />
            <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'blue', color: 'white', borderRadius: '50%', padding: '2px 5px', fontSize: '12px' }}>1</span>
          </div>
          <FaPowerOff style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div className="header-divider"></div>
      <div className="header-dropdowns">
        <label>
          Employee
          <select>
            <option>All</option>
          </select>
        </label>
        <label>
          Department
          <select>
            <option>All</option>
          </select>
        </label>
        <label>
          Designation
          <select>
            <option>All</option>
          </select>
        </label>
        <label>
          Month
          <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
            ))}
          </select>
        </label>
        <label>
          Year
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={selectedYear - 5 + i}>{selectedYear - 5 + i}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default Header;