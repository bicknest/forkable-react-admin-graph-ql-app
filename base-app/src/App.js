import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import buildGraphQLProvider from "ra-data-graphql";

import buildQuery from "./buildQuery";
import { PostCreate, PostEdit, PostList } from "../components/admin/posts";

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }
  componentDidMount() {
    buildGraphQLProvider({ buildQuery }).then(dataProvider =>
      this.setState({ dataProvider })
    );
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin dataProvider={dataProvider}>
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
        />
      </Admin>
    );
  }
}

export default App;
