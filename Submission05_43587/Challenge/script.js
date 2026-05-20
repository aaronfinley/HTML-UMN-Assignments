function generateUserTable(data)
{
    let idx = 0;
    let tbody = document.getElementById('users').querySelector('tbody');
    tbody.innerHTML = '';
    for(idx = 0; idx < data.length; idx++)
    {
        let colID = '<td>'+data[idx].id+'</td>';
        let colName = '<td>'+data[idx].name+'</td>';
        let colEmail = '<td>'+data[idx].email+'</td>';
        let colCompanyName = '<td>'+data[idx].company.name+'</td>';
        let btnShowPost = '<td><button class="button-posts" userId='+data[idx].id+' onclick="loadPosts('+data[idx].id+')">Show Posts</button></td>';
        let newRow = '<tr>'+colID+colName+colEmail+colCompanyName+btnShowPost+'</tr>';
        tbody.innerHTML += newRow;
    }
}

function loadUserData()
{
    let request = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/users';
    request.open('GET', url, true);

    request.onload = function()
    {
        if(request.status >= 200 && request.status < 400 )
        {
            let data = JSON.parse(request.responseText);
            generateUserTable(data);
        }
        else
        {
            alert('Page Not Found');
        }
    }

    request.onerror = function()
    {
        alert('Request Failed! Check your internet connection');
    }
    
    request.send();
}

function showPosts(data)
{
    let idx = 0;
    let div = document.getElementById('user-posts');
    div.innerHTML = '';
    for(idx = 0; idx < data.length; idx++)
    {
        let colTitle = '<h2><b>TITLE: "'+data[idx].title.toUpperCase()+'"</b></h2>';
        let colBody = '<p>'+data[idx].body+'</p>';
        let btnShowComments = '<button class="button-comments"' + ' onclick="loadComments('+data[idx].id+')">Show Comments</button></td>';
        let newDiv = '<div class="w3-card-4" id="user-comments-'+ data[idx].id +'">'+colTitle+colBody+btnShowComments+'</div>';
        div.innerHTML += newDiv;
    }
}

function loadPosts(id)
{
    let request = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/posts/?userId='+id;
    request.open('GET', url, true);

    request.onload = function()
    {
        if(request.status >= 200 && request.status < 400 )
        {
            let data = JSON.parse(request.responseText);
            showPosts(data);
        }
        else
        {
            alert('Page Not Found');
        }
    }

    request.onerror = function()
    {
        alert('Request Failed! Check your internet connection');
    }
    
    request.send();
}

function showComments(data){
    let idx = 0;
    let div = document.getElementById("user-comments-" + data[0].postId);
    let button = div.querySelector('button');
    button.remove();
    div.innerHTML += "<h4><b>Comments: </b></h4>";
    for(idx=0; idx < data.length; idx++){
        let name = '<strong>' + data[idx].name + '</strong>';
        let email = '<strong>' + data[idx].email + '</strong>';
        let body = data[idx].body;
        let comment = '<p>' + name + ' <b>(</b>' + email + '<b>)</b> commented: "' + body + '"</p>';
        div.innerHTML += comment;
    }
}

function loadComments(id){
    let request = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/posts/' + id + '/comments';
    request.open('GET', url, true);
    request.onload = function(){
        
        if(request.status >= 200 && request.status < 400){
            let data = JSON.parse(request.responseText);
            showComments(data);
        }
        else{
            alert('Page Not Found')
        }
    }
    request.onerror = function(){
        alert('Request Failed! Check your internet connection');
    }
    request.send();
}

function onDocumentFinish()
{
    loadUserData();
}