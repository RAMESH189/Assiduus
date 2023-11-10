import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = [
  { label: "Augest", stack1: 20, stack2: 30 },
  { label: "September", stack1: 40, stack2: 10 },
  { label: "October", stack1: 50, stack2: 20 },
  { label: "November", stack1: 15, stack2: 30 },
  { label: "December", stack1: 60, stack2: 25 },
];

const StackedBarChart = ({ randomData }) => {
  const chartRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 570 - margin.left - margin.right;
    const height = 250 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const keys = Object.keys(data[0]).slice(1);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.8);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d3.sum(keys, (key) => d[key]))])
      .nice()
      .range([height, 0]);

    const color = d3
      .scaleOrdinal()
      .domain(keys)
      .range(["greenyellow", "limegreen"]);

    svg
      .append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter()
      .append("g")
      .attr("fill", (d) => color(d.key))
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.data.label))
      .attr("y", (d) => y(d[1]))
      .attr("height", (d) => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth());

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y).ticks(null, "s"));
  }, [chartRef]);

  return <div ref={chartRef} />;
};

export default StackedBarChart;
