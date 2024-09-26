import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../../service/allAPI'

function WatchHistory() {

  const [history,setHistory]=useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory = async()=>{
    const result = await getHistoryAPI()
    console.log(result);
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("Api Failed");
      console.log(result.message);
    }
  } 
    // console.log(history);
  
  const removeHistory = async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }


  return (
    <> 
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h2>Watch-History</h2>
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '30px' }}>Back To Home
        <i class="fa-solid fa-arrow-rotate-left fa-beat-fade"></i></Link>
      </div>
      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Url</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>


          {
            history?.length>0?history.map((video,index)=>(
              <tr>
            <td>{index+1}</td>
            <td>{video.caption}</td>
            <td><a href={video.link} target='_blank'>{video.link}</a></td>
            <td>{video.timeStamp}</td>
            <td><button onClick={()=>removeHistory(video?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
            )): <p className='text-danger'>Nothing to Display</p>
          }

        </tbody>
      </table>
    </>
  )
}

export default WatchHistory