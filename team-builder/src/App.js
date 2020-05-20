import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Teammate from './Teammate';
import { v4 as uuid } from 'uuid';


//Team List Object
const initialTeamList = [
  {
    id: uuid(),
    teammate: 'Reese',
    email: 'reese@gmail.com',
    role: 'Full Stack Web Dev'
  },
];

//Give State default value
const initialFormValues = {
  teammate: '',
  email: '',
  role: ''
};

function App() {
  const [team, setTeam] = useState(initialTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = evt => {
 
    const { name } = evt.target;
    const { value } = evt.target;
    setFormValues({ ...formValues, [name]: value })
  };

  const onSubmit = evt => {

    evt.preventDefault();
   
    if (
      !formValues.teammate.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ) {
      return;
    }
    const newTeam = { ...formValues, id: uuid() }

    setTeam([ newTeam, ...team ])
  
    setFormValues(initialFormValues)
  }
  console.log(formValues.teammate)
    return (
      <div className="App">
        <h1>Team List</h1>
        <Form
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />
        {
        team.map(person => {
          return (
            <Teammate key={person.id} details={person} />
          )
        })
      }
      </div>
    );
  };


export default App;
