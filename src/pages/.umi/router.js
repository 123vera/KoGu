import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/Animate',
    exact: true,
    component: require('../Animate.js').default,
  },
  {
    path: '/Grid',
    exact: true,
    component: require('../Grid.js').default,
  },
  {
    path: '/Home',
    exact: true,
    component: require('../Home.js').default,
  },
  {
    path: '/Viinet',
    exact: true,
    component: require('../Viinet.js').default,
  },
  {
    path: '/threejs/Axis',
    exact: true,
    component: require('../threejs/Axis.js').default,
  },
  {
    path: '/threejs/Curve',
    exact: true,
    component: require('../threejs/Curve.js').default,
  },
  {
    path: '/threejs/Line',
    exact: true,
    component: require('../threejs/Line.js').default,
  },
  {
    component: () =>
      React.createElement(
        require('/usr/local/lib/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
