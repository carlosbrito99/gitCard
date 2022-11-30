let usr = document.querySelector("#usuario-github");
let btn = document.querySelector("#buscar-github");
let link = document.querySelector("a");

let avatar_link = document.querySelector(".avatar");
let avatar_img = avatar_link.querySelector("img");
let nome = document.querySelector(".content h1");
let total_repo = document.querySelectorAll(".status li a strong")[0];
let total_gist = document.querySelectorAll(".status li a strong")[1];
let total_seg = document.querySelectorAll(".status li a strong")[2];


const getGitHubInfo = function (username) {

    var url = `https://api.github.com/users/${username}`;

    var ajax = new XMLHttpRequest();
    
    ajax.onreadystatechange = function () {

        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            nome.innerText = ajax.name;
            total_seg.innerText = ajax.followers;
            total_repo.innerText = ajax.public_repos;
            total_gist.innerText = ajax.public_gists;
            avatar_img.src = ajax.avatar_url;
            link.href = ajax.html_url;
            console.log(ajax);
        }
        
    };

    ajax.open('GET', url, true);
    ajax.send();

};

btn.addEventListener("click", e => {
    e.preventDefault();
    getGitHubInfo(usr.value);
})
