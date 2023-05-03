import React, { useState } from 'react';
import { NativeSelect } from '@mui/material';

const Selector = ({ setDegree, degree, setBachelorSpec, setMasterSpec, bachelorSpec, masterSpec }) => {
  // const [combolist, setCombolist] = useState([
  //   {
  //     name: 'software',
  //     title: "Software Engineering",
  //   },
  //   {
  //     name: 'network',
  //     title: "Computer Networking",
  //   }
  // ])

  return (
    <div>
      <NativeSelect
        defaultValue="Courses"
        inputProps={{
        name: 'courses',
        id: 'uncontrolled-native',
        }}
        onChange={(e) => setDegree(e.target.value)}
      >
        <option value="bachelor">Bachelor Degree Courses</option>
        <option value="master">Master Degree Courses</option>
      </NativeSelect>
      { degree === "bachelor" ? 
        // <NativeSelect
        //   sx={{ pl: '15px' }}
        //   defaultValue={bachelorSpec}
        //   inputProps={{
        //     name: 'courses',
        //     id: 'bachelor-select',
        //   }}
        //   onChange={(e) => setBachelorSpec(e.target.value)}
        // >
        //   {combolist.map((listItem) => (
        //     <option key={listItem.name} value={listItem.name}>
        //       {listItem.title}
        //     </option>
        //   ))}
        // </NativeSelect>
        <NativeSelect
          sx={{ pl: '15px' }}
          defaultValue={bachelorSpec}
          inputProps={{
            name: 'courses',
            id: 'bachelor-select',
          }}
          onChange={(e) => setBachelorSpec(e.target.value)}
        >
          <option value="software">Software Engineering</option>
          <option value="network">Computer Networking</option>
        </NativeSelect>
      : 
        <NativeSelect
        sx={{ pl: '15px' }}
        defaultValue={masterSpec}
        inputProps={{
          name: 'courses',
          id: 'master-select',
        }}
        onChange={(e) => {
          setMasterSpec(e.target.value);
        }}
      >
        <option value="software">Software Engineering</option>
        <option value="network">Computer Networking</option>
        <option value="cyber">Cyber Security</option>
        <option value="data">Data Analytics</option>
      </NativeSelect>
      }
    </div>
  )
}

export default Selector