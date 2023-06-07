import Home from "../page/Home";
import {createBrowserRouter} from "react-router-dom";
import PublicRouter from "./publicRouter";
import AuthRouter from "./authRouter";
import Products from "../page/Products";
import ProductsDetail from "../page/ProductsDetail";

const router = createBrowserRouter([
    PublicRouter('/' , <Home/> ,null),
    AuthRouter('/product' , <Products/> , [
        {path:'/product/:id', element: <ProductsDetail/>}
    ]),

]);


export default router;