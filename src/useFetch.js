import { useState, useEffect } from "react"

const useFetch = (url) => {
     
     const [data, setData] = useState(null)
     const [isPending, setIsPending] = useState(true)
     const [error, setError] = useState(null)

     useEffect(() => {
          fetch(url)
          .then(res => {
               if(res.ok){
                    return res.json()
               }
               else{
                    throw Error("Could not fetch data")
               }
          })
          .then( data => {
               setData(data)
               setIsPending(false)
          })
          .catch(err => {
               console.log(err)
          })

          
     },[url])

     return {
          data,
          isPending,
          error,
     }

}
export default useFetch