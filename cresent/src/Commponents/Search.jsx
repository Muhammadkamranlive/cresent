import React from "react";

export default function Search() {
  return (
    <div>
      <div className="bg-primary-dark overflow-hidden">
        <div className="container position-relative content-space-1">
          <div className="w-lg-75 mx-lg-auto">
            <div className="input-card">
              <div className="input-card-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for answers"
                  aria-label="Search for answers"
                />
              </div>
              <button type="button" className="btn btn-primary btn-icon">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>

          <div
            className="position-absolute"
            style={({ left: "-6rem !important" }, { top: "-6rem" })}
          >
            <img
              src="/svg/shape-1-soft-light.svg"
              alt="left SVG"
              //   width="500"
              style={{ width: "500px" }}
            />
          </div>
          <div
            className="position-absolute bottom"
            style={({ bottom: "-6rem" }, { right: "-7rem" })}
          >
            <img
              src="/svg/shape-1-soft-light.svg"
              alt="right SVG"
              // width="250"
              style={{ width: "250px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
