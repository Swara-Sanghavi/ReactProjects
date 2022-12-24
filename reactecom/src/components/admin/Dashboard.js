import Navbar from '../../layouts/admin/Navbar';
import Sidebar from '../../layouts/admin/Sidebar';
import Footer from '../../layouts/admin/Footer';

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';

import routes from '../../Routes/routes'
function Dashboard(){
    return(
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>

                <div id="layoutSidenav_content">

                    <main>
                       <h2>I Am Dashboard</h2>
                    </main>

                    <Footer />

                </div>

            </div>
        </div>
    )
}
export default Dashboard;