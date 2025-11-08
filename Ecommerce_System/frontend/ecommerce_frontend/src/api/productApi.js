import axios from "axios";

const BASE_URL = "http://localhost:8080/api/products";

// Fetch all products
export const getAllProducts = async () => {
    try {
        const res = await axios.get(BASE_URL);
        return res.data; // <- this is the array
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};











// import api from "./axios";

// // Fetch all products
// export const getAllProducts = async () => {
//     const response = await api.get("/products");
//     const data = response.data;

//     // ✅ Support both possible response formats
//     if (Array.isArray(data)) {
//         return data;
//     } else if (Array.isArray(data.products)) {
//         return data.products;
//     } else if (Array.isArray(data.content)) {
//         return data.content;
//     } else {
//         console.warn("Unexpected API format:", data);
//         return [];
//     }
// };













// import api from "./axios";

// // Fetch all products
// export const getAllProducts = async () => {
//     const response = await api.get("/products");
//     return response.data;
// };








// import api from "./axios";

// //  Fetch all products
// export const getAllProducts = async () => {
//     const response = await api.get("/products");
//     return response.data;
// };

// //  (Optional) Fetch products by category ID
// export const getProductsByCategory = async (categoryId) => {
//     const response = await api.get(`/products/category/${categoryId}`);
//     return response.data;
// };
