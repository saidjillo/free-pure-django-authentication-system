// classess 
const store_api = new StoreApi();
const ui = new UI();

// variables
const stores_all = document.querySelector('#all-stores');
const code_block = document.querySelector('#json_resp');
const form_1st = document.querySelector('#form-1');
const form_2nd = document.querySelector('#form-2');
const form_3rd = document.querySelector('#form-3');
const q_param = document.querySelector('#query');
const search_param = document.querySelector('#searching');
const search_form = document.querySelector('.form-control');
const results = document.querySelector('.result_div');
const result_list = document.querySelector('#item-listing');
const counter = document.querySelector('.rounded');
const item_show = document.querySelector('.item_show');
const search_btn = document.querySelector('#basic-addon2');
const displaying_data  = document.querySelector('#displaying');

// form items
const form_item_1 = document.querySelector('#form-item-1');
const form_item_2 = document.querySelector('#form-item-2');
const form_item_3 = document.querySelector('#form-item-3');



// event listeners
eventListeners();

// when document loads
document.onreadystatechange = function() {
    if(document.readyState == 'complete'){
        get_all_stores();
    }
}

function eventListeners(){
    if(form_1st){
        form_1st.addEventListener('click', queryStores);
        form_2nd.addEventListener('click', search_queryStores);
        form_3rd.addEventListener('click', searchByName);
    }
    

    if(stores_all) {
        stores_all.addEventListener('click', getItem);
    }


   // form items
   if(form_item_1) {
        form_item_1.addEventListener('click', query_all_items);
        form_item_2.addEventListener('click', query_item_by_id);
        form_item_3.addEventListener('click', search_items_by_name);
   }

   // search form
   if(search_form) {
        search_btn.addEventListener('click', displayAllSearch)
        search_form.addEventListener('keyup', liveSearch);
        result_list.addEventListener('click', displaySearchResult);
   }


}
/////  event listeners ends

// functions starts here
function  get_all_stores(){

    if(stores_all) {
        setTimeout( () => {
            ui.displayAllStores();
        }, 5000);     
    }

}

// get stores
function queryStores(e){
    e.preventDefault();

    if(form_1st){
        // ui.loader();
        setTimeout( () => {

            ui.storesByQuery();

        }, 5000);
    }
}

// get item
function getItem(e){
    e.preventDefault();

    if(e.target.classList.contains('list-group-item')){
        ui.oneStore(e.target.childNodes[3].dataset.href);
    }
}

// search stores
function search_queryStores(e) {
    e.preventDefault();

    if(form_2nd){
        let q = q_param.value;
        if(q  !== '') {
            ui.queryOneStore(q);
        }
    }
}

// search store by name
function searchByName(e) {
    e.preventDefault();

    if(form_3rd){
        q = search_param.value;
        if(q !== ''){
            ui.searchStoresByNAME(q);
        }
    }
}


// items manipulation
function query_all_items(e) {
    e.preventDefault();

  //    check if form exist on the page
  if(form_item_1) {
      ui.getAllItems();
  }

}


function query_item_by_id(e) {
    e.preventDefault();

    let id = q_param.value;

    if(id !== '') {
        ui.itemById(id);
    }
}


function search_items_by_name(e) {
    e.preventDefault();

    let search_term = search_param.value;

    if(search_term !== '') {
        ui.searchItemsByName(search_term);
    }

}


// live search function
function liveSearch(){
    
    let param = search_form.value;
    if(param !== '') {
       ui.liveSearching(param);
    }

}

function displaySearchResult(e) {
    
    if(e.target.classList.contains('list-group-item')) {
        let item_id = e.target.dataset.name;
        ui.displaySelctedItem(item_id);
    }

}


function displayAllSearch(e) {
    e.preventDefault();

    let name = search_form.value;

    if(name !== ''){
        ui.responseItems(name)
    }

}
// functions ends here