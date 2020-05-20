import React from 'react'

function Teammate(props) {
    const { details } = props

    if (!details) {
      return <h3>Working fetching your teammate&apos;s details...</h3>
    }
  
    return (
      <div>
        <h2>{details.teammate}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
        </div>
    )
}

export default Teammate

