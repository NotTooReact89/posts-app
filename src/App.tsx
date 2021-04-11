import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Loading from "./Components/Loading";
import Posts from "./Containers/Posts";
import PostDetails from "./Containers/PostDetails";
import { DataProvider } from "./Containers/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/postDetails/:id" component={PostDetails} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
