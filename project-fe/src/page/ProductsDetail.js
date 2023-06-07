import {useNavigate, useParams} from "react-router-dom";

const ProductsDetail = () => {
    const params = useParams();
    console.log(params, 'this is params');

    return (
        <>
            <h1>This is ProductsDetail </h1>
        </>
    )
}

export default ProductsDetail;