import "./App.css";
import React from "react";
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { AppProvider } from './Context/AppContext';
import Header from "./Components/Header/Header";
import Login from './Components/Login/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";

const App = () => {
  return (
    <>
    

    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </Provider>

      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;










//     <Provider store={store}>
//       <AppProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/home" element={<LandingPage />} />
//           </Routes>
//         </Router>
//       </AppProvider>
//     </Provider>
//   );
// };


