window.onload = function() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
}

function get_action() {
    return document.querySelector('input[name="action"]:checked').value;
}

function convert() {
    const action = get_action();

    const s = input.value;
    let out = "";
    for (const chr of s) {
        const code = chr.codePointAt(0);

        let chr2;
        if (action == "encode") {
            chr2 = String.fromCodePoint(code | 0xe0000);
        } else if (action == "decode") {
            chr2 = String.fromCodePoint(code & ~(0xe0000));
        }
        out += chr2;
    }
    output.value = out;
}

function copy() {
    output.select();
    output.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(output.value);
}

function clear_btn() {
    input.value = "";
    output.value = "";
}

