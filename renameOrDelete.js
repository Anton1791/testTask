import { data } from "./store.js";

const nameDocument = document.getElementById('name');
const authorDocument = document.getElementById('author');
const specificationDocument = document.getElementById('specification');
const typeDocument = document.getElementById('type-document');
const commentDocuments = document.getElementById('comments');
const buttonDelete = document.getElementById('delete_btn');
const typeChoice = document.getElementById('type-choice');
const buttonChois = document.querySelector('.button-choise-document');


export function renameOrDelete() {
    buttonChois.onclick = function () {
        let newData = data.map(item => item)
        data.length = 0;
        data.push(...newData);
        generatOptions();
        dataInput(data[0].id)
    };

    typeChoice.onchange = function () {
        return dataInput(+typeChoice.value)
    };

    dataInput(data[0].id)

    buttonDelete.onclick = function () {
        let newData = data.filter(item => item.id !== +typeChoice.value);
        data.length = 0;
        data.push(...newData);
        generatOptions();
        dataInput(data[0].id)
    };

    nameDocument.onkeypress = function (e) {
        const elem = data.find(item => {
            if (item.id === +typeChoice.value) {
                return true
            }
        })
        elem.name = e.target.value
    };

    nameDocument.onchange = generatOptions;

    authorDocument.onkeypress = function (e) {
        const elem = data.find(item => {
            if (item.id === +typeChoice.value) {
                return true
            }
        })
        elem.author = e.target.value
    };

    specificationDocument.onkeypress = function (e) {
        const elem = data.find(item => {
            if (item.id === +typeChoice.value) {
                return true
            }
        })
        elem.specification = e.target.value
    };

    commentDocuments.onkeypress = function (e) {
        const elem = data.find(item => {
            if (item.id === +typeChoice.value) {
                return true
            }
        })
        elem.comment = e.target.value
    };

    function generatOptions() {
        typeChoice.innerHTML = null;
        for (let doc of data) {
            typeChoice.innerHTML += `<option value="${doc.id}">${doc.name}</option>`;
        }
    };

    function dataInput(id) {
        const elem = data.find(item => {
            if (item.id === id) {
                return true
            }
        })

        nameDocument.value = elem.name;
        authorDocument.value = elem.author;
        specificationDocument.value = elem.specification;
        typeDocument.value = elem.type;
        commentDocuments.value = elem.comment;
    }
};