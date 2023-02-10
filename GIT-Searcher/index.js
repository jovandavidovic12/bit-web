
var url = 'https://api.github.com/search/users?q=';
var input = $('input');
var errorElement = $(".alert");
var cardHolder = $('.cardHolder');

$(document).ready(function(){
    search('a')
});

function search(input){
    $.ajax({
        url: `${url}${input}`,
        method : "GET",
    }).done(function(response){
        cardHolder.html("");
        if(!response|| !response.items.lenght){
            errorElement.text("No result");
            errorElement.toggle()
        }

        response.items.forEach(function(item){
            var card = $(`<div class="col-4"><div class="card" style="width:18rem">
            <img class="card-img-top" src="${item.avatar_url}" alt="card image cap">
            <div class="card-body">
            <h5 class="card-title">${item.login}</h5>
            <a href="${item.html_url}" target="_blank" class="btn btn-primary"> Go to profile</a>
            </div>
            </div>
            </div>` )
            cardHolder.append(card);
        })
    }).fail(function(){
        errorElement.text('Network Error');
        errorElement.toggle()
    })
}

function goToRepositories(repoUrl){
    localStorage.setItem("user_repo", repoUrl);
    location.assign('index.html');
}

function searchHandler(event){
    if (event.keyCode == 13){
        var inputValue = input.val();
        input.blur();
        if(!inputValue){
            errorElement.text('INPUT REQ');
            errorElement.toggle();
            return;
        }
        search(inputValue);
    }
}

function clearInput(){
    input.val("");
    errorElement.text("");
    errorElement.css("display", "none");

}

input.on("keydown", searchHandler);
input.on("focus", clearInput);