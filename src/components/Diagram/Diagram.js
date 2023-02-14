import "./Diagram.css";
import DiagramBar from "./DiagramBar";
const Diagram = (props) => {
  const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value);
  const maxMonthCost = Math.max(...dataSetsValues);
  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxNum={maxMonthCost}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};
export default Diagram;
