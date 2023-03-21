import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Home/Home.css'


export default function Home() {
const [news, setNews] = useState([])
  async function getData(){
    let data= await axios.get(`http://3.65.32.166/api/v1/news#show`)
    setNews(data.data.data);
  // console.log(data.data.data);
  }
  
  
  useEffect(() => {
    getData(setNews)
  }, [])
  
    console.log(news);
  return (
   <>
<section className='mt-5  bg-dark'>
     {/* last news */}
     <div className="container ">
    <div className="row gy-5 gx-5 mb-5">
    
    {news.map((item , index)=>
        <div key={index} className="col-md-3">
          
          <div className="item position-relative">
            {item.attributes.media_type == "video"? 
            <video style={{ width: 400, height: 300 }}  controls className='w-100 ' src={`${item.attributes.media_url}`}></video>
            :
            <img style={{ width: 400, height: 300 }} className="w-100"  src={`${item.attributes.media_url}`} alt="" />
            }
          </div>
          
        </div>
      )}

    </div>
   </div>


  {/* About Us */}
    <div className="aboutUs container-fluid d-flex justify-content-center align-items-center flex-column ">
    <div className="text  w-50 ms-auto me-5 text-white ">
      <h2 className='fw-bolder'>About US</h2>
      <p className='fw-bolder text-muted'>There are many variations of passag es of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
    </div>
    </div>
</section>
   </>
  )
}
