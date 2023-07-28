import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {
  return (
    <div className='App'>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Launch demo modal
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
              <form>
                <div className='mb-3'>
                  <label htmlFor='lastName' className='form-label'>
                    Vezetéknév
                  </label>
                  <input type='text' className='form-control' id='lastName' />
                </div>

                <div className='mb-3'>
                  <label htmlFor='firstName' className='form-label'>
                    Keresztnév
                  </label>
                  <input type='text' className='form-control' id='firstName' />
                </div>

                <div className='mb-3 form-check gender-container'>
                  <label className='form-check-label' htmlFor='genderSelect'>
                    Neme
                  </label>
                  <div className='gender-select'>
                    <div className='checkbox-container'>
                      <label className='gender-label'>Nő:</label>
                      <input
                        type='checkbox'
                        className='form-check-input  mt-1'
                        id='genderSelect'
                        value='Nő'
                      />
                    </div>

                    <div className='checkbox-container'>
                      <label className='gender-label'>Férfi:</label>
                      <input
                        type='checkbox'
                        className='form-check-input mt-1 '
                        id='genderSelect'
                        value='Férfi'
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-3'>
                  <label htmlFor='telephone-number' className='form-label'>
                    Telefonszám/Mobilszám:
                  </label>
                  <input type='text' className='form-control' id='telephone-number' />
                </div>

                <div className='mb-3 form-check birth-date-container p-0'>
                  <label className='form-check-label birth-date-label' htmlFor='birth-date'>
                    Válaszon születési évet
                  </label>
                  <input type='date' className='form-check-input' id='birth-date' />
                </div>

                <div className='form-check form-switch misc-data-container p-0'>
                  <label className='form-check-label misc-data-label' for='misc-data'>
                    Egyéb adatok
                  </label>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    role='switch'
                    id='misc-data'
                  />
                </div>

                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
