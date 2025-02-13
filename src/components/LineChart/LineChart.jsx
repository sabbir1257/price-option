import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


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
          { name: "Student 9", math: 79, physics: 81, chemistry: 76 },
          { name: "Student 10", math: 87, physics: 89, chemistry: 82 }
     ];

     return (
          <div>
               <LChart width={800} height={400} data={data}>
                    <XAxis dataKey='name'/>
                    <YAxis/>
                    <Line dataKey='math' stroke='red'></Line>
                    <Line dataKey='physics' stroke='yellow'></Line>
                    <Line dataKey='chemistry' stroke='blue'></Line>
               </LChart>
          </div>
     );
};

export default LineChart;