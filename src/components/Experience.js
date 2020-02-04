import React from "react";
import "../App.scss";

function Experience() {
  return (
    <div className="section">
      <div className="section-content " id="experience">
        <div className="experience">
          <h1 style={{ display: "inline-flex" }}> 02. My work experience</h1>
          <hr></hr>
        </div>
        <div id="desktop-only">
          <div className="text">
            <div className="company">
              <h1>
                <a
                  style={{ color: "#2fbfba", cursor: "pointer" }}
                  href="https://tengizchevroil.com/en/home"
                >
                  Tengizchevroil, LLP (TCO)
                </a>
              </h1>
              <p>
                Electrical Control Systems <br></br>(2016 - current)
              </p>
            </div>
            <div className="experience-description">
              <ul className="text" style={{ marginTop: "20px" }}>
                <li>
                  <b style={{ color: "#2fbfba" }}>Delivered results</b> by
                  providing high quality technical support both for TCO Base
                  Business(BB) and Future Grown Project(FGP). Troubleshooting of
                  Electrical Control Systems(ECS) across all Tengiz facilities
                  (KTL, SGP/SGI, offplot) including but not limited to Schneider
                  Electric (SE) SisGateways, SE Quantum/M340 PLCs, Hirshmann
                  network switches.
                </li>
                <li>
                  <b style={{ color: "#2fbfba" }}>Simplified data retrieval </b>
                  from HMI System of Events creating and using Python script.
                  Structured requested data in the most readable and digestible
                  format.{" "}
                </li>
                <li>
                  Conducted Factory Acceptance Tests (FAT) for TCO BB projects
                  (DMC4.1 & KTL RP 1.1). Commissioning and Site Acceptance Tests
                  (SAT).
                </li>
                <li>
                  <b style={{ color: "#2fbfba" }}>
                    Simplified and ensured safety
                  </b>{" "}
                  during SAT process for FGP Fast Load Shedding project by
                  adding a layer of electrical isolation. Created appropriate
                  test procedure.{" "}
                </li>
                <li>
                  <b style={{ color: "#2fbfba" }}>
                    Demonstated Leadership Capabilities
                  </b>{" "}
                  by representing Electrical Control Systems team on weekly
                  management meetings and managing weekly team priorities.{" "}
                </li>
                <li>
                  Developed <b style={{ color: "#2fbfba" }}>Soft Skills</b> of
                  conducting interview sessions with Automation Department new
                  hires.
                </li>
                <li>
                  {" "}
                  <b style={{ color: "#2fbfba" }}>
                    Promoted Safe Work practices
                  </b>{" "}
                  and took role of Behavioral Based Safety (BBS) coordinator for
                  Automation Department. Provided BBS and safety coaching among
                  co-workers.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
