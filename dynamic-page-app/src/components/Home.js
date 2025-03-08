import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a dynamic React application.</p>
      <p>Check out the <Link to="https://mms.businesswire.com/media/20241017796218/en/2275854/22/Wipro_Logo.jpg">first post</Link> or <Link to="https://media.licdn.com/dms/image/v2/D560BAQFNcV9nzdPCdQ/company-logo_200_200/company-logo_200_200/0/1664264570611/techademy_ulxp_logo?e=2147483647&v=beta&t=AZajCa2cNqbH--RqWSP3T5d-Zpl_wGq3Cvr31OFsr38">second post</Link>.</p>
    </div>
  );
};

export default Home;