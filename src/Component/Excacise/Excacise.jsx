import React from 'react'
import styles from './Excacise.module.css'

function Excacise( {question, option1, option2, option3, option4} ) {
  return (
    <div className={`${styles.Excacise} card`} style={{ width: "50rem" }}>
      {question && <h5 class="card-header">{question} </h5>}
      <div className="card-body">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value={option1} id="flexCheckDefault" />
          {option1 && <label class="form-check-label" for="flexCheckDefault">
            {option1}
          </label>}
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value={option2} id="flexCheckChecked" />
          {option2 &&<label class="form-check-label" for="flexCheckChecked">
           {option2} 
          </label>}
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value={option3} id="flexCheckDefault" />
          {option3 && <label class="form-check-label" for="flexCheckDefault">
            {option3}
          </label>}
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value={option4} id="flexCheckChecked" />
          {option4 &&<label class="form-check-label" for="flexCheckChecked">
            {option4}
          </label>}
        </div>
      </div>
    </div>
  )
}

export default Excacise