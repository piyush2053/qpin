import React from "react";
import { Button, Layout } from "antd";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Layout.Header className="flex justify-between items-center bg-blue-700 text-white px-4">
      <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        Betting App
      </div>
      {isAuthenticated && (
        <Button type="primary" danger onClick={() => { logout(); navigate("/login"); }}>
          Logout
        </Button>
      )}
    </Layout.Header>
  );
};

export default Navbar;
