import {Outlet, useNavigate, useParams} from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <>
            <h1>This is Products</h1>
            <Outlet/>
        </>
    )
}

export default Products;