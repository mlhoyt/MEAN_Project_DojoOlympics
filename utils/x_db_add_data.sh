# -*- shell -*-

######################################################################
# Cheatsheet
######################################################################

# show dbs
# use DojoOlympics
# db.dropDatabase()
#
# show collections
# db.<COLLECTION>.drop()
# db.<COLLECTION>.remove({})
# db.<COLLECTION>.insert({"name":"Python 1"})
# db.<COLLECTION>.insert({"name":"Python RegEx 1"})

# curl -X GET http://localhost:8000/api/categories | python -m json.tool

######################################################################
# JavaScript I
######################################################################

# mongo << EOHI
# use DojoOlympics
# db.categories.insert({"name":"JavaScript 1"})
# exit
# EOHI

# mongo << EOHI
# use DojoOlympics
# c = db.categories.findOne({name: "JavaScript 1"})
# db.exams.insert({"category":c._id})
# e = db.exams.findOne({category: c._id})
# db.questions.insert({topic:"Console", text:"var x = 10;\nconsole.log( x );", answer:"10"})
# q = db.questions.findOne({topic:"Console"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic:"Undefined Function", text:"var x = \"10\";\nif( x == 10 ) {\n  log( x );\n}", answer:"log is not defined"})
# q = db.questions.findOne({topic:"Undefined Function"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic:"Conditional Comparison", text:"var x = \"10\";\nif( x === 10 ) {\n  console.log( x );\n}", answer: "<Nothing>"})
# q = db.questions.findOne({topic:"Conditional Comparison"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic: "Looping While Modify", text:"var x = \"10\";\nwhile( x != 0 ) {\n  console.log( x );\n}", answer:"10\n10\n10\n..."})
# q = db.questions.findOne({topic:"Looping While Modify"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic: "Looping While Cond1", text:"var x = 10;\nwhile( x != 0 ){\n  x--;\n  console.log( x );\n}", answer:"9\n8\n7\n...\n2\n1\n0"})
# q = db.questions.findOne({topic:"Looping While Cond1"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic: "Looping While Cond2", text:"var x = \"10\";\nwhile( x > 0 ){\n  x--;\n  console.log( x );\n}", answer:"9\n8\n7\n...\n2\n1\n0"})
# q = db.questions.findOne({topic:"Looping While Cond2"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic: "Looping For", text:"var myArr = [ 1, 2, 3, 4];\nfor( var i = 0; i < myArr.length; i++ ) {\n  console.log( i );  console.log( myArr[ i ] );\n}", answer:"0\n1\n1\n2\n2\n3\n3\n4"})
# q = db.questions.findOne({topic:"Looping For"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic: "Looping For Modify", text:"var my Arr = [ 1, 2, 3, 4];\nfor( var i = 0; i < myArr.length; i-- ) {\n  console.log( i );\n  console.log( myArr[i] );\n}", answer:"0\n1\n-1\nundefined\n-2\nundefined\n..."})
# q = db.questions.findOne({topic:"Looping For Modify"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic: "Looping ForIn Array", text:"var myArr = [ 1, 2, 3, 4 ];\nfor( var i in myArr ) {\n  console.log( i );\n  console.log( myArr[ i ] );\n}", answer:"0\n1\n1\n2\n2\n3\n3\n4"})
# q = db.questions.findOne({topic:"Looping ForIn Array"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic: "Looping ForIn Object", text:"var myObj = { \"name\": \"Kris\", \"age\", 25 };\nfor( var i in myObj ) {\n  console.log( i + \" is \" + myObj[ i ] );\n}", answer:"name is Kris\nage is 25"})
# q = db.questions.findOne({topic:"Looping ForIn Object"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# exit
# EOHI

######################################################################
# JavaScript II
######################################################################

# mongo << EOHI
# use DojoOlympics
# db.categories.insert({"name":"JavaScript 2"})
# exit
# EOHI

# mongo << EOHI
# use DojoOlympics
# c = db.categories.findOne({name: "JavaScript 2"})
# db.exams.insert({"category":c._id})
# e = db.exams.findOne({category: c._id})

# db.questions.insert({topic:"Looping ForIn Array of Objects", text:"var myObjs = [\n", answer:""})
# q = db.questions.findOne({topic:"Looping ForIn Array of Objects"})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})

# db.questions.insert({topic:"", text:"", answer:""})
# q = db.questions.findOne({topic:""})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})

# db.questions.insert({topic:"", text:"", answer:""})
# q = db.questions.findOne({topic:""})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})

# db.questions.insert({topic:"", text:"", answer:""})
# q = db.questions.findOne({topic:""})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})

# db.questions.insert({topic:"", text:"", answer:""})
# q = db.questions.findOne({topic:""})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic:"", text:"", answer:""})
# q = db.questions.findOne({topic:""})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic:"", text:"", answer:""})
# q = db.questions.findOne({topic:""})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic:"", text:"", answer:""})
# q = db.questions.findOne({topic:""})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic:"", text:"", answer:""})
# q = db.questions.findOne({topic:""})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# db.questions.insert({topic:"", text:"", answer:""})
# q = db.questions.findOne({topic:""})
# db.exams.update({_id: e._id},{$push: {q_series: q._id}})
# exit
# EOHI

# # 11- Looping_ForIn_ArrayOfObject1
# var myObjs = [
#   { "name": "Kris", "age": 25 },
#   { "name": "Sara", "age": 26 },
#   { "name": "Nitish", "age": 26 },
#   { "name": "Kamilah", "age": 26 },
# ];
# for( var i in myObjs ) {
#   console.log( i + " is " + myObjs[ i ] );
# }
# ---
# 0 is [object Object]
# 1 is [object Object]
# 2 is [object Object]
# 3 is [object Object]
# # 12 - Looping_ForIn_ArrayOfObject2
# var users = [
#   { "name": "Kris", "age": 25 },
#   { "name": "Sara", "age": 26 },
#   { "name": "Nitish", "age": 26 },
#   { "name": "Kamilah", "age": 26 },
# ];
# for( var user in users ) {
#   for( var detail in users[ user ] ) {
#     console.log( detail + " is " + users[ user ][ detail ] );
#   }
# }
# ---
# name is Kris
# age is 25
# name is Sara
# age is 26
# name is Nitish
# age is 26
# name is Kamilah
# age is 26

# # 13 - Alert
# var num1 = 0.1;
# var num2 = 0.2;
# var shouldEqual = 0.3;
# alert( num1 + num2 == shouldEqual );
# consle.log( num1 + num2 );
# ---
# Alert Window( False );
# 0.30000000000000004
# # 14 - Auto_Type_Conversion1
# console.log( 1 + true + '3' + 42 );
# ---
# '2342'
# # 15 - Truthy1
# console.log( NaN == NaN );
# ---
# false
# # 16 - Auto_Type_Conversion2
# console.log( +"10" );
# ---
# 10
# # 17 -Auto_Type_Conversion3
# console.log( "10" * 2 );
# ---
# 20
# # 18 -Auto_Type_Conversion4
# console.log( "10" + [1] );
# ---
# '101'
# # 19 - Auto_Type_Conversion5
# console.log( "10" + [ 1, 2 ] );
# ---
# '101,2'
