
import { addNewField, handleSaveLinks } from './eventFn.js';

const addBtn = document.getElementById('add');
addBtn.addEventListener( 'click', addNewField );

const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', handleSaveLinks);


addNewField();

