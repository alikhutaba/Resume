import React from "react";
import "./Projects.css";
import pathfindingPic from "../../images/pathfinding.png";
import sortingPic from "../../images/sorting.png";
import test from "../../images/lights.jpeg";
import { SiGithub } from "react-icons/si";

class Projects extends React.Component {
  render() {
    return (
      <div id="Projects" className="projects">
        <div className="container">
          <h1 className="projects-title">Projects</h1>
          <div className="quotes">
            <h5 className="quotes">
              "Most good programmers do programming not because they expect to
              get paid or get adulation by the public, but because it is fun to
              program."
            </h5>
            <h6 className="quotes">Linus Torvalds</h6>
          </div>
          <hr></hr>

          {/* -------Pathfinding Visualizer---------- */}
          <div className="row project">
            <div className="col-sm-4 project-detials">
              <h5>Pathfinding Visualizer</h5>
              <p>
                Built React/ Redux application for visualizing pathfinding
                algorithms.
              </p>
              <p>Implemented Algorithm:</p>
              <ul style={{ listStyleType: "none" }}>
                <li>A* Search.</li>
                <li>Dijkstra’s Algorithm.</li>
                <li>Breadth First Search (BFS).</li>
                <li>Depth First Search (DFS).</li>
              </ul>

              <a
                style={{ color: "#ff6600" }}
                href="https://alikhutaba.github.io/Pathfinding-Viusualizer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
            <div className="col-sm-8 project-pic">
              <a
                href="https://alikhutaba.github.io/Pathfinding-Viusualizer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image">
                  <img
                    src={pathfindingPic}
                    alt="pathfinding project"
                    className="pathfinding-img"
                  ></img>
                  <div className="overlay">
                    <div className="text">Live Demo</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* ----------------- */}

          <hr></hr>

          {/* -------An electronic medical record application for allergies vaccinations---------- */}

          <div className="row project">
            <div className="col-sm-4 project-detials">
              <h5>An EMR application for allergies vaccinations</h5>
              <p>
                Building an application to manage vaccinations processes and
                Tracking treatments for each patient in Meir Hospital.
              </p>
              <p>
                Designing and implementing Client Server application, building a
                RESTful web server in java that connecting to React/ Redux
                client and MySQL relational Database to collect data set for my
                research.
              </p>
            </div>
            <div className="col-sm-8 project-pic">
              <div className="image">
                <img
                  src={test}
                  alt="sorting project"
                  className="pathfinding-img"
                ></img>
                <div className="overlay">
                  <div className="text"></div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------- */}

          <hr></hr>

          {/* -------Sorting Visualizer---------- */}

          <div className="row project">
            <div className="col-sm-4 project-detials">
              <h5>Sorting Visualizer</h5>
              <p>Built React application for visualizing sorting algorithms.</p>
              <p>Implemented Algorithm:</p>
              <ul style={{ listStyleType: "none" }}>
                <li>Selection Sort.</li>
                <li>Bubble Sort.</li>
                <li>Insertion Sort.</li>
                <li>Merge Sort.</li>
                <li>Quick Sort.</li>
                <li>Heap Sort.</li>
              </ul>

              <a
                style={{ color: "#ff6600" }}
                href="https://alikhutaba.github.io/sorting-visualizer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
            <div className="col-sm-8 project-pic">
              <a
                href="https://alikhutaba.github.io/sorting-visualizer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image">
                  <img
                    src={sortingPic}
                    alt="sorting project"
                    className="pathfinding-img"
                  ></img>
                  <div className="overlay">
                    <div className="text">Live Demo</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* ----------------- */}

          <hr></hr>
          <div className="github-title">
            <h5>See more projects</h5>
            <a
              className="github-icon"
              href="https://github.com/alikhutaba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={70}></SiGithub>
            </a>
          </div>
          {/* ----------------- */}
        </div>
      </div>
    );
  }
}

export default Projects;
