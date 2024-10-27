import { NavLink } from "react-router-dom";
import { Sidepanel } from "../components/Sidepanel";

export const MainPage = () => {
  type Temp = {
    isActive: boolean;
  };

  const isNavLinkActive = (props: Temp) => {
    return props.isActive ? "active" : "";
  };

  return (
    <div className="container">
      <Sidepanel />

      <main className="main-content">
        <div className="header">
          <button className="logout-btn">Logout</button>
        </div>

        <section className="greeting-message" id="greeting-message">
          <h2>Welcome to To-Do App!</h2>
          <p>Select a list from the side panel to get started.</p>
        </section>
      </main>
    </div>
  );
};
