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
    let tbody = document.getElementById('user-posts').querySelector('tbody');
    tbody.innerHTML = '';
    for(idx = 0; idx < data.length; idx++)
    {
        let colID = '<td>'+data[idx].id+'</td>';
        let colTitle = '<td>'+data[idx].title+'</td>';
        let colBody = '<td>'+data[idx].body+'</td>';
        let btnShowComments = '<td><button class="button-comments" postId='+data[idx].id+' onclick="loadComments('+data[idx].id+')">Show Comments</button></td>';
        let newRow = '<tr>'+colID+colTitle+colBody+btnShowComments+'</tr>';
        tbody.innerHTML += newRow;
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

function onDocumentFinish()
{
    loadUserData();
    loadPosts();
}