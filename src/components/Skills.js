import React from 'react'

const Skills = ({ resume }) => {
  const skills = resume.skills
  console.log(skills.length>0)

  return (
    <>
      <p class="head">Skills</p>
      {skills.length>0 && skills.map((ele) => {
        return(
        <ul>
          <li>{ele}</li>
        </ul>
        )
      })}
    </>
  )
}

export default Skills