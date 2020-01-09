$(document).ready(function(){
 $('#searchUser').on('keyup', function(e){
 	let username = e.target.value;

 	//Ajax request ke github
 	$.ajax({
 		url:'https://api.github.com/users/' + username,
 		data:{
 			client_id:'75fc5ccc23d70112a999',
 			client_secret:'75f97c223fcfdb9e43e82008a06fd76d32c64262'
 		}
 	}).done(function(user){
 		$('#profile').html(`
	 		<div class="panel panel-default">
	 			<div class="panel-heading">
	 			<h3 class="panel-title">${user.name}</h3>
	 		</div>
	 		<div class="panel-body">
	 			<div class="row">
	 				<div class="col-md-5">
	 					<img class="thumbnail avatar" src="${user.avatar_url}">
	 					<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">Lihat Profil</a>
	 				</div>
	 					<div class = "col-md-9">
	 				<br>
						<span class="label label-default">Public Repository: ${user.public_repos}</span><br>
						<span class="label label-primary">Public Data: ${user.public_gists}</span><br>
						<span class="label label-success">Followers: ${user.followers}</span><br>
						<span class="label label-info">Following: ${user.following}</span>
					<br>
					<br>
					<ul class="list-group">
						<li class="list-group-item">Company :${user.company}</li>
						<li class="list-group-item">Website/blog :${user.blog}</li>
						<li class="list-group-item">Location :${user.location}</li>
					</ul>
	 				</div>
	 		</div>
	 		`);
 	});
 });

});