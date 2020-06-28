import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Posts } from 'Pages/Posts'
import { PostDetails } from 'Pages/PostDetails'

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
      <Route exact path="/posts">
        <PostDetails />
      </Route>
      <Route path="*" component={() => <p>not found</p>} />
    </Switch>
  </Router>
)
