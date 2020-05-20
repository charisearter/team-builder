import React from 'react'
import './teammate.css';

function Teammate(props) {
    const { details } = props

    if (!details) {
      return <h3>Working fetching your teammate&apos;s details...</h3>
    }
  
    return (
      <div className='member'>
        <div>
          <h2>
            <span className='bold'>{details.teammate}</span>
          </h2>
          <p>
          <span className='bold'>Email:</span> {details.email}
          </p>
          <p>
          <span className='bold'>Role:</span> {details.role}
          </p>
        </div>
        </div>
    )
}

export default Teammate

