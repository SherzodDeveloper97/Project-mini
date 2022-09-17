var click = document.querySelector('.click');
var content_block = document.querySelector('.content_block');

click.addEventListener('click', function(e) {
    content_block.classList.toggle('hidden');
    content_block.classList.toggle('active');
})