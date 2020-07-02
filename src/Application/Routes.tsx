import React from 'react'

import { Switch, Route } from 'react-router-dom'

import { Posts } from 'Pages/Posts'
import { PostDetails } from 'Pages/PostDetails'

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Posts />
    </Route>
    <Route exact path="/posts">
      <PostDetails />
    </Route>
    <Route path="*" component={() => <p data-testid="not-found-page">not found</p>} />
  </Switch>
)
