function save(){
    // get data from input box. + means space beofre the text.
    var new_data = ' ' + document.getElementById('input').value;
    // if there is nothing saved at the start then save an empty array
    if(localStorage.getItem('data') == null) {
    localStorage.setItem('data', '[]');
    }
    //get old data and slap it to the new data
    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);
    
    // svae the old + new data to local storage
    localStorage.setItem('data', JSON.stringify(old_data));
}
function view(){
	// if there is indeed data then continue
	if(localStorage.getItem('data') != null){
	document.getElementById('output').innerHTML = JSON.parse(localStorage.getItem('data'));
	}
}