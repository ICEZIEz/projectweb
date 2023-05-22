import Cookies from 'js-cookie';
import axios from "axios";
import Navbar from '../components/navbar'
import React, { useState, useEffect } from "react";

const Booking =()=>{

    const [data, setData] = useState([]);
    const [trigger,setTrigger] = useState(true);
    useEffect(()=>{
        axios.get('https://impossible-red-oyster.cyclic.app/booking').then((res)=>{
            setData(res.data);
        })
    },[trigger])

    const handleDelete = (data) => {
        axios.delete(`https://impossible-red-oyster.cyclic.app/delete/${data.Booking_ID}`).then((res)=>{
            alert('delete success');
            setTrigger(!trigger);
        })
    }

    return (
        <div>
           <table className="table">
            <thead>
              <tr>
                  <th style={{height: '50px'}}>ID</th>
                  <th style={{height: '50px'}}>User name</th>
                  <th style={{height: '50px'}}>Course name</th>
                  <th style={{height: '50px'}}>Price</th>
                  <th style={{height: '50px'}}></th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj,index) => {

                return (
                  <tr key={index}>
                    <td style={{backgroundColor: 'white'}}>
                        {obj.Booking_ID}
                    </td>
                    <td style={{backgroundColor: 'white'}}>
                        {obj.User_Name}
                    </td>
                    <td style={{backgroundColor: 'white'}}>{obj.coursename}</td>
                    <td style={{backgroundColor: 'white'}}>{obj.Price}</td>
                    <td style={{backgroundColor: 'white'}}>
                        <button style={{backgroundColor: 'red'}} onClick={()=>{handleDelete(obj)}} >
                            Delete
                        </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      
}

export default Booking