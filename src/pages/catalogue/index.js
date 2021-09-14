import React from 'react';
import routes from '../../routes/config';
import './index.scss'

export default function index() {
  return (
    <div className="catalogue" >
      <h1> 目录 </h1>
      <div className="container" >

        <span>CSS && HTML</span>
        { routes.filter(i => String(i.key).includes('/html/')).map(val => (
          <a target="_blank" key={ val.key } href={ val.key } > { val.title } </a>
        )) }

        <br />
        <span>THREEJS</span>
        { routes.filter(i => String(i.key).includes('/threejs/')).map(val => (
          <a target="_blank" key={ val.key } href={ val.key } > { val.title } </a>
        )) }


        <br />
        <span>JS</span>
        { routes.filter(i => String(i.key).includes('/js/')).map(val => (
          <a target="_blank" key={ val.key } href={ val.key } > { val.title } </a>
        )) }

        <br />
        <span>React</span>
        { routes.filter(i => String(i.key).includes('/rc/')).map(val => (
          <a target="_blank" key={ val.key } href={ val.key } > { val.title } </a>
        )) }
      </div>
    </div>
  )
}