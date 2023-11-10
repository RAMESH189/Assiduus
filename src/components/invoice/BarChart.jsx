import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function BarChart({ data }) {
  const svgRef = useRef();

  useEffect(() => {

    d3.select(svgRef.current).selectAll("*").remove();
    // svg container
    const height = 200; 
    const width = 560;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('overflow', 'visible')
      .style('margin-left', '20px')

    // scale
    const xScale = d3.scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, width])
      .padding(0.8);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0])
    
    // axes
    const xAxis = d3.axisBottom(xScale)
      .ticks(data.length);
    const yAxis = d3.axisLeft(yScale)
      .ticks(5);
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height})`)
     svg.append('g')
      .call(yAxis)
    
    // svg data
    svg.selectAll('.bar')
      .data(  data)
      .join('rect')
        .attr('x', (v, i) => xScale(i))
        .attr('y', yScale)
        .attr('width', xScale.bandwidth())
        .attr('height', val => height - yScale(val))
        .attr("fill", 'limegreen');
  }, [data])


    return (
        <div>
            <svg ref={svgRef}></svg>
      </div>
  );
}

export default BarChart;
