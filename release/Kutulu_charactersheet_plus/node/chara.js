const fs = require("fs");

const read_all = function(res) {
    fs.readFile("./node/db.json","utf8", function(err, data) {
        const charas =  JSON.parse(data).charas;
        let charas_list = []

        for (i=0;i<charas.length;i++) {
            charas_list.push({id: charas[i].id, name: charas[i].name})
        }
        res.send(charas_list)
    });
}

const read = function(res, id) {
    fs.readFile("./node/db.json","utf8", function(err, data) {
        const charas =  JSON.parse(data).charas;
        const chara = charas.find((v) => v.id == id)
        res.send(chara)
    });
}

const edit = function(id, charadata) {
    fs.readFile("./node/db.json","utf8", function(err, data) {
        let charas =  JSON.parse(data);
        charas.charas[id - 1] = charadata;
        fs.writeFile("./node/db.json", JSON.stringify(charas), function() {
            console.log("saved");
        });
    });
}

const creat = function(charadata) {
    fs.readFile("./node/db.json","utf8", function(err, data) {
        let charas =  JSON.parse(data);
        charas.charas.push(charadata);
        fs.writeFile("./node/db.json", JSON.stringify(charas), function() {
            console.log("saved");
        });
    });
}

module.exports = {
    read_all: read_all,
    read: read,
    edit: edit,
    creat: creat,
};