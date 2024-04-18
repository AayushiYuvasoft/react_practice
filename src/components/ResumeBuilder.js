import React from 'react'
import Header from './Header'
import Interest from './Interest'
import Skills from './Skills'
import Education from './Education'
import Footer from './Footer'
import Theme from './Theme'

const ResumeBuilder = () => {

  const resume = {
    interest: ["Drawing", "Painting", "Dancing", "Acting"],
    experience: [{ year: 2012, company: 'xyz', role: 'something' }],
    education: [],
    skills: ['react js', 'node js']
  }
  return (
    <>
      <Theme>
        <button onClick={()=>{window.print()}}>Print</button>
        <Header />
        <div class="stuff">
          <Interest resume={resume} />
          <Skills resume={resume} />
          <Education resume={resume} />
        </div>
        <Footer />
      </Theme>
    </>
  )
}

export default ResumeBuilder