import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routesConfig, { Menu, MenuBase } from './config';
import DocumentTitle from 'react-document-title';
import queryString from 'query-string';

const title = document.title;
const CRouter = () => {
    const iterteMenu = (r) => {
        const route = (r) => {
            const Component = r.component;
            const params = {
                key: r.route || r.key,
                exact: true,
                path: r.route || r.key,
                render: props => {
                    // 重新包装组件
                    const reg = /\?\S*/g;
                    // 匹配?及其以后字符串
                    const queryParams = window.location.search.match(reg);
                    // 去除?的参数
                    const { params } = props.match;
                    Object.keys(params).forEach(key => {
                        params[key] = params[key] && params[key].replace(reg, '');
                    });
                    props.match.params = { ...params };
                    const merge = {
                        ...props,
                        query: queryParams ? queryString.parse(queryParams[0]) : {},
                    };
                    const wrappedComponent = (
                        <DocumentTitle title={ r.title || title }>
                            <Component { ...merge } />
                        </DocumentTitle>
                    );
                    return wrappedComponent;
                },
            };
            return <Route { ...params } />;
        };

        const subRoute = (r) => r.subs && r.subs.map((subR) => (subR.subs ? subRoute(subR) : route(subR)));

        return r.component ? route(r) : subRoute(r);
    };

    const createRoute = () => {
        return routesConfig.map(iterteMenu);
    };

    return (
        <Switch>
            { createRoute() }
            <Route exact path="/" render={ () => <Redirect to="/home" /> } />
            <Route render={ () => <Redirect to="/404" /> } />
        </Switch>
    );
};

export default CRouter;
