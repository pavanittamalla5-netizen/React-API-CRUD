import { Link } from "react-router"

export default function Product() {


    return (
        <>
            <div>
                <h2>Products</h2>

                <Link to="/product/101">Product id 101</Link><br />
                <Link to="/product/102">Product id 102</Link><br />
                <Link to="/product/103">Product id 103</Link><br />
            </div>
        </>
    )
}