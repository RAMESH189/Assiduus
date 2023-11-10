import React, {useState} from 'react'
import TopBar from '../../components/topbar/TopBar'
import Graph from '../../components/graph/Graph'
import * as d3 from "d3";


export default function Home() {

  const [randomData, setRandomData] = useState([]);

  const generateRandomData = () => {
    const newRandomData = d3.range(6).map(d3.randomInt(1, 400));
    setRandomData(newRandomData);
  };

  return (
    <>
      <TopBar randomise={generateRandomData} />
      <Graph data={randomData} />
    </>
  )
}
