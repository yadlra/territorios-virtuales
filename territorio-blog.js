// Create an array of blog post objects
var blogPosts = [
  {
    title: "My First Blog Post",
    date: "March 1, 2023",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "My Second Blog Post",
    date: "March 3, 2023",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "My Third Blog Post",
    date: "March 5, 2023",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

// Display the blog posts on the website
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

// Call the displayBlogPosts function when the website loads
window.addEventListener("load", displayBlogPosts);
