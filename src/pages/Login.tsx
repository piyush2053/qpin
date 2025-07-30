import React from "react";
import { Button, Card, Input } from "antd";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card title="Login" className="w-full max-w-sm">
        <Input placeholder="Username" className="mb-4" />
        <Input.Password placeholder="Password" className="mb-4" />
        <Button type="primary" block onClick={handleLogin}>
          Login
        </Button>
      </Card>
    </div>
  );
};

export default Login;
