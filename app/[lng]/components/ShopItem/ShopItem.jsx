import "./ShopItem.css";
import PropTypes from "prop-types";
const ShopItem = ({ title, price, tags }) => (
  <div className="shop_item_article">
    <div className="shop_item-head">
      <div className="shop_item-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="shop_item-dash" />
      <div className="shop_item-price">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {price}
        </p>
      </div>
    </div>
    <div className="shopmenu-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default ShopItem;

ShopItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
