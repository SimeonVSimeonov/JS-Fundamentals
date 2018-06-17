function solve(input) {
    let inventory = input.shift().split(' ');

    for (let string of input) {
        let commandItems = string.split(" ");
        let command = commandItems[0];
        let item = commandItems[1];

        while (command !== 'Fight!') {
            if (command === 'Buy') {
                if (!inventory.includes(item)) {
                    inventory.push(item)
                }
                break;
            }
            if (command === 'Trash') {
                let indxItem = inventory.indexOf(item);
                if (indxItem > -1) {
                    inventory.splice(indxItem, 1);
                }
                break;
            }
            if (command === 'Repair') {
                if (inventory.includes(item)) {
                    let indxItem = inventory.indexOf(item);
                    if (indxItem > -1) {
                        inventory.splice(indxItem, 1)
                    }
                    inventory.push(item)
                }
                break;
            }
            if (command === 'Upgrade') {
                let updateData = item.split('-');
                let updateItem = updateData[0];
                let indxItem = inventory.indexOf(updateItem);
                if (indxItem > -1) {
                    let updated = updateData.join(':');
                    inventory.splice(indxItem + 1, 0, updated);
                }
                break;
            }
        }
    }
    console.log(inventory.join(' '));
}

solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!']);

solve(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V',
    'Fight!']);