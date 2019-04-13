import React, {Component, Fragment} from 'react'
class BeachSide extends Component {
    render() {
        return(
            <div>
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
                                    <a className="nav-link" href="#"><h3>Home</h3><span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><h3>Travel Agent</h3> </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><h3>Contact us</h3></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><h3>About us</h3></a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit" ><h3>Search</h3></button>
                            </form>
                        </div>
                    </nav>
                    <br/>
                    <br/>
                </div >

                <div align="center">
                    <h2>Experiencing Bach Side</h2>
                </div>
                <br/>
                <br/>

                <div className="imagecontainer">


                    <img src={require('./beach1.jpg')} alt="green" width="250px" height="200px" align="center"/>

                    <img src={require('./beach3.jpg')} alt="green" width="250px" height="200px" align="center"/>
                    <img src={require('./beach4.jpg')} alt="green" width="250px" height="200px" align="center"/>
                    <img src={require('./beach5.jpg')} alt="green" width="250px" height="200px" align="center"/>

                    <img src={require('./beach6.jpg')} alt="green" width="250px" height="200px" align="center"/>
                </div>


                <br/>
                <br/>

                <div className="container">
                    <div className="row">
                        <div className="column">
                            <ul>
                                <a href="#">
                                    <h3>Activities</h3>
                                    Snorkeling in Sri Lanka<br/>
                                    Hikkaduwa Boat Ride<br/>
                                    Sea Kayaking in Sri Lanka<br/>
                                    Sailing in Sri Lanka<br/>
                                    Surfing & Windsurfing in Sri Lanka<br/>
                                    Scuba Diving in Sri Lanka<br/>
                                    Deep-Sea Fishing in Sri lanka<br/>
                                    Canyoning in Sri Lanka<br/>
                                </a>
                            </ul>
                        </div>



                        <div className="column">
                            <ul>
                                <a href="#" >
                                    <h3>Accommodations</h3>
                                    Cinnamon Red Colombo<br/>
                                    The Blue Water<br/>
                                    Hikka Tranz by Cinnamon<br/>

                                    Thaproban Beach House<br/>
                                    Jetwing Lagoon<br/>
                                    The Beach – All Suite Hotel<br/>

                                    Cinnamon Wild Yala<br/>

                                </a>
                            </ul>
                        </div>



                        <div className="column">
                            <ul>
                                <a href="#" >
                                    <h3>Restaurants</h3>
                                    The Station<br/>
                                    Seafood Cove <br/>
                                    Barracuda <br/>

                                    The Beach Wadiya <br/>
                                    La Voile Blanche <br/>
                                    Boat Haus Cafe <br/>
                                    Loon Tao <br/>

                                    The Shore By O! <br/>
                                </a>
                            </ul>
                        </div>



                        <div className="column">
                            <ul>
                                <a href="#" >
                                    <h3>Shopping Malls</h3>
                                    Urban Island<br/>
                                    Stone 'N' String Seafood Cove <br/>
                                    Barefoot<br/>
                                </a>
                            </ul>

                        </div>










                    </div>
                </div>




            </div>



















        )
    }
}
export default BeachSide;