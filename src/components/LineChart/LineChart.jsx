import React from 'react';
import { Bar, BarChart, CartesianGrid, Label, LabelList, LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {

     const data = [
          { name: "Student 1", math: 78, physics: 82, chemistry: 75 },
          { name: "Student 2", math: 85, physics: 88, chemistry: 80 },
          { name: "Student 3", math: 90, physics: 91, chemistry: 85 },
          { name: "Student 4", math: 76, physics: 79, chemistry: 72 },
          { name: "Student 5", math: 92, physics: 94, chemistry: 89 },
          { name: "Student 6", math: 88, physics: 86, chemistry: 83 },
          { name: "Student 7", math: 81, physics: 84, chemistry: 78 },
          { name: "Student 8", math: 95, physics: 97, chemistry: 93 },
          { name: "Student 9", math: 87, physics: 89, chemistry: 82 }
     ];

     return (
          <div className='justify-between md:flex'>
               <div>
                    <LChart width={800} height={400} data={data}>
                         <XAxis dataKey='name' />
                         <YAxis />
                         <Line dataKey='math' stroke='red'></Line>
                         <Line dataKey='physics' stroke='yellow'></Line>
                         <Line dataKey='chemistry' stroke='blue'></Line>
                    </LChart>
               </div>
               <div>
                    <BarChart width={800} height={400} data={data} >
                         <CartesianGrid strokeDasharray="3 3" />
                         <XAxis dataKey="name">
                         </XAxis>
                         <YAxis />
                         <Bar dataKey="math" fill="#8884d8">
                              <LabelList dataKey="math" position="top"/>
                         </Bar>
                         <Bar dataKey="physics" fill="#82ca9d">
                              <LabelList dataKey="physics" position="top" />
                         </Bar>
                         <Bar dataKey="chemistry" fill="#413ea0">
                              <LabelList dataKey="chemistry" position="top" />
                         </Bar>
                    </BarChart>
               </div>
          </div>
     );
};

export default LineChart;