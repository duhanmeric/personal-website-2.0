import CSS from "csstype";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  keyIcon: string;
  keyLink: string;
  keyText?: string;
  typeOfKey: string;
}

const hireKey: CSS.Properties = {
  paddingRight: "3px",
  width: "150px",
  height: "49px",
  userSelect: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  borderRadius: "6px",
};

const hireKeyALink: CSS.Properties = {
  borderRadius: "inherit",
  width: "90%",
  textDecoration: "none",
};

const hireKeyInnerContainer: CSS.Properties = {
  width: "90%",
  height: "42px",
  fontSize: "18px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "inherit",
  margin: "0 auto",
  padding: "0 5px",
};

const workKey: CSS.Properties = {
  paddingRight: "3px",
  width: "150px",
  height: "49px",
  userSelect: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  borderRadius: "6px",
};

const workKeyALink: CSS.Properties = {
  borderRadius: "inherit",
  width: "90%",
  textDecoration: "none",
};

const workKeyInnerContainer: CSS.Properties = {
  width: "90%",
  height: "42px",
  fontSize: "18px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "inherit",
  margin: "0 auto",
  padding: "0 5px",
};

const socialKey: CSS.Properties = {
  paddingRight: "3px",
  width: "52px",
  height: "45px",
  userSelect: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  borderRadius: "6px",
};

const socialKeyALink: CSS.Properties = {
  borderRadius: "inherit",
};

const socialKeyInnerContainer: CSS.Properties = {
  width: "40px",
  height: "38px",
  fontSize: "18px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "inherit",
};

const Key: React.FC<Props> = ({ keyIcon, keyLink, typeOfKey, keyText }) => {
  const socialKeyFunc = () => {
    if (typeOfKey === "social") {
      return (
        <div
          className="key"
          style={socialKey}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <a
            href={keyLink}
            style={socialKeyALink}
            target="_blank"
            rel="noreferrer"
          >
            <div className="key-container" style={socialKeyInnerContainer}>
              <div className="key-icon">
                <i className={`${keyIcon}`}></i>
              </div>
            </div>
          </a>
        </div>
      );
    } else if (typeOfKey === "hire") {
      return (
        <div
          className="key"
          style={hireKey}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <NavLink to={keyLink} style={hireKeyALink}>
            <div className="key-container" style={hireKeyInnerContainer}>
              <div className="key-text">{keyText}</div>
              <div className="key-icon" style={{ transform: "rotate(90deg)" }}>
                <i className={`${keyIcon}`}></i>
              </div>
            </div>
          </NavLink>
        </div>
      );
    } else if (typeOfKey === "work") {
      return (
        <div
          className="key"
          style={workKey}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <a
            href={keyLink}
            target="_blank"
            rel="noreferrer"
            style={workKeyALink}
          >
            <div className="key-container" style={workKeyInnerContainer}>
              <div className="key-text">{keyText}</div>
              <div className="key-icon" style={{ transform: "rotate(90deg)" }}>
                <i className={`${keyIcon}`}></i>
              </div>
            </div>
          </a>
        </div>
      );
    } else if (typeOfKey === "contact") {
      return (
        <div
          className="key"
          style={workKey}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <a
            href={keyLink}
            target="_blank"
            rel="noreferrer"
            style={workKeyALink}
          >
            <div className="key-container" style={workKeyInnerContainer}>
              <div className="key-text">{keyText}</div>
              <div className="key-icon" style={{ transform: "rotate(90deg)" }}>
                <i className={`${keyIcon}`}></i>
              </div>
            </div>
          </a>
        </div>
      );
    }
  };

  return <>{socialKeyFunc()}</>;
};

export default Key;
