import React from 'react'
import { useParams } from 'react-router-dom'

const Hoteldetails = () => {
    const params = useParams()
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
      const fetchData = async () =>{
        const responseObject = await url(params.hotelid)
        setProduct(responseObject)
      }
    fetchData()
    }, [params.hotelid])
  return (
    <div>Hoteldetails name:{product.name} </div>
  )
}

export default Hoteldetails

{/* <Link pass in param inside the function = link to `/hotel/${id}`> */}
// onClick={()=>navigate(`/hotels/${id}`)}
