let list = [];
let input = document.getElementById("newItem");
let compList = [];

let cl = localStorage.getItem("compList");
    if (cl) {
        let cList = JSON.parse(cl);
        compList.push(...cList);
    }

function delFunc(index) {
    compList = [];
    let cl = localStorage.getItem("compList");
    if (cl) {
        let cList = JSON.parse(cl);
        compList.push(...cList);
    }

    let where = compList.indexOf(index);
    if (where > -1) {
        compList.splice(where, 1);
    } else {
        compList.push(index);
    }

    let compLists = JSON.stringify(compList)
    localStorage.setItem("compList", compLists);
    console.log(compList);

}


function populateList(a) {
    let savedList = localStorage.getItem("list");
    console.log(savedList);
    if (savedList) {
        let listItemArray = JSON.parse(savedList);

        let itemDiv = document.getElementById("lists");

        listItemArray.forEach((element, index) => {
            var listItem = document.createElement("div");
            listItem.style.display = "flex";
            listItem.style.flexDirection = "row";

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = index;
            checkbox.addEventListener("click", () => delFunc(index));
            let where = compList.indexOf(index);
            if (where > -1) {
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }

            var para = document.createElement("p");
            para.innerHTML = element;

            listItem.appendChild(checkbox);
            listItem.appendChild(para);
            itemDiv.appendChild(listItem);
        });
    }
}

function addList() {
    list = [];

    let savedList = localStorage.getItem("list");
    if (savedList) {
        let listItemArray = JSON.parse(savedList);
        list.push(...listItemArray);
        localStorage.removeItem("list");
    }

    let newItem = input.value;
    list.push(newItem);
    input.value = "";

    let lists = JSON.stringify(list);
    localStorage.setItem("list", lists);
    list = [];
    window.location.reload();
    populateList();
}

function clearList() {
    localStorage.removeItem("list");
    localStorage.removeItem("compList");
    list = [];
    window.location.reload();
}

populateList();