import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

const Home = ({ products }) => {
  const [searchTermFilter, setSearchTermFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const matchesSearchTerm = (product, searchTerm) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesCategory = (product, category) => {
    return (
      category === "all" ||
      product.category.toLowerCase() === category.toLowerCase()
    );
  };

  let filteredProducts = products.filter((p) => {
    return (
      matchesSearchTerm(p, searchTermFilter) &&
      matchesCategory(p, categoryFilter)
    );
  });

  return (
    <div className="home">
      <FilterBar
        searchTermFilter={searchTermFilter}
        setSearchTermFilter={setSearchTermFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <div className="product-grid">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
