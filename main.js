import {renameOrDelete} from './renameOrDelete.js';
import {createDocument} from './createDocument.js';

const buttonChois = document.querySelector('.button-choise-document');
const buttonEdit = document.querySelector('.dutton-edit-document');

const contentChoiceDocument = document.querySelector('.content-choice-document');
const contentEditDocument = document.querySelector('.content-create-document');



buttonChois.addEventListener('click', function () {
    contentChoiceDocument.style.display = 'block';
    contentEditDocument.style.display = 'none';
});

buttonEdit.addEventListener('click', function () {
    contentEditDocument.style.display = 'block';
    contentChoiceDocument.style.display = 'none';
});

renameOrDelete();
createDocument();