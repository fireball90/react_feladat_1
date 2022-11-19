var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      items = _React$useState2[0],
      setItems = _React$useState2[1];

  var _React$useState3 = React.useState("Comments"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      tipus = _React$useState4[0],
      setTipus = _React$useState4[1];

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/" + tipus).then(function (res) {
      return res.ok ? res.json() : [];
    }).then(function (tartalom) {
      setItems(tartalom);
    });
  }, [tipus]);
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'div',
      { className: 'row m-5 border p-5' },
      React.createElement(FormKomponens, { setTipus: setTipus }),
      React.createElement(ListaKomponens, { elemek: items })
    )
  );
}

var FormKomponens = function FormKomponens(_ref) {
  var setTipus = _ref.setTipus;
  return React.createElement(
    'form',
    {
      className: 'w-100',
      onSubmit: function onSubmit(event) {
        event.preventDefault();
        setTipus(event.target.elements.contentType.value);
      }
    },
    React.createElement(
      'select',
      {
        name: 'contentType',
        className: 'form-control mb-2' },
      React.createElement(
        'option',
        { value: 'comments' },
        'Kommentek'
      ),
      React.createElement(
        'option',
        { value: 'posts' },
        'Posztok'
      )
    ),
    React.createElement(
      'button',
      {
        className: 'btn btn-primary mb-2',
        type: 'submit' },
      'Kiv\xE1laszt'
    )
  );
};
//{elem.id===1 ? <img src={require('./images/1.jpg')} width="100" alt="pic"/> : elem.id===2 ? <img src={require('./images/2.jpg')} width="100" alt="pic"/> : elem.id===3 ? <img src={require('./images/3.jpg')} width="100" alt="pic"/> : elem.id===4 ? <img src={require('./images/4.jpg')} width="100" alt="pic"/> : elem.id===5 ? <img src={require('./images/5.jpg')} width="100" alt="pic"/> : <img src={require('./images/no_image.jpg')} width="100" alt="no pic"/>}
var ListaKomponens = function ListaKomponens(_ref2) {
  var elemek = _ref2.elemek;
  return React.createElement(
    'ul',
    null,
    elemek.map(function (elem) {
      return React.createElement(
        'li',
        null,
        imageRender(elem.id),
        React.createElement(
          'li',
          null,
          elem.title
        ),
        React.createElement(
          'li',
          null,
          elem.body
        ),
        React.createElement(
          'li',
          null,
          elem.email
        )
      );
    })
  );
};
function imageRender(id) {
  if (id >= 1 && id <= 5) {
    return React.createElement(
      'li',
      null,
      React.createElement('img', { src: require('./' + id + '.jpg'), alt: 'pic', width: '100' })
    );
  } else {
    return React.createElement(
      'li',
      null,
      React.createElement('img', { src: require('./no_image.jpg'), alt: 'nopic', width: '100' })
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));