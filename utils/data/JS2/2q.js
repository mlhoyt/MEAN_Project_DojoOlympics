var users = [
  { "name": "Kris", "age": 25 },
  { "name": "Sara", "age": 26 },
  { "name": "Nitish", "age": 26 },
  { "name": "Kamilah", "age": 26 },
];
for( var user in users ) {
  for( var detail in users[ user ] ) {
    console.log( detail + " is " + users[ user ][ detail ] );
  }
}
