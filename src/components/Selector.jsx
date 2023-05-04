import React, { useState, useEffect } from 'react';
import { NativeSelect } from '@mui/material';

const Selector = ({ setDegree, degree, setBachelorSpec, setMasterSpec, bachelorSpec, masterSpec }) => {
  const [combolist, setCombolist] = useState([
    {
      name: 'software',
      title: "Software Engineering",
    },
    {
      name: 'network',
      title: "Computer Networking",
    }
  ])

  useEffect(() => {
    if (degree === "master")
    {
      setCombolist([
        {
          name: 'software',
          title: "Software Engineering",
        },
        {
          name: 'network',
          title: "Computer Networking",
        },
        {
          name: 'cyber',
          title: "Cyber Security",
        },
        {
          name: 'data',
          title: "Data Analytics",
        }
      ]);
    } else {
      setCombolist([
        {
          name: 'software',
          title: "Software Engineering",
        },
        {
          name: 'network',
          title: "Computer Networking",
        }
      ]);
    }
  }, [degree]);

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
      <NativeSelect
          sx={{ pl: '15px' }}
          defaultValue={"some"}
          inputProps={{
            name: 'courses',
            id: 'bachelor-select',
          }}
          onChange={(e) => {
            if (degree === "master") {
              setMasterSpec(e.target.value);
            } else {
              setBachelorSpec(e.target.value);
            }
          }}
        >
          {combolist.map((listItem) => (
              <option key={listItem.name} value={listItem.name}>
                {listItem.title}
              </option>
            )
          )}
        </NativeSelect>
    </div>
  )
}

export default Selector