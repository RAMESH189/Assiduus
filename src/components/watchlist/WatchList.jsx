
import ChartTable from './ChartTable';
import './watchlist.css'; 

export default function WatchList({data}) {
 return(
    <div className="watchlist">
        <div className="watchlistWrapper">
          <div className="watchlistTop">
            <span className="headingWatchList">Account watchlist</span>
          </div>
          <hr />
        <div className="watchlistCenter">
         <ChartTable tableData={data} />
        </div>
        </div>
      </div>
  )
}
