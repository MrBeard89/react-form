import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { useState } from 'react'

function App() {
  //Show email address input if true
  const [switcher, setSwitcher] = useState(false)

  //States for inputs
  const [lastname, setLastname] = useState('')
  const [firstname, setFirstname] = useState('')
  const [female, setFemale] = useState('Nő')
  const [male, setMale] = useState('Férfi')
  const [gender, setGender] = useState('')
  const [telephone, setTelephone] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('')

  //handle functions
  const handleChangeLastname = (event) => {
    setLastname(event.target.value)
  }

  const handleChangeFirstname = (event) => {
    setFirstname(event.target.value)
  }

  const handleChangeGender = (event) => {
    setGender(event.target.value)
  }

  const handleChangeTelephone = (event) => {
    setTelephone(event.target.value)
  }

  const handleChangeBirthdate = (event) => {
    setBirthdate(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  //Reset Data
  const resetAllState = () => {
    setLastname('')
    setFirstname('')
    setGender('')
    setTelephone('')
    setBirthdate('')
    setEmail('')
  }

  //Form Submit handler
  const handleSubmit = (event) => {
    event.preventDefault()
    const userData = {
      lastName: lastname,
      firstName: firstname,
      gender: gender,
      telephone: telephone,
      birthDate: birthdate,
      email: email,
    }

    console.log(userData)
    resetAllState()
  }
  //Function for switching(showing) email address
  const showMiscInput = () => {
    setSwitcher((prev) => !prev)
  }

  return (
    <div className='App'>
      <button
        type='button'
        className='btn btn-primary mt-5'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Kérem kattintson
      </button>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Kérem adja meg adatait
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              {/* Form */}

              <form onSubmit={handleSubmit}>
                {/* Lastname container and input */}

                <div className='mb-5'>
                  <label htmlFor='lastName' className='form-label'>
                    Vezetéknév
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    pattern='^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$'
                    required
                    minLength='1'
                    placeholder='Írja be a vezetéknevét'
                    value={lastname}
                    onChange={handleChangeLastname}
                  />
                  <span className='hu'></span>
                </div>

                {/* Firstname container and input */}

                <div className='mb-5'>
                  <label htmlFor='firstName' className='form-label'>
                    Keresztnév
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    pattern='^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$'
                    required
                    minLength='1'
                    placeholder='Írja be a keresztnevét'
                    value={firstname}
                    onChange={handleChangeFirstname}
                  />
                  <span className='hu'></span>
                </div>

                {/* Gender select container and Checkboxes */}

                <div className='mb-5 form-check gender-container'>
                  <label className='form-check-label' htmlFor='genderSelect'>
                    Neme
                  </label>
                  <div className='gender-select'>
                    <div
                      className={
                        gender === 'Férfi' || ''
                          ? 'checkbox-container hidden'
                          : 'checkbox-container show'
                      }
                    >
                      <label className='gender-label'>{female}:</label>
                      <input
                        type='checkbox'
                        className='form-check-input  mt-1'
                        id='genderSelect'
                        value={female}
                        onClick={handleChangeGender}
                        checked={gender === 'Nő' ? true : false}
                      />
                    </div>

                    <div
                      className={
                        gender === 'Nő' || ''
                          ? 'checkbox-container hidden'
                          : 'checkbox-container show'
                      }
                    >
                      <label className='gender-label'>{male}:</label>
                      <input
                        type='checkbox'
                        className='form-check-input mt-1 '
                        id='genderSelect'
                        value={male}
                        onClick={handleChangeGender}
                        checked={gender === 'Férfi' ? true : false}
                      />
                    </div>
                  </div>
                </div>

                {/* Telephone number container and Input */}

                <div className='mb-5'>
                  <label htmlFor='telephone-number' className='form-label'>
                    Mobilszám:
                  </label>
                  <input
                    type='telephone'
                    className='form-control'
                    id='telephone-number'
                    required
                    pattern='^(\+\d{1,3}[- ]?)?\d{10}$'
                    placeholder='példa:+36301234567'
                    value={telephone}
                    onChange={handleChangeTelephone}
                  />
                  <span className='hu'></span>
                </div>

                {/* Date Picker container */}

                <div className='mb-3 form-check birth-date-container p-0'>
                  <label className='form-check-label birth-date-label' htmlFor='birth-date'>
                    Válaszon születési évet
                  </label>

                  <input
                    type='date'
                    className='form-check-input date-picker'
                    id='birth-date'
                    required
                    value={birthdate}
                    onChange={handleChangeBirthdate}
                  />
                </div>

                {/* Misc data switcher container */}

                <div className='form-check form-switch misc-data-container p-0 mb-3'>
                  <label className='form-check-label ' htmlFor='misc-data'>
                    Egyéb adatok
                  </label>
                  <input
                    className='form-check-input misc-data-switcher'
                    type='checkbox'
                    role='switch'
                    id='misc-data'
                    onClick={showMiscInput}
                  />
                </div>

                {/* Default hidden: Email address container */}

                <div className={switcher === true ? 'mb-5 show' : 'mb-5 hidden'}>
                  <label htmlFor='email' className='form-label'>
                    Email-cím
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='példa:pelda@pelda.hu'
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  <span className='hu'></span>
                </div>

                {/* Btn container */}

                {/* Save -Submit */}

                <div className='btn-container'>
                  <button type='submit' className='btn btn-primary'>
                    Mentés
                  </button>

                  {/* Close Modal */}

                  <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
