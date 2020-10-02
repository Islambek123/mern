import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <div className="container">
               <h1>Welcome to our Website - Developed using MERN Stack</h1>
               <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="#">About</a></li>
             <li><a href="#">Contact</a></li>
               </ul>
              <div class="row">
                 <div class="col-6">
                 <h2>
                  ------------------------------------
                 ------------------------------------
                --------------Site Content-----------
                -------------------------------------
                --------------------------------------
                  </h2>
                  </div>
             </div>
            </div>
        );
    }
}

export default HomePage;
