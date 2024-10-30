import React from 'react'


function Navbar({ setcategory }) {

    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary "> */}
            <nav class="navbar bg-dark border-bottom navbar-expand-lg p-2" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <span className='bg-light fw-bold text-dark px-2 rounded pb-1'> <span className='text-danger'>News</span><span className='text-primary'>Web</span> </span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="nav-link"  onClick={() => setcategory("science")}>Science</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setcategory("business")}>Business</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setcategory("technology")}>Technology</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setcategory("sports")}>Sports</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setcategory("entertainment")}>Entertainment</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setcategory("technology")}>Technology</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setcategory("health")}>Health</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

