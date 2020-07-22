// Get input element
let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterName => {
     
    let inputValue = document.getElementById('filterInput').value.toUpperCase();

    // Get names ul
    let ul = document.getElementById('names')

    // Get lis from ul
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through collection
    for(let i = 0; i< li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];

        // If match
        if(a.innerHTML.toUpperCase().indexOf(inputValue) > - 1){
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none'
        }
    }

});

// function filterName (e){
//     //Get Input value
    
//     let inputValue = document.getElementById('filterInput').value.toUpperCase();

//     // Get names ul
//     let ul = document.getElementById('names')

//     // Get lis from ul
//     let li = ul.querySelectorAll('li.collection-item');

//     // Loop through collection
//     for(let i = 0; i< li.length; i++){
//         let a = li[i].getElementsByTagName('a')[0];

//         // If match
//         if(a.innerHTML.toUpperCase().indexOf(inputValue) > - 1){
//             li[i].style.display = '';
//         } else {
//             li[i].style.display = 'none'
//         }
//     }

// }
