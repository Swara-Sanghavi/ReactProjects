function Sidebar(){
    return(
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <a className="nav-link" href="/admin/dashboard">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </a>
                <a className="nav-link" href="/admin/add-category">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Add Category
                </a>
                <a className="nav-link" href="/admin/view-category">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    View Category
                </a>

                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProduct" aria-expanded="false" aria-controls="collapseProduct">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                    Products
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>  

                 <div className="collapse" id="collapseProduct" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                        <a href="/admin/add-product"  className="nav-link collapsed">
                            Add Products
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <a className="nav-link collapsed" href="/admin/view-product">
                            View Products
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>                       
                    </nav>
                </div>              
                
                <div className="sb-sidenav-menu-heading">Interface</div>
                <a className="nav-link" href="/admin/profile">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Profile
                </a>
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                    Pages
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                            Authentication
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="login.html">Login</a>
                                <a className="nav-link" href="register.html">Register</a>
                                <a className="nav-link" href="password.html">Forgot Password</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                            Error
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="401.html">401 Page</a>
                                <a className="nav-link" href="404.html">404 Page</a>
                                <a className="nav-link" href="500.html">500 Page</a>
                            </nav>
                        </div>
                    </nav>
                </div>
                <div className="sb-sidenav-menu-heading">Addons</div>
                <a className="nav-link" href="charts.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                    Charts
                </a>
                <a className="nav-link" href="tables.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                    Tables
                </a>
            </div>
        </div>
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
        </div>
    </nav>
    )
}
export default Sidebar;