import axios from "axios";
import React from "react";

const HocComponent = (OrginalComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      const fatchProduct = async () => {
        await axios
          .get("https://dummyjson.com/products")
          .then((responce) =>
            this.setState({ data: responce.data["products"] })
          )
          .catch((error) => console.log(error));
      };
      fatchProduct();
    }

    render() {
      console.log(this.state.data);
      return <OrginalComponent productsData={this.state.data} />;
    }
  };
};

export default HocComponent;
