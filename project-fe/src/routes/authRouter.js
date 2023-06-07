import Login from "../page/Login";

const AuthRouter = (path, element , children = [], rest) => {
    const isAuthenticate = true;
    return {
        path : isAuthenticate ? path : '/login',
        element : isAuthenticate ? element : <Login/>,
        children : [...children],
        ...rest
    }
}

export default AuthRouter