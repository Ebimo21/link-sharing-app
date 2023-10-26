
import { addNewField, handleSaveLinks, initRender } from './eventFn.js';

const addBtn = document.getElementById('add');

if(addBtn) addBtn.addEventListener( 'click', addNewField );

const saveBtn = document.getElementById('saveBtn');
if (saveBtn) saveBtn.addEventListener('click', handleSaveLinks);

initRender();


// addNewField();

