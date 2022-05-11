import React, { useEffect } from "react";
import { FetchUserDetails } from "../redux/User/UserReducer";
import { connect } from "react-redux";

function UserDetail({ users, fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {users.loading ? (
        <h2>Loading...</h2>
      ) : users.error ? (
        <h2>{users.error}</h2>
      ) : (
        <h2>{users.map(user=><li>{user}</li>)}</h2>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(FetchUserDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
