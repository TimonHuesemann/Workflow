//function CreateTableFromJSON(ReqData) {

fetch('https://strawpoll.me/api/v2/polls/19169764')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
  AddRow(data);
})


  function AddRow(datab){

  var table = document.getElementsByTagName('table')[0];
  //console.log(table.rows.length)

  for (var i = 0; i < datab.options.length; i++) {
console.log(i);
   var newRow = table.insertRow(table.rows.length);

   // add cells to the row
   var cel1 = newRow.insertCell(0);
   var cel2 = newRow.insertCell(1);

   // add values to the cells
   cel1.innerHTML = datab.options[i];
   cel2.innerHTML = datab.votes[i];
   // more statements
}

}
