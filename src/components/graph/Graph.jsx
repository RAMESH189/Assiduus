import "./graph.css";
import Account from "../account/Account";
import Invoice from "../invoice/Invoice";
import WatchList from "../watchlist/WatchList";
import Tcf from "../tcf/Tcf";

export default function Graph({ data }) {
  return (
    <div className="graph">
      <div className="graphWrapper">
        <Account randomData={data} />
        <Invoice data={data} />
        <Tcf data={data} />
        <WatchList data={data} />
      </div>
    </div>
  );
}
