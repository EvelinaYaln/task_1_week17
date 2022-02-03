change = () => {
    let str = document.querySelector('#full_name').value;
    let cleanStr = str.trim();
    let fullName = cleanStr.split(' ');
    for (let i = 0; i < fullName.length; i++) {
        let upper = fullName[i][0].toUpperCase();
        let sliced = fullName.slice(1, fullName[i].length);
        let lower = sliced.toLowerCase();
        let changed = `${upper}${lower}`;
        if (i === 0) {
            document.querySelector('#second_name').value = changed;
        }
    }

    /*let upper = fullName[0][0].toUpperCase();
    let sliced = fullName[0].slice(1, fullName[0].length);
    let lower = sliced.toLowerCase();
    let changed = `${upper}${lower}`;
    document.querySelector('#second_name').value = changed;

    let upper1 = fullName[1][0].toUpperCase();
    let sliced1 = fullName[1].slice(1, fullName[1].length);
    let lower1 = sliced1.toLowerCase();
    let changed1 = `${upper1}${lower1}`;
    document.querySelector('#first_name').value = changed1;

    let upper2 = fullName[2][0].toUpperCase();
    let sliced2 = fullName[2].slice(1, fullName[2].length);
    let lower2 = sliced2.toLowerCase();
    let changed2 = `${upper2}${lower2}`;
    document.querySelector('#middle_name').value = changed2;*/
}