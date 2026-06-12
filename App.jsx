import './App.css'

function App() {
  return (
    <div>
      <h1>ANI TEDORADZE</h1>
      <h2>QA ENGENEER</h2>
      <p><b>ABOUT ME</b></p>

      <div style={{display: "flex", alignItems: "flex-start", padding: "20px", gap: "30px"}}>
        <img
          className="profile-photo"
          src="https://rachel.on.ge/2020/07/06/1594039769.jpg"
          alt="პროფილი"
          style={{width: "450px", height: "450px", objectFit: "cover", borderRadius: "50%"}}
        />
        <div>
          <p><b>Professional Experience</b></p>
          <ul className='profex'>
            <p>Basisbank - Product Development Manager (2018 - 2023)</p>
            <li>Collaborated with business and technical teams to develop and refine digital banking products.</li>
            <li>Prepared business requirements documentation and secured stakeholder alignment.</li>
            <li>Designed product concepts and supervised implementation.</li>
            <li>Coordinated technical documentation and approvals for business needs.</li>
            <li>Participated in product delivery and implementation processes.</li>
          </ul>
              <ul className='Qa'>
              <p> Basisbank - QA Engineer (2023 - Present)</p>
            <li>Designed and executed automated test cases using Selenium and TestNG.</li>
            <li>Developed test plans and cases for web applications.</li>
            <li>Documented issues and bugs in JIRA; worked closely with developers for resolution</li>
            <li>Performed regression, UI, and API testing (Postman, Swagger)</li>
            <li>Ensured cross-platform compatibility (iOS, Android, Web)</li>

          <ul className='skills'>
 
          <p><b>SKILLS</b></p>
           <li>Task Management Tools: JIRA</li>
           <li>Microsoft Office (Excel, Word, PowerPoint)</li>
           <li>Service Testing: Postman, Swagger</li>
           <li>Frameworks: Selenium, RestAssured, JUnit, TestNG</li>
           
          </ul>
          </ul>
        </div>
        </div>




        

      <div className='info'>
       <p>Tbilisi, Georgia</p> 
        <p>EMAIL: Anitedoradze4@gmail.com</p> 
         <p>TEL: +995 597 555 363</p>
         <p>LinkedIn: linkedin.com/in/ani-tedoradze-b84237116/</p>
      </div>
    </div>
  )
}

export default App