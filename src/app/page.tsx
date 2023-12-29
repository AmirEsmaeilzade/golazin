import HomePage from "../../components/pages/homePage"
import axios from "axios";

export default async function Home() {
  const data = await getPageData()
  console.log(data)
  return (
    <HomePage data={data}/>
  )
}

async function getPageData() {
  const data = await axios.get('https://fakestoreapi.com/products')
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