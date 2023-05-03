import { useState, useEffect } from 'react';
import './App.css';
import { fetchFromAPI } from './services/fetchFromAPI';
import { Navbar, Hero, Selector } from './components';

function App() {
  const [degree, setDegree] = useState("bachelor");
  const [bachelorSpec, setBachelorSpec] = useState("software");
  const [masterSpec, setMasterSpec] = useState("software");
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    if (degree === "bachelor"){
      if (bachelorSpec === "software") {
        fetchFromAPI(`categories/10`)
        .then(data => setCourses(data.this_courses));
      } else if (bachelorSpec === "network") {
        fetchFromAPI(`categories/8`)
        .then(data => setCourses(data.this_courses));
      }
    } else {
      if (masterSpec === "software") {
        fetchFromAPI(`categories/20`)
        .then(data => setCourses(data.this_courses));
      } else if (masterSpec === "network") {
        fetchFromAPI(`categories/6`)
        .then(data => setCourses(data.this_courses));
      } else if (masterSpec === "cyber") {
        fetchFromAPI(`categories/18`)
        .then(data => setCourses(data.this_courses));
      } else if (masterSpec === "data") {
        fetchFromAPI(`categories/19`)
        .then(data => setCourses(data.this_courses));
      }
    }
  }, [bachelorSpec, masterSpec, degree]);

  // console.log(degree);
  return (
    <>
      <Navbar />
      <Selector 
        degree={degree} 
        setDegree={setDegree}
        bachelorSpec={bachelorSpec}
        setBachelorSpec={setBachelorSpec}
        masterSpec={masterSpec}
        setMasterSpec={setMasterSpec}
      />
      <Hero courses={courses}/>
    </>
  )
}

export default App
