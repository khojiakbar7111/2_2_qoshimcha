import { Route, Routes } from "react-router-dom";
import { PATHS } from "./config/site-path";
import { MainLayouts } from "./layouts/main-layouts/main-layouts";
import { Home } from "./pages/home/home";
function App() {
  return (
    <>
      <Routes>
        <Route path={PATHS.home} element={<MainLayouts />}>
          <Route index element={<Home />} />
        <Route path="*" element={<h1>Xato saytga kirdingiz</h1>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
