import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Alert extends React.Component{
    render(){
        return(
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )
    }
}
export default Alert;