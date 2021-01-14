import React from "react";
import pathfindingPic from "../../images/pathfinding.png";
import sortingPic from "../../images/sorting.png";
import finalDegreePic from "../../images/ERM.png";
import Project from "../../Components/ProjectCard/Project";
import Icon from "../../Components/Icon/Icon";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";



export default function Projects() {
  return (
    <div id="Projects" className="section">
      <div className="container">

        <SectionTitle title="Projects" quotes={projectsQuote} quotesAuthor={projectsQuoteAuthor}></SectionTitle>

        <Project name="Pathfinding Visualizer" details={pathfinding} projectLink="https://alikhutaba.github.io/Pathfinding-Viusualizer/" pic={pathfindingPic}></Project>
        <hr></hr>

        <Project name="An EMR application for allergies vaccinations" details={EMR} pic={finalDegreePic}></Project>
        <hr></hr>

        <Project name="Sorting Visualizer" details={sorting} projectLink="https://alikhutaba.github.io/sorting-visualizer/" pic={sortingPic}></Project>
        <hr></hr>

        <div style={{ textAlign: "center" }}>
          <h5>See more projects</h5>
          <Icon myClassName="github" myHref="https://github.com/alikhutaba"></Icon>
        </div>


      </div>
    </div >
  );
}





const pathfinding = [
  "Built React/ Redux application for visualizing pathfinding algorithms."
  , "Implemented Algorithm:"
  , "A* Search."
  , "Dijkstra’s Algorithm."
  , "Breadth First Search (BFS)."
  , "Depth First Search (DFS)."
]
const EMR = [
  "DSS for managing allergic vaccination processes and tracking treatments for patients in Meir hospital, that will reduce more than 90 % of human errors."
  , "Designing and implementing a Client-Server application, Using Java to build a REST web server that connects to a React client and a MySQL database."
]


const sorting = [
  "Built React application for visualizing sorting algorithms."
  , "Implemented Algorithm:"
  , "Selection Sort, Bubble Sort."
  , "Insertion Sort, Merge Sort."
  , "Quick Sort, Heap Sort."
]
// const sorting = [
//   "Built React application for visualizing sorting algorithms."
//   , "Implemented Algorithm:"
//   , "Selection Sort."
//   , "Bubble Sort."
//   , "Insertion Sort."
//   , "Merge Sort."
//   , "Quick Sort."
//   , "Heap Sort."
// ]

const projectsQuote = "\"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.\""
const projectsQuoteAuthor = "Linus Torvalds"
