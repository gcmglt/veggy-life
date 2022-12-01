import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Rights>
        &copy; {new Date().getFullYear()} Giacomo Gualtieri. All rights
        reserved.
      </Rights>
    </div>
  );
};

const Rights = styled.div`
  margin: 3rem 0rem;
  text-align: center;
  color: #93938a;
`;

export default Footer;
