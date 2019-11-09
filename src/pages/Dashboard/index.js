import React from 'react';
import api from '~/services/api';

const DashBoard = () => {
  api.get('appointments');
  return <h1>DASHBOARD</h1>
};

export default DashBoard;
