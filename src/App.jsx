import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (e) => {
    e.preventDefault();
    if(weight <= 0 || height <= 0)
    {
      alert("please enter a valid weight and height")
    }else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1)); {/*Rounds the result to 1 decimal place, 24.56789 becomes "24.6"*/}

      if(bmi<25){
        setMessage('you are underweight')
      }else if(bmi>=25 && bmi<30){
        setMessage('you are a healthy weight')
      }else{
        setMessage('you are overweight')
      }
    }
  }

  let reload = () => {          {/*window.location refers to the current page's URL and browser tab..reload() is a method that reloads the current webpage*/}
    window.location.reload()
  }

  return (
    <div className="app">

      <div className="container">
        <h2>BMI Calculator</h2>

        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs)</label> {/*weight	Should be in pounds (lbs)*/}
            <input type="text" placeholder="Enter Weight value" value={weight} onChange={(e) => setWeight(e.target.value)}></input> {/*value={weight}	Binds the input value to the weight state variable*/}
          </div>

          <div>
            <label>Height (in)</label> {/*height	Should be in inches*/}
            <input type="text" placeholder="Enter height value" value={height} onChange={(e) => setHeight(e.target.value)}></input>
          </div>

          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="button">Reload</button>
          </div>
          
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>

      </div>    
    </div>
  )
}

export default App
