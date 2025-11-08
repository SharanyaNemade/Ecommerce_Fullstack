import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../api/productApi";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts(); // <- this returns the array now
            console.log("Fetched products:", data); // DEBUG
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (!products || products.length === 0) return <p>No products available</p>;

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1rem"
        }}>
            {products.map(product => (
                <ProductCard key={product.productId} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
