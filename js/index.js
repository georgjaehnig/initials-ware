
function generatePassword(length) {
  let text = "";
  let possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
	// Set password.
	document.querySelector('#password').value = text;
  return text;
}

function generateInitials(password) {
  
	var table = document.querySelector('#initials');

	table.innerHTML = ' <tr><th>Initials</th><th>Person with Wikipedia link</th></tr> ';
 
	for (var i = 0; i < password.length; i++) {
  	let first = password[i]
  	i++
  	let second = password[i]
		let tr = document.createElement('tr');
		tr.innerHTML = '<tr><td>' + first + ' ' + second + '</td><td><a target="_blank" href="http://www.google.com/search?q=site:wikipedia.org%20' + initials[first][second][0] + ' ' + initials[first][second][1] + '&ie=utf-8&btnI=1">' + initials[first][second][0] + ' ' + initials[first][second][1] + '</a></td></tr>'
		table.appendChild(tr);
  }
}

function generate() {
	let password = generatePassword(14);
	generateInitials(password);
}

