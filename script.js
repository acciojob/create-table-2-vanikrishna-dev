function createTable() {
    const table = document.getElementById("myTable");

    table.innerHTML = "";

    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    rn = Number(rn);
    cn = Number(cn);

    if (
        isNaN(rn) ||
        isNaN(cn) ||
        rn <= 0 ||
        cn <= 0
    ) {
        alert("Please enter valid positive numeric values");
        return;
    }

    for (let i = 0; i < rn; i++) {
        let row = table.insertRow(i);

        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell(j);
            cell.innerText = `Row-${i} Column-${j}`;
        }
    }
}