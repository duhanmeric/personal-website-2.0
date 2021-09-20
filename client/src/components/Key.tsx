import CSS from "csstype";
import React from "react";

interface Props {
  keyIcon: string;
  keyLink: string;
  isSocialKey: boolean;
  keyText?: string;
}

const notSocialKey: CSS.Properties = {
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

const notSocialKeyALink: CSS.Properties = {
  borderRadius: "inherit",
  width: "90%",
  textDecoration: "none",
};

const notSocialKeyInnerContainer: CSS.Properties = {
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
          style={notSocialKey}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <a
            href={
              keyText === "hire me"
                ? "http://localhost:3000/contact"
                : `${keyLink}`
            }
            style={notSocialKeyALink}
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="key-container" style={notSocialKeyInnerContainer}>
              <div className="key-text">{keyText}</div>
              <div style={{ transform: "rotate(90deg)" }} className="key-icon">
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
