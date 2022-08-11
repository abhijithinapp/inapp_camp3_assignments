import {MDCRipple} from '@material/ripple/index';
import {MDCTopAppBar} from '@material/top-app-bar';

//Data Table
import {MDCDataTable} from '@material/data-table';
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));


// Instantiation
const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;
const ripple = new MDCRipple(document.querySelector('.foo-button'));
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);