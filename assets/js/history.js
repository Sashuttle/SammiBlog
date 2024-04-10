//This is the Blog Post History JavaScript File//

//Code for a back button that will take users back to the main page//
document.getElementById("backBtn").onclick = function () {
    window.location.href = "./index.html";  
 }
//Continued toggle for light and dark mode on the blog history page//    
const themeToggle = document.getElementById("lightDark");
themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark');
});
//the following lines of code displays the information saved to local storage and allows users to see blog posts previously posted//   
const blogPostList = JSON.parse (localStorage.getItem('formDataList')) || [];

const blogPostDisplay = document.getElementById('blogPosts');

if (blogPostList.length > 0){
   let postsHTML = '<ul>';
    blogPostList.forEach(element => {
        postsHTML += `
        <li class="blogPostsArea">
            <h5>Username:</h5> <p>${element.userName}</p><br>
            <h5>Title:</h5> <p>${element.title}</p><br>
            <h5>Content:</h5> <p>${element.content}</p>
        `;
    });
    postsHTML += '</ul>';
    blogPostDisplay.innerHTML = postsHTML;
}