document.querySelector(".arrow img").addEventListener("click", (e) => {
    console.log(e.target.src);
    if (e.target.src == "http://127.0.0.1:5500/Frame(6).svg") {
        e.target.src = "http://127.0.0.1:5500/Frame(7).svg";
        const inputs2 = document.querySelectorAll(".maintext input");
        const items2 = [];

        inputs2.forEach(input => {
            items2.push(input.parentElement);
        });

        items2.sort((a, b) => {
            const valA = a.querySelector("input").value.toLowerCase();
            const valB = b.querySelector("input").value.toLowerCase();
            return valB.localeCompare(valA, 'az');
        });
        document.querySelector(".maintext").innerHTML = '';
        items2.forEach(item => document.querySelector(".maintext").appendChild(item));
    }
    else {
        e.target.src = "http://127.0.0.1:5500/Frame(6).svg";
        const inputs1 = document.querySelectorAll(".maintext input");
        const items1 = [];

        inputs1.forEach(input => {
            items1.push(input.parentElement);
        });

        items1.sort((a, b) => {
            const valA = a.querySelector("input").value.toLowerCase();
            const valB = b.querySelector("input").value.toLowerCase();
            return valA.localeCompare(valB, 'az');
        });
        document.querySelector(".maintext").innerHTML = '';
        items1.forEach(item => document.querySelector(".maintext").appendChild(item));
    }
});
document.querySelector(".plus").addEventListener("click", () => {
    document.querySelector(".maintext").innerHTML += `<div class="input3">
                    <input type="text" class="myInput2">
                    <img src="Frame(5).svg" alt="">
                </div>`
})
function add() {
    if (document.querySelector(".input input").value != '') {
        document.querySelector(".input").style.display = "none";
        document.querySelector(".maintext").style.display = "block";
        document.querySelector(".maintext").innerHTML += `<div class="input2">
        <input type="text" readonly value="${document.getElementById("myInput").value}">
        <img src="Frame(5).svg" alt="" onclick="remove(this)" onmouseenter="change1(this)" onmouseleave="change2(this)">
        </div>`
        document.querySelector(".input input").value = '';
    }
    if (document.querySelector(".input3") != null) {
        document.querySelectorAll(".input3")[document.querySelectorAll(".input3").length - 1].style.display = "none";
        if (document.querySelectorAll(".input3 input")[document.querySelectorAll(".input3").length - 1].value != '') {
            document.querySelector(".maintext").innerHTML += `<div class="input2">
            <input type="text" readonly value="${document.querySelectorAll(".input3 input")[document.querySelectorAll(".input3").length - 1].value}">
            <img src="Frame(5).svg" alt="" onclick="remove(this)" onmouseenter="change1(this)" onmouseleave="change2(this)">
            </div>`
        }
        document.querySelector(".input3 input").value = '';
    }
}
function remove(i) {
    i.parentElement.remove();
}
function change1(i) {
    i.src = "http://127.0.0.1:5500/Group70.svg";
}
function change2(i) {
    i.src = "http://127.0.0.1:5500/Frame(5).svg";
}
document.querySelector(".arrow img").addEventListener("mouseenter", () => {
    if (document.querySelector(".arrow img").src == 'http://127.0.0.1:5500/Frame(4).svg') {
        document.querySelector(".arrow img").src = 'http://127.0.0.1:5500/Frame(6).svg';
    }
    else {
        document.querySelector(".arrow img").src = 'http://127.0.0.1:5500/Frame(7).svg';
    }
});

document.querySelector(".arrow img").addEventListener("mouseleave", () => {
    if (document.querySelector(".arrow img").src == 'http://127.0.0.1:5500/Frame(7).svg') {
        document.querySelector(".arrow img").src = 'http://127.0.0.1:5500/Frame(3).svg';
    }
    else {
        document.querySelector(".arrow img").src = 'http://127.0.0.1:5500/Frame(4).svg';
    }
});
document.querySelector(".input img").addEventListener("mouseenter", () => {
    document.querySelector(".input img").src = 'http://127.0.0.1:5500/Group70.svg';
});

document.querySelector(".input img").addEventListener("mouseleave", () => {
    document.querySelector(".input img").src = 'http://127.0.0.1:5500/Frame(5).svg';
});
document.querySelector(".input img").addEventListener("click", () => {
    document.querySelector(".input input").value = '';
});