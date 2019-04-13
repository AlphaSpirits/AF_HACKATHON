import React, { Component } from 'react';



class Slide extends Component{

    render(){
        return(

            <div container>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href=""></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html"><h1>Home</h1> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link" href="https://pickme.lk/"><h1>Travel Agent</h1> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><h1>Contact us</h1></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><h1>About us</h1></a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit" ><h3>Search</h3></button>
                        </form>
                    </div>
                </nav>

            </div>


        )


    }

}
export default Slide;