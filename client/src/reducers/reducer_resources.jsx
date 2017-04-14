// export default function () {
//   return [
//     {
//       title: 'React tutorial',
//       description: 'React is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language.',
//       URL: 'https://facebook.github.io/react/tutorial/tutorial.html',
//       icon: 'http://coenraets.org/present/react/img/react.png',
//     },
//     {
//       title: 'Angular Documentation',
//       description: 'Angular is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language.',
//       URL: 'https://docs.angularjs.org/api',
//       icon: 'https://www.w3schools.com/angular/pic_angular.jpg',
//     },
//     {
//       title: 'React tutorial',
//       description: 'React is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language.',
//       URL: 'https://facebook.github.io/react/tutorial/tutorial.html',
//       icon: 'http://coenraets.org/present/react/img/react.png',
//     },
//     {
//       title: 'Redux Course',
//       description: 'Master the fundamentals of React and Redux with this tutorial as you develop apps supported by NPM, Webpack, and ES6',
//       URL: 'https://www.udemy.com/react-redux/',
//       icon: 'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
//     }
//   ]
// }

import { GET_RESOURCES } from '../actions/resourceActions.jsx';

export default function(state = [], action) {
  switch (action.type) {
    case GET_RESOURCES:
    return state.concat(action.payload.data);
  }

  return state;
}
