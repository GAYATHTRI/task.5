
var obj1 = {
    "name": "person1",
    "age": 5,
    "isEqual":"false"
};
var obj2 = {
    "name": "person2",
    "age": 5,

};
var str = JSON.stringify(obj1, obj2);

JSON.stringify(obj1) == JSON.stringify(obj2)///true

_.isEqual(obj1, obj2);//=>false

