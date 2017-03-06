import catelogue from './catelogue.js';
import inventory from './inventory.js';
import { combineReducers } from 'redux';

export default combineReducers({
    catelogue,
    inventory
});
