import React from "react";
import { Button, Layout } from "antd";
import { useAuth } from "../contexts/AuthContext.tsx";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo/logo.png'
import { BiLogOut } from "react-icons/bi";

const Navbar: any = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Layout.Header className="flex justify-between items-center bg-bg1 text-white px-2 shadow-gray-800 shadow-sm">
      <div className="flex flex-grow text-xl font-bold cursor-pointer gap-2" onClick={() => navigate("/")}>
        <img alt='logo' src={logo} className="h-6 rounded-full"/>
        <p>qPin</p>
        <p className="bg-bg2 border-none text-white text-xs my-auto p-2 rounded-lg" onClick={() => { logout(); navigate("/login"); }}>
          Opinion Trading
        </p>
      </div>
      {isAuthenticated && (
        <Button className="bg-bg2 border-none text-white" onClick={() => { logout(); navigate("/login"); }}>
          <BiLogOut/>
        </Button>
      )}
    </Layout.Header>
  );
};

export default Navbar;
