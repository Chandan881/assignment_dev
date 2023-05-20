import React , { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom';
import "./DetailPage.css"

const DetailPage = () => {

    const [uriData, setUriData] = useState([])
    const [individualData, setIndividualData] = useState(null)


    const {id} = useParams();
    console.log(id);

    async function fetchDatas() {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const data = await resp.json();
        setUriData(data);
      }

      console.log(uriData);
  
      useEffect(()=>{
        fetchDatas()
      },[])




      async function fetchIndividualUsers() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        console.log(data);
        setIndividualData(data);
      }

      useEffect(()=>{
        fetchIndividualUsers()
      },[])

      

  return (
    <div className='containers'>
      <div className='in_main'>
         <div className='details'>
             <h2>{ individualData && individualData.name}</h2>
             <h4>{ individualData && individualData.email}</h4>
             <p>{ individualData && individualData.phone}</p>
         </div>
         <div className='details_table'>
         <table>
         <thead>
           <tr>
             <th>Post ID</th>
             <th>ID</th>
             
             <th>Email</th>
             <th>Name</th>
             <th>Body</th>
           </tr>
         </thead>
         <tbody>
           {
            uriData.map((el, id) => {
               return (
                 <tr key={id}>
                   <td>{el.postId}</td>
                   <td>{el.id}</td>
                   <td>{el.email}</td>
                   <td>{el.name}</td>
                   <td>{el.body}</td>
                 </tr>
               );
             })}
         </tbody>
       </table>
         </div>
      </div>
    </div>
  )
}

export default DetailPage