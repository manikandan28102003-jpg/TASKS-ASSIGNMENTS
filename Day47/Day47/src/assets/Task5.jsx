import { useParams, useNavigate } from "react-router-dom";

function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Page</h2>
      <p>User ID: {id}</p>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}

export default User;
