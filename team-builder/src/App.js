import React, { useState } from 'react';
import './App.css';
import Form from './Form'
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
  role: '',
};

function App() {
  const [team, setTeam] = useState(initialTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = evt => {
 
    const { teammate } = evt.target;
    const { value } = evt.target;
    setFormValues({ ...formValues, [teammate]: value })
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
            <Form key={person.id} details={person} />
          )
        })
      }
      </div>
    );
  };
}

export default App;
