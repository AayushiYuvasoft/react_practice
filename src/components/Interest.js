import React from 'react'

const Interest = (props) => {
  const { resume } = props
  const { interest } = resume
  console.log(interest, "interest")
  return (

    <>
      <p class="head">Interests</p>
      {interest && interest.map((ele) => (
        <>
          <ul>
            <li>{ele}</li>
          </ul>
        </>
      ))}
    </>)
}

export default Interest