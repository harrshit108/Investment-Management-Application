import React from "react";

function OpenAccount() {
  return (
    <div className="Container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-3">Open a Zerodha accoumt</h1>
        <p className="mt-2">
          Modern platforms and apps, &#8377;0 investments, and flat &#8377;20
          intraday and F&O trades.
        </p>
        <button
          className="btn btn-primary p-2 mt-2 mb-5"
          style={{ width: "12%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
