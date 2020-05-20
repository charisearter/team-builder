import React from 'react'
import './form.css';

function Form(props) {
    const { values, onInputChange, onSubmit } = props;
   
    return (
    <div>
        <form className='member-form' onSubmit={onSubmit}>
            <div className='member-info'>
                <h2>Add a Teammate</h2>
               
            </div>

        <div className='member-info'>

            <label>
            Name:&nbsp;        
                <input
                    type='text'
                    placeholder='Name of Teammate'
                    maxLength='20'
                    name='teammate'
                    value={values.teammate}
                    onChange={onInputChange}/>
                    </label>
                </div>
                <div className='member-info'>

            <label>
            Email:&nbsp;
                <input
                 type='text'
                placeholder='Type email'
                maxLength='20'
                name='email'
                value={values.email}
                onChange={onInputChange}
                />
            </label>
                </div>
                < div className='member-info'>
            <label>
                Role:&nbsp;
                    <select name='role' value={values.role} onChange={onInputChange}>
                        <option value=''>Select a Role</option>
                        <option value='Backend'>Backend Engineer</option>
                        <option value='Frontend'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                            <option value='Intern'>Intern</option>
                            <option value='Miracle'>Miracle Worker</option>
                            <option value='Unicorn'>Unicorn</option>
                    </select>
                    </label>
                    
                </div>  
                <h2>Team Information:</h2>
                <button className='member-info-btn'>Submit</button>        
        </form>       
    </div>
               
    )
}

export default Form;

