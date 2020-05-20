import React from 'react'

function Form(props) {
    const { values, onInputChange, onSubmit } = props;
    
    return (
    <div>
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Teammate</h2>
                <button>Submit</button>
            </div>

        <div className='form-group inputs'>
            <h3>Team Information:</h3>

            <label>
            Name:&nbsp;        
                <input
                    type='text'
                    placeholder='Type the teammates name'
                    maxLength='20'
                    name='teammate'
                    value={values.teammate}
                    onChange={onInputChange}
                />
            </label>

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

            <label>
                Role:&nbsp;
                    <select name='role' value={values.role} onChange={onInputChange}>
                        <option value='' >Select a Role</option>
                        <option value='Backend'>Backend Engineer</option>
                        <option value='Frontend'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Unicorn'>Unicorn</option>
                    </select>
            </label>
        </div>     
        </form>       
    </div>
               
    )
}

export default Form;

