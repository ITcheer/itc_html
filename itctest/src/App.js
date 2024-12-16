// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import DashboardLayout from './components/dashboard/DashboardLayout'; // Import the DashboardLayout component

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-lg font-bold my-4">My Calendar App</h1>
      <DashboardLayout /> {/* Render the DashboardLayout component */}
    </div>
  );
}

export default App;