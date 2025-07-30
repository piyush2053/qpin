import { FaSuitcase, FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";

const FooterNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 w-full mx-auto bg-[#1a1a1a] p-2 flex justify-around rounded-t-xl text-white z-50">
      <span
        onClick={() => navigate("/")}
        className={`text-xl cursor-pointer ${location.pathname === "/" ? "text-pBlue" : ""}`}
      >
        <IoMdHome />
      </span>
      <span
        onClick={() => navigate("/live")}
        className={`text-xl cursor-pointer ${location.pathname === "/live" ? "text-pBlue" : ""}`}
      >
        <FaSuitcase />
      </span>
      <span
        onClick={() => navigate("/profile")}
        className={`text-xl cursor-pointer ${location.pathname === "/profile" ? "text-pBlue" : ""}`}
      >
        <FaUser />
      </span>
    </footer>
  );
};

export default FooterNav;
