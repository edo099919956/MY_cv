let image_enlargement_open = document.querySelector('.image_enlargement')
let parent_cont = document.querySelector('.parent')

function openImg() {
    image_enlargement_open.style.cssText = 'opacity:1;z-index: 1;'
    parent_cont.style.cssText = 'opacity:0'
}
function closeImg() {
    image_enlargement_open.style.cssText = 'opacity:0,z-index: 0;'
    parent_cont.style.cssText = 'opacity:1'
}