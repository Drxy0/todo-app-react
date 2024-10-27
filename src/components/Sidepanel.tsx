import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getAllLists, ListType } from "../services/listsService";

export const Sidepanel = () => {
  type Temp = {
    isActive: boolean;
  };

  const isNavLinkActive = (props: Temp) => {
    return props.isActive ? "active" : "";
  };

  const [lists, setLists] = useState<ListType[]>([]);

  useEffect(() => {
    getAllLists().then((result) => setLists(result));
  }, []);

  return (
    <aside className="side-panel">
      <h2>To-Do Lists</h2>
      <ul className="todo-lists">
        {lists.map((list) => (
          <li key={list.id}>
            <NavLink className={isNavLinkActive} to={"/list/" + list.id}>
              {list.name}
            </NavLink>
            <span>({list.numberOfActiveTasks})</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};
