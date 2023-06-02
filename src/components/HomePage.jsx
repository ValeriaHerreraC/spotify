import { Songs } from "./Songs";
import { ShowGreeting } from "./ShowGreeting";
import { useData } from "../context/AuthContext";
import { Menu } from "./Menu";
import "../css/homepage.css";

export const HomePage = () => {
  if (loginUrl) {
  }

  const { loginUrl } = useData();
  return (
    <Menu>
      <div className="divpage">
        <div className="principalPag">
          <a href={loginUrl}>
            <div className="userName">
              <img className="userPhoto" src="./public/user.png" />
              <h2 className="login">Log In</h2>
            </div>
          </a>
          <div className="saludo">
            <ShowGreeting />
          </div>
          <Songs/>
        </div>
      </div>
    </Menu>
  );
};
