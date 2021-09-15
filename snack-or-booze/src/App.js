import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import {fetchItems, addItem} from "./Api";
import slugify from 'slugify';
import NavBar from "./NavBar";
import Home from "./Home";
import Item from "./Item";
import Menu from "./Menu";

import AddForm from './AddForm';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState([{
    snacks: [],
    drinks: []
  }]);

  useEffect(() => {
    async function getItems() {
      let snacks = await fetchItems("snacks");
      let drinks = await fetchItems("drinks");
      setMenu({ snacks, drinks });
      console.log(menu);
      setIsLoading(false);
    }
    getItems();
  }, []);

  async function createItem(type, { name, description, recipe, serve }) {
    let id = slugify(name, { lower: true });
    let objData = { id, name, description, recipe, serve };
    await addItem(type, objData);
    setMenu(m => ({
      ...m,
      [type]: [...m[type], objData]
    }));
  }

  let { snacks, drinks } = menu;

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/add">
              <AddForm addItem={createItem} />}
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
