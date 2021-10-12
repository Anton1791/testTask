import { data } from "./store.js";

const createName = document.querySelector('.create-name');
const createAuthor = document.querySelector('.create-author');
const createSpecification = document.querySelector('.create-specification');
const createType = document.querySelector('.create-type');
const createComment = document.querySelector('.create-comment');
const buttonSave = document.querySelector('.button-save');
let id = 3;
createType.value = createType.type;


export function createDocument() {
    buttonSave.onclick = function () {
        id++
        let result = { id: id, name: createName.value, author: createAuthor.value, specification: createSpecification.value, type: createType.value, comment: createComment.value };
        data.push(result)
        createName.value = null;
        createAuthor.value = null;
        createSpecification.value = null;
        createComment.value = null;
        createType.value = null
    }
    return data;
};
