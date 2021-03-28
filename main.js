// get [{...},{...},] array
function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
  }
  
  // change a list tag array to htmlString
  function displayItems(items){
    const itemList = document.querySelector('.items');
    itemList.innerHTML = items.map(item=>makeAList(item)).join('');
  }
  
  // make a list tag array
  function makeAList(item){
    return `<li>
    <img src= ${item.img} alt="${item.type}">
    <span class="itemInfo">${item.name}</span>
    </li>`;
  }
  
  // items=[{...},{...}]
  function setEventListners(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener("click", () => displayItems(items));
    buttons.addEventListener("click", event => onButtonClick(event,items));
  }
  
  
  function onButtonClick(event, items){
    const type = event.target.dataset.type;
    if (type == null){
        return;
    } 
    const filtered = items.filter(item => item.type == type);
    displayItems(filtered);
    
  }
  
  
  loadItems()
    .then(items => {
        displayItems(items);
        setEventListners(items);
    })
    .catch(console.log);