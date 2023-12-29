import HomePage from "../../components/pages/homePage"
import axios from "axios";

export default async function Home() {
  const products = await getPageData()
  console.log(products)
  return (
    <HomePage products={products}/>
  )
}

async function getPageData() {
  const data = axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    // handle success
    console.log(response);
    return response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  return (
    data
  )
}