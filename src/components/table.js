import React from "react";
import StarRating from "./stars";

// This is for the review and fav character after the submit button is selected to add it to the movie

function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Review</th>
                    <th>Favorite Character</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <React.Fragment>
                        <tr key={index}>
                            <td>{data.review}</td>
                            <td>{data.favorite}</td>
                        </tr>
                    
                        <div className ='tablerating'>
                            {<StarRating />} 
                            <td><button type= "button" className='btn btn-warning' onClick={refreshPage}>Submit Review</button></td>
                            </div>
                        </React.Fragment>
                    )
                })
            }
            </tbody>
        </table>
    )
}

function refreshPage(){
    window.location.reload(false);

return(
    <div>
        <button onClick={refreshPage}></button>
    </div>
)
}

export default Table;