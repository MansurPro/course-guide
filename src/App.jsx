import { useState, useEffect } from 'react';
import './App.css';
import { fetchFromAPI } from './services/fetchFromAPI';
import { Navbar, Hero, Selector } from './components';

function App() {
  const [degree, setDegree] = useState("bachelor");
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (degree === "bachelor") {
      fetchFromAPI(`categories/1`)
      .then(data => setCourses(data.this_courses));
    } else {
      fetchFromAPI(`categories/3`)
      .then(data => setCourses(data.this_courses));
    }
  }, [degree]);

  console.log(degree);
  return (
    <>
      <Navbar />
      <Selector setDegree={setDegree}/>
      <Hero courses={courses}/>
    </>
  )
}

export default App
