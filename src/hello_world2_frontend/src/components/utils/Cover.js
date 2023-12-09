import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Cover = ({ title, login, coverImg }) => {
  if ((title, login, coverImg)) {
    return (
      <div
        className="d-flex justify-content-center flex-column text-center "
        style={{ background: "#000", minHeight: "100vh" }}
      >
        <div className="mt-auto text-light mb-5">
          <div
            className=" ratio ratio-1x1 mx-auto mb-2"
            style={{ maxWidth: "320px" }}
          >
            <img src={coverImg} alt="" />
          </div>
          <h1>{title}</h1>
          <p>Please connect your wallet to continue.</p>
          <Button
            onClick={login}
            variant="outline-light"
            className="rounded-pill px-3 mt-3"
          >
            Connect Wallet
          </Button>
        </div>
        <p className="mt-auto text-secondary">Powered by Internet Computer</p>
      </div>
    );
  }
  return null;
};

Cover.propTypes = {
  title: PropTypes.string,
};

Cover.defaultProps = {
  title: "",
};

export default Cover;
