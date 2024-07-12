import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ProudExistence = () => {
  const data = {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Values over Time',
        data: [5, 7, 8, 7, 6, 9, 11, 13, 14, 17, 18],
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sample Line Graph',
      },
    },
  };
  return (
    <div className='w-[100vw] h-[auto] bg-[white] box-border pt-[100px] md:pt-[50px] pb-[30px]' id=''>
      <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-[#3960C3] font-bold text-[24px] md:text-[blue]'>5+ years of Proud Existence</h1>
        <p className='text-[16px] mt-2 md:w-[100%] md:text-[12px]'>Conscientious Technology set its first stone down in 2020 and has been thriving ever since. The company takes great pride in announcing that they've managed to provide top-notch IT service to their clients for 5 years.</p>
      </div>
      <div className='w-[85%] h-[400px] flex items-center justify-center mx-auto'>
        <Line data={data} options={options}/>
      </div>
    </div>
  )
}

export default ProudExistence;

