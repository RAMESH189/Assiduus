import StackedBarChart from "./StackedBar";
import "./tcf.css";

export default function Tcf({ data }) {
  return (
    <div className="tcf">
      <div className="tcfWrapper">
        <div className="tcfTop">
          <div className="topLeft">
            <span className="headingTcf">Total cash flow</span>
          </div>
          <div className="topRight">
            <div className="rightItems">
              <div className="item1">
                <span className="colour1"></span>
                <span className="label">In</span>
              </div>
              <div className="item2">
                <span className="colour2"></span>
                <span className="label">Out</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="tcfCenter">
          <StackedBarChart randomData={data} />
        </div>
      </div>
    </div>
  );
}
