
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { useWixClient } from "@/hooks/useWixClient"
// import { useEffect } from "react"
// import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/lib/wixClientServer"
import { useContext, useEffect } from "react"




const HomePage = async () => {
  const wixClient = await wixClientServer();
  const res = await  wixClient.products.queryProducts().find()
  console.log(res);
  
  
   

  

  // shadha's code 
    

        // try {
        //     const wixClient = await wixClientServer();
        //     const res = await wixClient.products.queryProducts().find();
        //     console.log("Products fetched:", res);
        // } catch (error) {
        //     console.error("Error fetching products:", error);
        // }

// const HomePage = async() => {

//     const wixClient = await wixClientServer()

//     const res =  wixClient.products.queryProducts().find();
//     console.log("prodddddddddddd",res)
//     console.log("summmmmmmmmmmmmmmmmmmmmmmmmmmmma")

        //  const res = await wixClient.products.queryProducts().find();



        //  [ //calling wixcontext
        //   const wixClient = useWixClient()
          
        //  useEffect(()=> {


        //   const getProducts = async () => {
        //     try {
        //       // Ensure wixClient is properly initialized
        //       if (!wixClient) {
        //         throw new Error('Wix client not initialized');
        //       }

        //       // Fetching products from Wix client
        //       const res = await wixClient.products.queryProducts().find();
        //       console.log(res);
        //       return res;
        //     } 
            
        //     catch (error) {
        //       console.error('Error fetching products');
        //     }


        //   };

        //   getProducts();

        //       // //Fetching products from wix client
        //       // const getProducts = async () => {
        //       //   const res = await wixClient.products.queryProducts().find();

        //       //  console.log(res)

        //       // }
        //       // getProducts()


        //     },[wixClient])  ]
        // const wixClient = await wixClientServer();
        // // console.log(wixClient);
        
        // const res  =  wixClient.products.queryProducts.find()
        // console.log(res);
        
            
    return (
      <div className=''>
        <Slider/>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl">Featured Products</h1>
          <ProductList/>
        </div>
        <div className="mt-24 ">
          <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList/>
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl">New Products</h1>
          <ProductList/>
        </div>
      </div>
    )
  }
export default HomePage