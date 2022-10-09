const deleteAllEl = document.querySelector("#delete-all");
const todolistItemContainerEl = document.querySelector("#todolistitem-container");
const todolistItemContainerEl1 = document.querySelector("#todolistitem-container-1");
const todolistItemContainerEl2 = document.querySelector("#todolistitem-container-2");


deleteAllEl.addEventListener('click', () => {
    const isUserAgree = confirm("Rostan o'chirmoqchimisiz?");
    console.log(isUserAgree);
    if(isUserAgree){
      todolistItemContainerEl.innerHTML = '';
    }
  })
    const deleteAllEl1 = document.querySelector("#delete-all-1");
    deleteAllEl1.addEventListener('click', () => {
    const isUserAgree = confirm("Rostan o'chirmoqchimisiz?");
    console.log(isUserAgree);
    if(isUserAgree){
      todolistItemContainerEl1.innerHTML = '';
     }
    })
  const deleteAllEl2 = document.querySelector("#delete-all-2");
deleteAllEl2.addEventListener('click', () => {
    const isUserAgree = confirm("Rostan o'chirmoqchimisiz?");
    console.log(isUserAgree);
    if(isUserAgree){
      todolistItemContainerEl2.innerHTML = '';
    }
  })
