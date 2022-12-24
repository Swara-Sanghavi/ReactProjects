import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';

import routes from '../../Routes/routes'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
function Masterlayout(){
    return(
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>

                <div id="layoutSidenav_content">

                    <main>
                        <BrowserRouter>
                            <Routes>
                                {routes.map((route , idx) => {
                                    return(
                                        route.component && (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={(props) => (
                                                    <route.component {...props}/>
                                                )}
                                            />
                                        )
                                    )
                                })}
                            </Routes>
                        </BrowserRouter>
                    </main>

                    <Footer />

                </div>

            </div>
        </div>
    )
}
export default Masterlayout;