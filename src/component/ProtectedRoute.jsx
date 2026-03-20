import useStore from "../store/Store1";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const isLoggedIn = useStore((s) => s.isLoggedIn);

    if(!isLoggedIn) {
        return <Navigate to="/logins" />
    }
    return children;
}
export default ProtectedRoute
