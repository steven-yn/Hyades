import React from "react";
import MainPage from "./pages/MainPage";
import CrewPage from "./pages/CrewPage";
import NoticePage from "./pages/NoticePage";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/notice" element={<NoticePage />} />
        {/*<Route path="/project" element={<ProjectListPage />} /> */}
        {/*<Route path="/project/:projectId" element={<ProjectPage />} />*/}
        {/*<Route path="/admin" element={<AdminPage />} />*/}
        {/*<Route path="/login" element={<LoginPage />} />*/}
        {/*<Route path="/register" element={<RegisterPage />} >*/}
        {/*<Route path="/@:username/profile" element={<ProfilePage />} />*/}
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
