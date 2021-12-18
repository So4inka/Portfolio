import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './screens/Home';
import AboutMe from './screens/AboutMe';
import Projects from './screens/Projects';
import ProjectInfo from './screens/ProjectInfo';
import ContactMe from './screens/ContactMe';

function App() {

  const [listItems, setListItems] = useState([])
  const [fetchItems] = useState(false);
  
  useEffect(() => {
    const getListItems = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Table%201`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setListItems(response.data.records);
      console.log(response.data.records);
    };
    getListItems();
  }, [fetchItems]);
  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />


        <Route path="/about-me" component={AboutMe} />

        <Route path="/project/:id">
          <ProjectInfo listItems={listItems}/>
        </Route>

        <Route path='/projects'>
          <Projects listItems={listItems}/>
        </Route>

        <Route path='/contact'>
          <ContactMe />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
