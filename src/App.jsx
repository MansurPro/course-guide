import { useState, useEffect } from 'react';
import './App.css';
import { fetchFromAPI } from './services/fetchFromAPI';
import { Navbar, Hero } from './components';

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchFromAPI(`categories/3`)
    .then(data => setCourses(data.this_courses));
  }, []);

  console.log(courses);
  return (
    <>
      <Navbar />
      <Hero courses={courses}/>
    </>
  )
}

export default App
