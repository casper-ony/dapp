'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Wallets from "./wallets.js";

var WalletPage = function WalletPage() {
    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        search = _React$useState2[0],
        setSearch = _React$useState2[1];

    console.log(search);

    return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
            'div',
            { className: 'row justify-content-center pb-5' },
            React.createElement(
                'div',
                { className: 'col-lg-6 col-md-8 col-sm-10 col-10' },
                React.createElement(
                    'div',
                    { className: 'input-group rounded' },
                    React.createElement('input', { type: 'search', className: 'form-control rounded search-input', value: search,
                        onChange: function onChange(e) {
                            e.preventDefault();
                            return setSearch(e.target.value);
                        }, placeholder: 'Search', 'aria-label': 'Search',
                        'aria-describedby': 'search-addon' }),
                    React.createElement(
                        'span',
                        { className: 'input-group-text border-0', id: 'search-addon' },
                        React.createElement('i', { className: 'fa fa-search' })
                    )
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 px-5 text-center' },
            React.createElement(Wallets, { search: search })
        )
    );
};

var domContainer = document.querySelector('#wallet-sync');
ReactDOM.render(React.createElement(WalletPage, null), domContainer);