const db = {
    'user': [
        {id: '1', name: 'Carlos'},
    ]
};

async function list(table) {
    return db[table] || []; //Traer todo la informacion de la tabla
}

async function get(table, id) {
    let col = await list(table);
    return col.filter(item => item.id === id)[0] || null;
}

async function update(table, data) {
    if (!db[table]) {
        db[table] = [];
    }
    db[collection].push(data);
    
    console.log(db);
}

async function remove(tabla, id) {
    return true;
}

async function query (tabla, q) {
    let col = await list(table);
    let keys = Object.keys(q);
    let key = key[0];

    return col.filter(item => item[key[0]] === q[key[0]])[0] || null;
}

module.exports = {
    list,
    get,
    update,
    remove,
    query,
};