function GenerateTable() {
    let num = document.getElementById("num").value;
    let range = document.getElementById("range").value;
    let result = document.getElementById("result");

    result.innerHTML = ""; 

    let table = `<table class="w-full mt-4 border-t border-gray-200">`;

    for (let i = 1; i <= range; i++) {
        table += `
            <tr class="border-b shadow-lg border-black ">
                <td class="p-2 text-white font-bold">
                    ${num} × ${i} = ${num * i}
                </td>
            </tr>`;
    }

    table += `</table>`;
    result.innerHTML = table;
}