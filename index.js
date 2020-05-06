import React from 'react'
import ReactDOM from 'react-dom'
import { Chip, Card, Tile } from './components'

let App = document.getElementById("app");

const content = (
  <>
    <Chip />
    <Tile />
    {/* <Card /> */}
  </>
)

ReactDOM.render(content, App);