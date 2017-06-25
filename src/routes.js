/*import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';


import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

import Home from './routes/Home';
import Home2 from './routes/Home2';

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/home2' component={Home2} />
  </Route>
);

export default routes;
*/



// ...some lines skipped...
import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Pages */
import AllTodos from './routes/AllTodos';
import EditTodo from './routes/EditTodo';


class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

export default (
  <Route path='/' component={App}>
	<IndexRoute component={AllTodos} />
	<Route path='/todo/edit/:id' component={EditTodo} />
  </Route>
);