import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const settings = {
  errorCount: 3,
};

ReactDOM.render(
    <App errorCount={settings.errorCount} />,
    document.querySelector(`#root`)
);
