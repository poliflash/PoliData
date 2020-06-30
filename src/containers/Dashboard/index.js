import React from "react";
import Formularios from "../../components/Formularios";

const Dashboard = ({ authMail, data }) => {
  return <Formularios authMail={authMail} data={data} />;
};

export default Dashboard;
