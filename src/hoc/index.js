import axios from "axios";
import React from "react";

const HocComponent = (OrginalComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        columns: [
          { key: "firstName", title: "Full Name" },
          { key: "lastName"},
          { key: "image"},
          { key: "email", title: "Email" },
          { key: "birthDate", title: "Birth Date" },
          { key: "domain", title: "Domain" },
          { key: "eyeColor", title: "Eye Color" },
        ],
        data: [],
      };
    }

    componentDidMount() {
      const fatchProduct = async () => {
        await axios
          .get("https://dummyjson.com/users")
          .then((response) => this.setState({ data: response.data["users"] }))
          .catch((error) => console.log(error));
      };
      fatchProduct();
    }

    render() {
      console.log(this.state.data);
      return (
        <OrginalComponent data={this.state.data} columns={this.state.columns} />
      );
    }
  };
};

export default HocComponent;
