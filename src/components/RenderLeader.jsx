/* eslint-disable react/prop-types */
import { Media } from "reactstrap";
const RenderLeader = ({ leader }) => {
  return (
    <Media style={{ display: "flex", gap: "40px", marginBottom: "30px" }}>
      <Media left>
        <Media
          object
          src={leader.img}
          alt="Generic placeholder image"
          style={{ width: "100px" }}
        />
      </Media>
      <Media body>
        <Media heading>{leader.name}</Media>
        {leader.description}
      </Media>
    </Media>
  );
};

export default RenderLeader;
