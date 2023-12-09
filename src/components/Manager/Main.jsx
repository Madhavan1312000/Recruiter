import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState, useRef, Component } from "react";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,ArcElement} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    title: {
      display: true,
      text: "Our Company",
      font: {
        size: 18,
      }
    },
  },
};

const options2 = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 0.5,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    title: {
      display: true,
      text: "Cient Company",
      font: {
        size: 18,
      }
    },
  },
};

const options3 = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    title: {
      display: true,
      text: "Teams Performance Chart",
      font: {
        size: 18,
      }
    },
  },
};

const Main = () => {

    const [data, setData] = useState({
        labels: [
          "Interview 1",
          "Interview 2",
          "Interview 3",
          "Interview 4",
          "Interview 5",
        ],
        datasets: [
          {
            label: "Contacted",
            data: [10, 20, 30, 40, 50],
            borderColor: "rgb(255, 99, 132,0.7)",
            backgroundColor: "rgba(255, 99, 132, 0.7)",
          },
          {
            label: "Linedup",
            data: [15, 25, 35, 45, 55],
            borderColor: "rgb(53, 162, 235,0.7)",
            backgroundColor: "rgba(53, 162, 235, 0.7)",
          },
          {
            label: "Attended",
            data: [10, 20, 30, 40, 50],
            borderColor: "rgb(237,86,30,0.7)",
            backgroundColor: "rgb(237,86,30,0.7)",
          },
          {
            label: "In-Progress",
            data: [8, 12, 30, 23, 25],
            borderColor: "rgb(79,129,188,0.7)",
            backgroundColor: "rgb(79,129,188,0.7)",
          },
          {
            label: "Offered",
            data: [26, 16, 14, 12, 10],
            borderColor: "rgb(247,150,71,0.7)",
            backgroundColor: "rgb(247,150,71,0.7)",
          },
          {
            label: "Rejected",
            data: [12, 22, 10, 14, 30],
            borderColor: "rgb(119,160,51,0.7)",
            backgroundColor: "rgb(119,160,51,0.7)",
          },
        ],
      });
    
      const [data2, setData2] = useState({
        labels: [
          "Interview 1",
          "Interview 2",
          "Interview 3",
          "Interview 4",
          "Interview 5",
        ],
        datasets: [
          {
            label: "Contacted",
            data: [10, 20, 30, 40, 50],
            borderColor: "rgb(255, 99, 132,0.7)",
            backgroundColor: "rgba(255, 99, 132, 0.7)",
          },
          {
            label: "Linedup",
            data: [15, 25, 35, 45, 55],
            borderColor: "rgb(53, 162, 235,0.7)",
            backgroundColor: "rgba(53, 162, 235, 0.7)",
          },
          {
            label: "Attended",
            data: [10, 20, 30, 40, 50],
            borderColor: "rgb(237,86,30,0.7)",
            backgroundColor: "rgb(237,86,30,0.7)",
          },
          {
            label: "In-Progress",
            data: [8, 12, 30, 23, 25],
            borderColor: "rgb(79,129,188,0.7)",
            backgroundColor: "rgb(79,129,188,0.7)",
          },
          {
            label: "Offered",
            data: [26, 16, 14, 12, 10],
            borderColor: "rgb(247,150,71,0.7)",
            backgroundColor: "rgb(247,150,71,0.7)",
          },
          {
            label: "Rejected",
            data: [12, 22, 10, 14, 30],
            borderColor: "rgb(119,160,51,0.7)",
            backgroundColor: "rgb(119,160,51,0.7)",
          },
          {
            label: "Billing Amount",
            data: [10, 20, 30, 40, 50],
            borderColor: "rgb(240,97,15,0.7)",
            backgroundColor: "rgb(240,97,15,0.7)",
          },
        ],
      });
    
      const[pieData,setPieData]=useState(
        {
          labels: ['Team 1', 'Team 2', 'Team 3'],
          datasets: [
            {
              label: '%',
              data: [12, 19, 13],
              backgroundColor: [
                'rgb(245,174,89,0.7)',
                'rgb(68,185,183,0.7)',
                'rgb(239,68,72,0.7)',
              ],
              borderColor: [
                'rgb(245,174,89)',
                'rgb(68,185,183)',
                'rgb(239,68,72)',
              ],
              borderWidth: 1,
            },
          ],
        }
      )

      const [chartWidth, setChartWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
   <div>
    <Navbar></Navbar>
    <div className='d-flex main-container'>
            <Sidebar></Sidebar>
        <div className="content w-100 bg-white">
        <div className="chart-container" style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: 'auto' }}>
      <Bar data={data} options={options} className="mx-auto" style={{ height: '400px', width: `${chartWidth}px` }} />
    </div>
    <div className="chart-container" style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: 'auto' }}>
      <Bar data={data2} options={options} className="mx-auto" style={{ height: '400px', width: `${chartWidth}px` }} />
    </div>
          <div className="d-flex justify-content-center mt-5">
          <Doughnut data={pieData} options={options3} className="mx-auto" style={{height:'200px'}}/>
          </div>
            </div>
    </div>
   </div>
  )
}

export default Main