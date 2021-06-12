import ChartBar from './ChartBar';
import './Chart.css';

const Chart=(props)=>{
  const Datapointvalues=props.dataPoints.map(dataPoint=>dataPoint.value);
  const Maximumvalue=Math.max(...Datapointvalues);
    return (
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            max={Maximumvalue}
            value={dataPoint.value}
          />
        ))}
      </div>
    );
}


export default Chart;