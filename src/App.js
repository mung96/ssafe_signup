import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import { GlobalHeader } from "./components/common/globalheader/GlobalHeader";

function App() {
  return <>
    <GlobalHeader />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  </>;
}

export default App;
