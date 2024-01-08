import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsPage from "./components/NewsPage";
import About from "./components/About"
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)
  const apikey = import.meta.env.VITE_API_KEY;

  return (
    <Router>
       <LoadingBar
        color='#f11946'
        progress={progress}
        height={2}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar  />
      <Routes>
        <Route exact path="/" key="general" element={<NewsPage setProgress={setProgress} apikey={apikey} ctgy="general" />} ></Route>
        <Route exact path="/busniess" key="business"  element={<NewsPage  setProgress={setProgress} apikey={apikey} ctgy="business" />} ></Route>
          <Route exact path="/entertainment" key="entertainment"  element={<NewsPage setProgress={setProgress} apikey={apikey} ctgy="entertainment" />} ></Route>
          <Route exact path="/health" key="health"  element={<NewsPage setProgress={setProgress} apikey={apikey} ctgy="health" />} ></Route>
          <Route exact path="/science" key="science"  element={<NewsPage setProgress={setProgress} apikey={apikey} ctgy="science" />} ></Route>
          <Route path="/sports"key="sports" element={<NewsPage setProgress={setProgress} apikey={apikey} ctgy="sports" />} ></Route>
          <Route exact path="/technology" key="technology"  element={<NewsPage setProgress={setProgress} apikey={apikey} ctgy="technology" />} ></Route>
        <Route exact path="/about" key="about"  element={<About />} ></Route>

      </Routes>
    </Router>
  );
};

export default App;
