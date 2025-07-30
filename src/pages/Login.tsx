import { Button, Input } from "antd";
import { MailOutlined, LockOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo/logo.png';
import { useAuth } from "../contexts/AuthContext.tsx";

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-bg1 text-gray-200 flex flex-col items-center justify-center">
      <img src={logo} alt="logo" className="h-10 mb-2 rounded-full" />
      <h1 className="text-3xl font-bold mb-3">qPin</h1>
      <div className="w-full max-w-xs">
        <Input
          size="large"
          prefix={<MailOutlined />}
          placeholder="Enter your username"
          className="mb-4 rounded-full bg-bg2 text-gray-600 border-gray-700"
        />
        <Input.Password
          size="large"
          prefix={<LockOutlined />}
          placeholder="Enter your password"
          className="mb-6 rounded-full bg-bg2 text-gray-600 border-gray-700"
        />
        <div className="flex justify-end mb-6 text-sm text-gray-400 hover:underline cursor-pointer">
          Need help?
        </div>
        <Button
          type="primary"
          icon={<ArrowRightOutlined />}
          shape="circle"
          size="large"
          onClick={handleLogin}
          className="bg-pBlue float-right"
        />
      </div>
    </div>
  );
};

export default Login;
