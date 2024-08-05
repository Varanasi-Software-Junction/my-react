import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from './useToken';

function Logout() {
  const { clearToken } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    clearToken();
    navigate('/login'); // Redirect to the login page
  }, [clearToken, navigate]);

  return null; // Render nothing, just perform the side-effect
}

export default Logout;
