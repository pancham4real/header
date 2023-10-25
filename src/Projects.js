import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projectss">
      <div className=" projectss-left">
        <h2> Projects in progress </h2>
        <div className="buttons">
          <span className="deployement">Deployement in progress</span>
          <span className="build">Build failed</span>
        </div>
        <div className="improve">
          <h3> Improve Code Quality </h3>
        </div>
        <div className="raised">
          <h5> Raised by Manu Arora, 2 hours ago</h5>
        </div>
        <div className="comments">
          <h6 className="h">
            <span className="com">
              <span className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span> 17 Comments </span>
            </span>
            <span className="hors">
              <span className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span> 23 files modified</span>
            </span>
          </h6>
        </div>
      </div>
      <div className="projectss-right">
        <h2> Projects Completed </h2>
        <div className="buttons-right">
          <span className="deployement-right">Deployement in progress</span>
          <span className="build-right">Build failed</span>
        </div>
        <div className="deploy">
          <h3> Deploy Hotfix </h3>
        </div>
        <div className="raised-right">
          <h5> Raised by Manu Arora, 17 hours ago</h5>
        </div>
        <div className="comments">
          <h6 className="h-right">
            <span className="com-right">
              <span className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span> 12 Comments </span>
            </span>
            <span className="hors-right">
              <span className="svg-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span> 2 files modified</span>
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Projects;
