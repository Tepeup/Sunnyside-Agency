import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  @media (max-width: 800px) {
    display: none;
    margin: 1em;
    li {
      background-color: white;
      border-radius: 0;
      margin: 0.1em;
      height: 2px;
      width: 20px;
      overflow: hidden;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <div>
      <Ul open={open}>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>CONTACT</li>
      </Ul>
    </div>
  );
};

export default RightNav;
