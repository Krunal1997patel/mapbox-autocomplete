import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Forms = () =>{

    // const [test, setTest] = useState([])

    // useEffect(() =>{
    //     axios
    //     .get(`https://places-dsn.algolia.net`)
    //     .then(respond =>{
    //         console.log(respond)
    //     })
    //     .catch(err => console.log(err))
    // })

    return(
        <div>
            <h1>Algoila Address Autocomplete Demo</h1>
            <div>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="form-address">Address: </label>
                    <input type="text" className="form-control" id="form-address" />
                </div>

                <div className="form-group">
                    <label htmlFor="form-address2">State: </label>
                    <input type="text" className="form-control" id="form-address2" />
                </div>

                <div className="form-group">
                    <label htmlFor="form-city">City: </label>
                    <input type="text" className="form-control" id="form-city" />
                </div>

                <div className="form-group">
                    <label htmlFor="form-zip">ZIP code: </label>
                    <input type="text" className="form-control" id="form-zip" />
                </div>
            </form>
            </div>
        </div>
    )
}

export default Forms;