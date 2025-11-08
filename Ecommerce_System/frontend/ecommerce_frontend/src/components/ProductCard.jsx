import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
            <img
                src={product.imageUrl || "https://via.placeholder.com/200"}
                alt={product.name}
                style={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "0.5rem" }}
            />
            <h3>{product.name}</h3>
            <p>{product.description?.substring(0, 60) + (product.description?.length > 60 ? "..." : "")}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Stock:</strong> {product.stock > 0 ? product.stock : "Out of Stock"}</p>
            <button disabled={product.stock === 0} style={{
                padding: "0.5rem 1rem",
                backgroundColor: product.stock > 0 ? "#007bff" : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: product.stock > 0 ? "pointer" : "not-allowed"
            }}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
