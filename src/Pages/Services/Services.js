import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContext";
import useTitle from "../../Hooks/useTitle";

const Services = () => {
  useTitle("Services");
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Services {user?.displayName}</h2>
    </div>
  );
};

export default Services;
