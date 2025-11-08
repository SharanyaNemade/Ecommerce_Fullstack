import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import OrdersList from "./components/OrdersList";
import "./App.css";

const App = () => {
  return (
    <Router>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <NavLink
            to="/"
            style={styles.link}
            end
            activeStyle={styles.activeLink}
          >
            Products
          </NavLink>
          <NavLink
            to="/orders"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Orders
          </NavLink>
        </nav>
      </header>

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/orders" element={<OrdersList />} />
        </Routes>
      </main>
    </Router>
  );
};

const styles = {
  header: {
    padding: "1rem",
    backgroundColor: "#007bff",
    color: "#fff"
  },
  nav: {
    display: "flex",
    gap: "1rem"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold"
  },
  activeLink: {
    textDecoration: "underline"
  },
  main: {
    padding: "2rem"
  }
};

export default App;















// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ProductsList from "./components/ProductsList";
// import OrdersList from "./components/OrdersList";
// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Products</Link>
//         <Link to="/orders">Orders</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<ProductsList />} />
//         <Route path="/orders" element={<OrdersList />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;






