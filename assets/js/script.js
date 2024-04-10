//This is the Main Page JavaScript file//

//This code is for users to toggle light and dark mode??
const ldButton = document.querySelector('.header button');
ldButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// This is the code for the Blog Info form///
function submitData(event){
    event.preventDefault();
    const userName = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
   
    if(!userName || !title || !content){
        alert("Please fill in all required fields: Username, Title, and Content");
        return;
    }

    const formData = {
        userName: userName,
        title: title,
        content: content
    }
//The following lines of code allow local storage for users on this site//
    let formDataList = localStorage.getItem('formDataList');
    formDataList = formDataList ? JSON.parse(formDataList) : [];
    
    formDataList.push(formData);

    localStorage.setItem('formDataList', JSON.stringify(formDataList));
    window.location.href="./history.html"
}
document.getElementById('userBlog').addEventListener('submit', submitData);