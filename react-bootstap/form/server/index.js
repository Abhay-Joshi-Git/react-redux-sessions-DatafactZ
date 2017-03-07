const uuidV1 = require('uuid/v1');
var express = require("express");
var bodyParser = require('body-parser');
var _ = require("lodash");
var app = express();

var employees = [];
var departments = [];

app.use(bodyParser());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

function getEmployeeById(id) {
    return _.find(employees, {id: id});
}

function getEmployeeByName(name) {
    return _.find(employees, {name: name});
}

function addEmployee(item) {
    employees.push(item);
}

function editEmployee(id, item) {
    var employee = getEmployeeById(id);
    if (employee) {
        _.assign(employee, item);
    }
}

function getNewEmployeeId() {
    return employees.length + 1;
}

function removeEmployee(id) {
    employees = _.reject(employees, {id: id});
}

app.get("/employees", function(req, res) {
	res.send(JSON.stringify(employees));
});

app.get("/employee/:id", function(req, res) {
    res.send(getEmployeeById(parseInt(req.params.id)));
});

app.put("/employee", function(req, res) {
    var item = getEmployeeById(req.body.id);
    if (item) {
        editEmployee(req.body.id, req.body);
        res.send("ok");
    } else {
        res.status(400).send("record not found");
    }
});

app.delete("/employee/:id", function(req, res) {
    var item = getEmployeeById(parseInt(req.params.id));
    if (item) {
        removeEmployee(parseInt(req.params.id));
        res.send("ok");
    } else {
        res.status(400).send("record not found");
    }
});

app.post("/employee", function(req, res) {
    var newEmp = req.body;
    console.log(req.body);
    var item = getEmployeeByName(newEmp.name);
    if (!item) {
        newEmp.id = getNewEmployeeId();
        addEmployee(newEmp);
        res.send(newEmp);
    } else {
        res.status(400).send("record already exists");
    }
});

var server = app.listen(3000, function(){
	console.log("server listening at : " + server.address().address + ":" + server.address().port)
});
