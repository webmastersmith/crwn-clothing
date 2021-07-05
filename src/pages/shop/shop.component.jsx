import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SHOP_DATA,
    };
  }

  render() {
    const { SHOP_DATA: collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollections }) => (
          <CollectionPreview key={id} {...otherCollections} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
