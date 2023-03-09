import { UsersDBType } from "../util/types";

const ArrayObject = ({ users }: UsersDBType) => {
  return (
    <div className="container">
      {users.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              border: "2px solid black",
              margin: "5px",
            }}
            className="card"
          >
            <img
              src={user.profile.photoURL}
              alt={`${user.profile.firstName} picture`}
              title={`${user.profile.firstName} picture`}
            />
            <div
              style={{
                border: "2px solid black",
              }}
              className="card__body"
            >
              <p>
                {user.profile.firstName} {user.profile.lastName}
                <sup
                  style={{
                    background: "green",
                    color: "white",
                    borderRadius: "100%",
                    marginLeft: "5px",
                  }}
                >
                  {user.profile.age}
                </sup>
              </p>

              <p>{user.profile.country}</p>
              <p>{user.profile.phone_number}</p>
              <p>{user.profile.hobby}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArrayObject;
