import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
//Auth
import { Provider } from "react-redux";
import store from "./auth/store";

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={client}>
      <App />
      </QueryClientProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
