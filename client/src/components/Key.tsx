import CSS from "csstype";
import React from "react";

interface Props {
  keyIcon: string;
  keyLink: string;
  isSocialKey: boolean;
  keyText?: string;
}

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

const keyALink: CSS.Properties = {
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

const Key: React.FC<Props> = ({ keyIcon, keyLink, isSocialKey, keyText }) => {
  return (
    <>
      {isSocialKey ? (
        <div
          className="key"
          style={socialKey}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <a href={keyLink} style={keyALink} target="_blank" rel="noreferrer">
            <div className="key-container" style={socialKeyInnerContainer}>
              <div className="key-icon">
                <i className={`${keyIcon}`}></i>
              </div>
            </div>
          </a>
        </div>
      ) : (
        <div
          className="key"
          style={socialKey}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <a href={keyLink} style={keyALink} target="_blank" rel="noreferrer">
            <div className="key-container" style={socialKeyInnerContainer}>
              <div className="key-icon">
                <i className={`${keyIcon}`}></i>
              </div>
            </div>
          </a>
        </div>
      )}
    </>
  );
};

export default Key;
