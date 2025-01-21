
function toggleReadMore() {
    var container = document.querySelector('.project-container');
    var button = document.querySelector('.read-more');


    if(container.style.maxHeight == 'none') {
        container.style.maxHeight = '150px';
        button.innerText = 'Read More';
    } else {
        container.style.maxHeight = 'none';
        button.innerText = 'Read Less';
    }

}