import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../services/fetchFromAPI';

const Navbar = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchFromAPI(`courses/`)
    .then(data => setCourses(data));
  }, []);

//   console.log(courses);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hellow 
      </h1>
      {/* <ul className="grid grid-cols-3 gap-4">
      {courses.map((item, idx) =>(
        <li key={idx}>
          {item.title}
        </li>
      ))}
      </ul> */}
    </div>
  )
}

export default Navbar;