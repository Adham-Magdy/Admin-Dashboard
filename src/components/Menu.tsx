import { Link } from "react-router-dom";
import "../styles/menu.scss";
import { menu } from "../constants/data";
const Menu = () => {
  return (
    <div className="menu">
      {/* First item */}

      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title.toUpperCase()}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="list-item" key={listItem.id}>
              <img src={listItem.icon} alt={listItem.title} />
              <span className="itemTittle">{listItem.title}</span>
            </Link>
          ))}
          <hr className="breaker"/>

        </div>

      ))}
    </div>
  );
};

export default Menu;
