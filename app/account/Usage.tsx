'use client';

import { Bar } from 'react-chartjs-2';
import { CategoryScale, Chart, registerables } from "chart.js";


Chart.register(...registerables);
export default function Usage({ tier, calls, count}: {tier: any, calls: any[], count: number}) {
    const { name, messages_limit } = tier;

  // Create an object to store the count of events per day
  const dailyCounts = {};
  const labels = [];
  const lastDate = new Date();
  const firstDate = new Date();
  firstDate.setDate(lastDate.getDate() - 30);

  for (let d = firstDate; d <= lastDate; d.setDate(d.getDate() + 1)) {
    const day = d.getDate().toString();
    labels.push(day);
    dailyCounts[day] = 0; // Default to 0 for days without API calls
  }

  // Add the counts from the logs
  calls.forEach(call => {
    const date = new Date(call.created_at);
    const day = date.getDate().toString();
    if (dailyCounts[day] !== undefined) {
      dailyCounts[day] += 1;
    }
  });

  const dataPoints = labels.map(label => dailyCounts[label]);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'API Calls',
        data: dataPoints,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ]
  };
    
    return (
        <div className='relative flex flex-col gap-4'>
            <h1 className='text-3xl font-semibold tracking-wide text-white'>Usage</h1>
            <div className='w-full border-2 rounded-lg border-gray-500 flex flex-col gap-2 p-[10px]'>
                <h1 className="text-white text-sm tracking-wide font-medium">You've made <span className="font-semibold p-[4px] bg-gray-800 rounded-md border border-gray-700">{count}</span> calls in the last month.</h1>
                <h1 className="text-white text-sm tracking-wide font-medium">The message limit for users on the {name} tier is <span className="font-semibold p-[4px] bg-gray-800 rounded-md border border-gray-700">{messages_limit}</span> per month.</h1>
                <div className='h-[200px] w-full flex'>
                    <Bar data={chartData} options={{maintainAspectRatio: false}} />
                </div>
            </div>
        </div>
    )
}