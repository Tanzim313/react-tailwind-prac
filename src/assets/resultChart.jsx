import React from "react";
import { LineChart,Line,XAxis, YAxis } from "recharts";

const resultData=[
    { "id": 1, "name": "Rahim", "physics": 85, "math": 92, "chemistry": 58 },
    { "id": 2, "name": "Karim", "physics": 88, "math": 49, "chemistry": 83 },
    { "id": 3, "name": "Hasan", "physics": 96, "math": 85, "chemistry": 80 },
    { "id": 4, "name": "Shamim", "physics": 90, "math": 88, "chemistry": 85 },
    { "id": 5, "name": "Monir", "physics": 42, "math": 94, "chemistry": 91 },
    { "id": 6, "name": "Sumi", "physics": 78, "math": 60, "chemistry": 69 },
    { "id": 7, "name": "Mita", "physics": 82, "math": 67, "chemistry": 55 },
    { "id": 8, "name": "Jamil", "physics": 89, "math": 90, "chemistry": 84 },
    { "id": 9, "name": "Rupa", "physics": 85, "math": 87, "chemistry": 78 },
    { "id": 10, "name": "Nabil", "physics": 91, "math": 33, "chemistry": 66 },
    { "id": 11, "name": "Alam", "physics": 79, "math": 84, "chemistry": 83 },
    { "id": 12, "name": "Akter", "physics": 88, "math": 90, "chemistry": 89 },
    { "id": 13, "name": "Fariha", "physics": 80, "math": 85, "chemistry": 82 },
    { "id": 14, "name": "Omar", "physics": 91, "math": 26, "chemistry": 88 },
    { "id": 15, "name": "Tariq", "physics": 75, "math": 78, "chemistry": 40 },
    { "id": 16, "name": "Zara", "physics": 93, "math": 91, "chemistry": 95 },
    { "id": 17, "name": "Babu", "physics": 84, "math": 62, "chemistry": 99 },
    { "id": 18, "name": "Fahim", "physics": 87, "math": 85, "chemistry": 79 },
    { "id": 19, "name": "Nashit", "physics": 79, "math": 84, "chemistry": 81 },
    { "id": 20, "name": "Kazi", "physics": 90, "math": 62, "chemistry": 88 }
  ]




const ResultChart = () =>{
    return(
       <div className="flex justify-center mr-5 ml-5 mt-10 border-2">
        <LineChart width={800} height={500} data={resultData} className="mr-4">
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line dataKey="math" stroke="purple"></Line>
            <Line dataKey="physics"></Line>
            <Line dataKey="chemistry" stroke="white"></Line>

        </LineChart>
       </div>
    )
}

export default ResultChart;