import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function LineChart({ month, data, randomData }) {
  const svgRef = useRef();
  
  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();
    
    const width = 530;
    const height = 200;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('overflow', 'visible')
      .style('margin-left', '20px')
    
    // scales
    const xScale = d3.scaleLinear()
      .domain([0, month.length - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);
    
    const generateScaledLine1 = d3.line()
       .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveCardinal);
    
    const generateScaledLine2 = d3.line()
       .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveCardinal);
    // axes
    const xAxis = d3.axisBottom(xScale)
      .ticks(month.length)
      .tickFormat(i => i + 1);
    
    const yAxis = d3.axisLeft(yScale)
      .ticks(data.length)
      .tickFormat(i => i + 1);
    
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0,${height})`);
    
    svg.append('g')
      .call(yAxis)
    
    // data for svg
    svg.selectAll('.line1')
      .data([data])
      .join('path')
      .attr('class', 'line1')
      .attr('d', d=> generateScaledLine1(d))
      .attr('fill', 'none')
      .attr('stroke', 'green');
    
    // Create a clip path
    svg.append('clipPath')
      .attr('id', 'clip-path')
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height);

    // Apply the clip path to the lines
    svg.append('g')
      .selectAll('.line1')
      .data([randomData])
      .join('path')
      .attr('class', 'line2')
      .attr('d', d => generateScaledLine2(d))
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('clip-path', 'url(#clip-path)');



    
  },[data, month, randomData])
   
  return (
    <div>
      <svg ref={svgRef}>
      </svg>
    </div>
  );
}

export default LineChart;
