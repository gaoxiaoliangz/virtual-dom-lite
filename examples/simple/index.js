import React, { render } from '../../src'
import test from './test'

const App = test(React, React.Component)

console.log(App().props.children)
console.log(<App/>)
console.log(App())

render(<App/>, document.getElementById('root'))
