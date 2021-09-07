import Chart from 'react-apexcharts';


const DonutChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Diana Prince', 'Natasha Romanoff', 'Ororo Munroe', 'Harleen Quinzel', 'Jessica Jones']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;