import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Navbar from '../components/navbar'
import axios from "axios";
import React, { useState, useEffect } from "react";

const HighSchool =()=>{
  const navigate = useNavigate();
  const handleBuy = (data) => {
    let user = Cookies.get('username');
    let Price = data.Price;
    let User_Name  = user;
    let coursename   = data.CourseName;
    let countcourse = 1;
    let newData = {
      User_Name,
      coursename,
      countcourse,
      Price
    };
    axios.post('https://impossible-red-oyster.cyclic.app/Bookings',newData).then((res)=>{
    console.log("abc",res);
    navigate("/Booking");
    })
  
  }; 

  const [news,setNews] = useState([]);

  useEffect(()=>{
    axios.get('https://impossible-red-oyster.cyclic.app/courses').then((res)=>{
      console.log(res.data);
      let itemArr = [];
      let num = res.data.length;  
      let count = res.data.length;
      res.data.map((r)=>{
        if(count<=num/2)itemArr.push(r);
        count--
      })
      setNews(itemArr);
    })
  },[])

return(
<div>
<div className="container">
<div style={{
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "30px"
}}>
  {
    news.map((data,index)=>{

      return (
        <div className="col" key={index}>
          <div className="card" style={{width: "18rem",marginTop: "50px"}}>
            <img src={data.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{data.CourseName}</h5>
              <p className="card-text">{data.Detail}</p>
              <h5 className="card-text">ราคา : {data.Price}</h5>
              <h6 className="card-text">จำนวนคอร์สที่เหลือตอนนี้ : {data.Amout}</h6>
              <button className="btn btn-primary" onClick={()=>{handleBuy(data)}}>จองคอร์สเรียนนี้</button>
            </div>
          </div>
        </div>
      )
    })

  }
  </div>
</div>
</div>
);
};
export default HighSchool