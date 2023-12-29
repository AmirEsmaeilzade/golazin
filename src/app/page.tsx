import HomePage from "../../components/pages/homePage"
import { Get } from "../../utils/api/index"

export default async function Home() {
  const data = await getPageData()
  return (
    <HomePage data={data}/>
  )
}

async function getPageData() {
  const data = await Get('/products')
  return (
    data
  )
}