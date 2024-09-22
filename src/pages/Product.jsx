
import axios from "axios";
import { useEffect, useState  } from "react";
import ProductCard from "../Components/ProductCard";
import CategoryChips from "../Components/CategoryChips";
import { Spinner } from "@nextui-org/react";

function Products (){

    const [products, setProducts ] = useState([])
    const [categories, setCategories ] = useState([])
    const [loading , setLoading] = useState(true);
    const [chosenCategory , setChosenCategory] = useState("All");


    useEffect(()=>{
      console.log("Use Effect Call Hogaya")
      const url = chosenCategory === "All" ?
      'https://dummyjson.com/products' :
      `https://dummyjson.com/products/category/${chosenCategory}`
        axios
        .get(url)
        .then((res)=>{ 
        setProducts(res.data.products);
         setLoading(false)
      })
        .catch((err)=> {
         setLoading(false)
     
        });
        },[chosenCategory]);

        useEffect(()=>{
          axios
          .get('https://dummyjson.com/products/categories')
          .then((res)=>{ 
          console.log("Category Response", res)
          setCategories(res.data)
           setLoading(false)
        })
          .catch((err)=> {
           setLoading(false)
       
          });
          },[]);    
    return(
        <div className="container mx-auto">
            {
              loading ? ( 
              <Spinner/>
               ) : ( 

            <div>     
            <div className="flex flex-wrap">
            <CategoryChips
            onClick={()=> setChosenCategory('All')}
            isChosen = {chosenCategory === 'All'}
            category={{
              slug : "All",
              name : "All", 
            }}/>
              {categories.map((category)=> 
              <CategoryChips
              onClick = {()=> setChosenCategory(category.slug)}
              isChosen= {category.slug === chosenCategory}
              category={category} key={category.slug}/>)}
            </div>
            <div className="flex flex-wrap m-4 my-4">
          {products.map((item)=>  <ProductCard  item={item} key={item.id}/>)}
            </div>
            </div>
          ) }</div>
    )
}

export default Products;







