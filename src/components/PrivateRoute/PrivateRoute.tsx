import { Outlet } from "react-router-dom"
import Login from "../../pages/Login/Login";

const useAuth = () => {
    const user = { loggedIn: false};
    if(localStorage.getItem("user") === null) {
        user.loggedIn = false;
    }else {
        user.loggedIn = true;
    }
    return user && user.loggedIn;
}

const PrivateRoute = () => {
    const isAuth : any = useAuth();
    return isAuth ? <Outlet /> : <Login/>;
}

export default PrivateRoute