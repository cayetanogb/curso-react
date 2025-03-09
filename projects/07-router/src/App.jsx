import { lazy, Suspense } from "react";
import "./App.css";
import { Route } from "./components/Route";
import { Router } from "./router/Router";
import SearchPage from "./pages/Search";
import Page404 from "./pages/404";

const LazyAboutPage = lazy(() => import("./pages/About"));
const LazyHomePage = lazy(() => import("./pages/Home"));

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
