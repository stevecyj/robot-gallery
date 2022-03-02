import React from 'react';

// 建立 interface，定義傳入的資料，interface 就是 props
interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <li>
      <img src={`https://robohash.org/${id}`} alt='robot' />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  );
};

export default Robot;
