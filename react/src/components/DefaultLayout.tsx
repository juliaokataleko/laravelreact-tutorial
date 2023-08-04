import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {

    const {user, token}: any = useStateContext();

    if (!token) {
        console.log("Token", token);
        
        return <Navigate to="/login" />;
    }

    const onLogout = (ev: any) => {
        ev.preventDefault();

    }

  return (
    <div id="defaultLayout">

        <aside>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/users">Users</Link>
        </aside>

        <div className="content">
            <header>

                <div>
                    Header
                </div>

                <div>
                    <span>{user.name}</span>
                    <a href="#" onClick={onLogout} className=" btn-logout">Logout</a>
                </div>

            </header>

            <main>
                <Outlet />
            </main>
        </div>

        

    </div>
  )
}
