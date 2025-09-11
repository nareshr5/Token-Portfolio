import { useState, useEffect } from "react";
import "./styles.css";
import ProductCard from "./ProductCard.js";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const PAGE_SIZE = ;

const Pagination = () => {
  const [products, setproducts] = useState([]);
  const [currentpage, setcurrentpage] = useState(0);

  const totalproducts = products.length;
  const totalpages = Math.ceil(totalproducts / PAGE_SIZE);

  const start = currentpage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();

    console.log(json.products);
    setproducts(json.products);
  };

  const handleclick = (pagenum) => {
    setcurrentpage(pagenum);
  };

  const handlenext = () => {
    setcurrentpage(currentpage + 1);
  };

  const handleprevious = () => {
    setcurrentpage(currentpage - 1);
  };

  return (
    <div>
      <h1>Pagination</h1>

      <div>
        <button
          onClick={handleprevious}
          id="previous"
          disabled={currentpage === 0 ? true : false}
        >
          <FiChevronsLeft />
        </button>
        {[...Array(totalpages).keys()].map((p, index) => (
          <span
            class={index === currentpage ? "selectedpage" : "page"}
            onClick={() => handleclick(index)}
          >
            {index + 1}
          </span>
        ))}{" "}
        <button
          id="next"
          onClick={handlenext}
          disabled={currentpage === totalpages - 1 ? true : false}
        >
          <FiChevronsRight />
        </button>
      </div>

      <div class="container">
        {products.length > 0
          ? products.slice(start, end).map((product) => (
              <div class="product_container" key={product.id}>
                <ProductCard image={product.thumbnail} title={product.title} />
              </div>
            ))
          : "NO Products Found"}
      </div>
    </div>
  );
};
export default Pagination;
