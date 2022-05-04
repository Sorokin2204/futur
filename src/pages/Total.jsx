import React from 'react';
import clsx from 'clsx';
import TotalContent from '../components/total/TotalContent/TotalContent';
import { Navigate, useLocation, useNavigate } from 'react-router';

const TotalPage = () => {
  const navigate = useNavigate();
  let location = useLocation();

  return <>{localStorage.length === 0 ? <Navigate to="/constructor-start" state={{ from: location }} replace /> : <TotalContent />}</>;
};

export default TotalPage;
