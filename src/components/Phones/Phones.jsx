import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Phones = () => {
     const [phones, setPhones] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          /* fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
          .then(res => res.json())
          .then(data => setPhones(data.data)) */

          axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
               .then(data => {
                    const phoneData = data.data.data;
                    const phonesWhitFakeData = phoneData.map(phone => {
                         const obj = {
                              name: phone.phone_name,
                              price: parseInt(phone.slug.split('-')[1])
                         }
                         return obj;
                    })
                    console.log(phonesWhitFakeData)
                    setPhones(phonesWhitFakeData)
                    setLoading(false);
               })
     }, [])
     return (
          <div>
               <div className='text-center'>
                    {loading && <ScaleLoader />}
               </div>
               <BarChart width={600} height={400} data={phones}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
               </BarChart>
          </div>
     );
};

export default Phones;