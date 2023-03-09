import { UserInfoProps } from "../util/types";

const BasicType = ({
  userInfo: {
    profile: {
      name: { first__name, last__name },
      age,
      languages,
      phone__number,
      photo__URL,
    },
  },
}: UserInfoProps) => {
  return (
    <>
      <div>
        <p>
          <strong>child</strong> This components all about built in basic type
          in react + typescript 🚀
        </p>
        <h1>User info</h1>
        <div>
          <ul>
            <li
              style={{
                display: "flex",
                border: "2px solid black",
                borderRadius: "15px",
                fontFamily: "arial",
              }}
            >
              <img
                style={{
                  width: "5.5rem",
                  height: "5.5rem",
                  borderRadius: "15px",
                }}
                src={photo__URL}
                alt="github__profile"
              />
              <p
                style={{
                  fontSize: "1.5rem",
                }}
              >
                {first__name} {last__name}
              </p>{" "}
              <p
                style={{
                  fontSize: "1.5rem",
                }}
              >
                {phone__number}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                }}
              >
                Age: {age}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                }}
              >
                Able to speak:
                {languages.map((language, i) => (
                  <span key={i}>{language}</span>
                ))}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BasicType;
