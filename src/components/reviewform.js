import React from  'react';

// The form created to hold the data

function FormInput({handleChange, formInputData, handleSubmit}){
    return(
    
        <div className="form-row row">
          <div className="row">
            <input type="text" onChange={handleChange} value={formInputData.review} name="review" className="form-control"  placeholder="Please leave a review" />
          </div>
          <br></br>
          <div className="row">
            <input type="text" onChange={handleChange} value={formInputData.favorite} name="favorite" className="form-control" placeholder="Favorite character" />
          </div>
          <div className="row">
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </div>
      
      )
    }
    
    export default FormInput;