import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Navbar from "./components/Navbar.tsx";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout className="min-h-screen">
          <Navbar />
          <Layout.Content className="p-4">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Layout.Content>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
