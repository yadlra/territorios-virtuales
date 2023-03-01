// Crear una matriz (array) de objetos de publicación de nuestro blog
var blogPosts = [
  {
    title: "Mi primera publicacion",
    date: "Marzo 1, 2023",
    content: "Territorios virtuales 1."
  },
  {
    title: "Mi segunda publicacion ",
    date: "Marzo 3, 2023",
    content: "Territorios virtuales 2."
  },
  {
    title: "Mi tercer publicacion",
    date: "Marzo 5, 2023",
    content: "Territorios Virtuales"
  }
];

// Mostrar las publicaciones del blog en el sitio web
function displayBlogPosts() {
  var postList = document.createElement("ul");

  blogPosts.forEach(function(post) {
    var listItem = document.createElement("li");
    var postTitle = document.createElement("h2");
    var postDate = document.createElement("p");
    var postContent = document.createElement("p");

    postTitle.innerText = post.title;
    postDate.innerText = post.date;
    postContent.innerText = post.content;

    listItem.appendChild(postTitle);
    listItem.appendChild(postDate);
    listItem.appendChild(postContent);

    postList.appendChild(listItem);
  });

  document.querySelector("main").appendChild(postList);
}

// Llamar a la función displayBlogPosts cuando se carga el sitio web
window.addEventListener("load", displayBlogPosts);
