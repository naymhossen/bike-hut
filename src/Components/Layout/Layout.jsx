import { Outlet } from "react-router-dom";
import Header from "./Header";


const Layout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header />
            <div className="mt-8">
            <Outlet />
            </div>
        </div>
    );
};

export default Layout;