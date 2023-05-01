import React from 'react';
import { NativeSelect } from '@mui/material';

const Selector = ({ setDegree }) => {

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
    </div>
  )
}

export default Selector