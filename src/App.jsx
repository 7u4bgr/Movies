import React, { useEffect, useState } from 'react';
import './App.css';
import { routeArr } from './routes';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wrapper from './components/UI/wrapper';
import Loadings from './components/loadings';
function App() {
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, "3000");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {routeArr.map((item) => (
          <Route
            exact
            path={item.path}
            key={item.id}
            element={
              <>
                <Header />
                <item.component />
                <Wrapper>

                <Footer />
                </Wrapper>
                {loading?<Loadings/>:null}
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
