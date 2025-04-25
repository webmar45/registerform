import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormdata] = useState({
    name: '',
    gender: '',
    age: '',
    fathername: '',
    mothername: '',
    city: '',
    state: '',
    country: '',
    college: '',
    semester: '',
    skills: ''
  })
  const handlechange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData)
    alert("Form submitted successfully")
  }
  return (
    <div className='container'>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Name:</label><br />
          <input type="text" name='name' value={formData.name} onChange={handlechange} />
        </div><br />
        <div>
          <label >Gender:</label><br />
          <select name="gender" value={formData.gender} onChange={handlechange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>

        </div><br />
        <div>
          <label >Age:</label><br />
          <input type="number" name='age' value={formData.age} onChange={handlechange} />
        </div><br />

        <div>
          <label >Father's Name:</label><br />
          <input type="text" name='fathername' value={formData.fathername} onChange={handlechange} />
        </div><br />

        <div>
          <label >Mother's Name:</label><br />
          <input type="text" name='mothername' value={formData.mothername} onChange={handlechange}/>
        </div><br />

        <div className='box'>
        <div>
          <label >City:</label><br />
          <select name="city" value={formData.city} onChange={handlechange}>
            <option value="">Select</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
            <option value="kolkata">Kolkata</option>
          </select>

        </div><br />

        <div>
          <label >State:</label><br />
          <select name="state" value={formData.state} onChange={handlechange}>
            <option value="">Select</option>
            <option value="delhi">Delhi</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="karnataka">Karnataka</option>
            <option value="tamil nadu">Tamil Nadu</option>
            <option value="west bengal">WestBengal</option>
          </select>

        </div><br />
        <div>
          <label >Country:</label><br />
          <select name="country" value={formData.country} onChange={handlechange}>
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
          </select>

        </div><br />
        </div>
        <div className='box'>
        <div>
          <label >College:</label><br />
          <select name="college" value={formData.college} onChange={handlechange}>
            <option value="">Select</option>
            <option value="gat">GAT</option>
            <option value="rnsit">RNSIT</option>
            <option value="rv">RV</option>
            <option value="bms">BMS</option>
            <option value="bit">BIT</option>
          </select>

        </div><br />

        <div>
          <label >Semester:</label><br />
          <select name="semester" value={formData.semester} onChange={handlechange}>
            <option value="">Select</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
          </select>

        </div><br />

        <div>
          <label >Skills</label><br />
          <select name="skills" value={formData.skills} onChange={handlechange}>
            <option value="">Select</option>
            <option value="AI">AI</option>
            <option value="ML">ML</option>
            <option value="DL">DL</option>
            <option value="DSA">DSA</option>
            <option value="NLP">NLP</option>
          </select>

        </div><br />
        </div>

        <div>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>


      </form>
    </div>
  )
}

export default App
