import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = props => {
    const dataPointsValues = props.dataPointsMonth.map(item => item.value); //generate array of values
    const totalMax = Math.max(...dataPointsValues); 

    return (
        <div className="chart">
            {props.dataPointsMonth.map(dataPoint => {
                return <ChartBar 
                            key={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={totalMax}
                            label={dataPoint.label}
                        />
            })}
        </div>
    );
}

export default Chart;