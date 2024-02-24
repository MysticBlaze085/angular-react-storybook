import { jsx } from 'react/jsx-runtime';

var styles = {};

function ReactComponents(props) {
  return jsx("div", {
    className: styles['container'],
    children: jsx("h1", {
      children: "Welcome to ReactComponents!"
    })
  });
}

export { ReactComponents };
