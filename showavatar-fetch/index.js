async function AfficherAvatar() {
  //lecture de notre fichier json
  let response = await fetch("user.json");

  //console.log(response);

  let user = await response.json();

  //console.log(user);

  //Lecture de l'utilisateur

  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);

  let githubUser = await githubResponse.json();

  //Affichage de la photo de profil de l'utilisateur github
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;

  img.className = "promise-avatar";

  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  document.body.append(img);

  //console.log(githubUser);

  //Attendre 30 seconse et effacer la photo
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

AfficherAvatar();
