import React, { useEffect } from 'react';
import clsx from 'clsx';
import ConstructorMainContent from '../components/constructorMain/ConstructorMainContent/ConstructorMainContent';
import { Navigate, useLocation, useNavigate } from 'react-router';
const ConstructorMainPage = () => {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {}, []);

  return <>{localStorage.length === 0 ? <Navigate to="/constructor-start" state={{ from: location }} replace /> : <ConstructorMainContent />}</>;
};

export default ConstructorMainPage;
