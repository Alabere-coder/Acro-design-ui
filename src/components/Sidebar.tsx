import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  return <div>Sidebar</div>;
};

export default Sidebar;
