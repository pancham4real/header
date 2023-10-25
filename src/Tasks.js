import React from "react";
import "./Tasks.css";

const Tasks = () => {
  return (
    <div className="maintasks">
      {/* <div className="upper">
        <div className="upper-left">
          <span className="heading">Latest Tasks</span>
          <div className="text">
            A list of all the users in your account including their name, title,
            email and role.
          </div>
        </div>
        <span className="upper-right">
          <span className="right-text"> Add more people </span>
        </span>
      </div> */}
      <div className="upper">
        <div className="heading">Latest Tasks</div>
        <div className="text">
          <span>
            A list of all the users in your account including their name, title,
            email and role.
          </span>
          <span className="right-text"> Add more people </span>
        </div>
        <div>
          <table className="table">
            <tr className="header-row">
              <th>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>

                  <th>Name</th>
                </div>
              </th>
              <span>
                <th>Title</th>
              </span>
              <span>
                <th>Role</th>
              </span>
              <th></th>
            </tr>
            <tr className="row-data">
              <td
                style={{
                  background: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                      color: "blue",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Anom</span>
                </div>
              </td>

              <td>19</td>
              <td>Member</td>
              <td>Edit</td>
            </tr>
            <tr className="row-data">
              <td style={{ background: "white" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                    />
                  </svg>
                  <span> Megha </span>
                </div>
              </td>

              <td>19</td>
              <td>Admin</td>
              <td>Edit</td>
            </tr>
            <tr className="row-data">
              <td
                style={{
                  background: "white",
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                      color: "blue",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Anom</span>
                </div>
              </td>

              <td>19</td>
              <td>Member</td>
              <td>Edit</td>
            </tr>
            <tr className="row-data">
              <td style={{ background: "white" }}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                    />
                  </svg>
                  <span>Megha</span>
                </div>
              </td>

              <td>19</td>
              <td>Admin</td>
              <td>Edit</td>
            </tr>
            <tr className="row-data">
              <td
                style={{
                  background: "white",
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                      color: "blue",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Anom</span>
                </div>
              </td>

              <td>19</td>
              <td>Member</td>
              <td>Edit</td>
            </tr>
            <tr className="row-data">
              <td style={{ background: "white" }}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "8px",
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                    />
                  </svg>
                  <span>Megha</span>
                </div>
              </td>

              <td>19</td>
              <td>Admin</td>
              <td>Edit</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
