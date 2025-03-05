import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DashboardLayout from "./components/layout/DashboardLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
