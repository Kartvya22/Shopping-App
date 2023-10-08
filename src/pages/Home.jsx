import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import Categories from "../components/Categories";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
        console.log(data);
      setPosts(data);
      setCategory(data);
    } catch (error) {
      console.log("something went wrong! ");
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  },[]);

  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-6xl">
      <div><Categories category={category} setCategory={setCategory} posts={posts}/></div>
      {loading ? (
        <Spinner/>
      ) : category.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-6xl p-1 mx-auto mr-10 space-y-10 space-x-10 min-h-[80vh]  ">
          {category.map((post) => (
            <Product key={post.id} post={post} className="" />
          ))} 
        </div>
      ) : (
        <div className="flex justify-center items-center mx-auto">  
          <p className="text-3xl font-bold">Data Not Found! </p>
        </div>
      )}
    </div>
  );
}

export default Home;
