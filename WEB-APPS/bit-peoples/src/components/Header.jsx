import "bootstrap/dist/css/bootstrap.min.css";
import { Link , Outlet} from "react-router-dom";

export const Header = () => {

    const refreshPage = () => {
        window.location.reload(false);
    }
    return (
        <>
        <nav>
            <div className="container-fluid bg-danger">
                <div className="navigation-container d-flex justify-content-between">
                <Link to="/">Bit People</Link>
                <ul className="d-flex ">
                        
                        <li className="list-group-item p-2 ">
                        <Link to="about">About</Link>                        </li>
                        <li className="list-group-item p-2">
                            <a onClick={refreshPage} className="text-decoration-none text-white" href="#">Refresh</a>
                        </li>
                        <li className="list-group-item p-2">
                            <a className="text-decoration-none text-white" href="#">Grid</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <Outlet />
        </>

    )
}