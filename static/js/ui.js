class UI {

    constructor () {
       this.url = ``;
       this.loader();
    }

    // function to get all stores from database
    displayAllStores() {
        store_api.getAllStores()
        .then(stores => {
            let store_list = stores.stores.stores
            code_block.innerHTML = JSON.stringify(store_list);
        });
    }

   // function to get only one store
   oneStore(url) {
 
       store_api.getOneStoreFromApi(url)
         .then( store => {
            
            code_block.innerHTML = JSON.stringify(store);
            
         });
   }

   // query all stores
   storesByQuery() {     
        store_api.getAllStores()
        .then(stores => {
            let store_list = stores.stores.stores
            code_block.innerHTML = JSON.stringify(store_list);
        });
   }

   // query one store
   queryOneStore(id) {
       let url_builder = `http://127.0.0.1:5000/store/${id}`;

   
       store_api.getOneStoreFromApi(url_builder)
         .then( store => {
            
            code_block.innerHTML = JSON.stringify(store);
            
         });
   }

   // make search on stores by specified search term
   searchStoresByNAME(q) {
    
    store_api.searchByQueryParam(q)
         .then( stores => {
            code_block.innerHTML = JSON.stringify(stores);
         })
   }

   // ITEMS SECTIONS
       // get all items from the store
       getAllItems(){
           store_api.getAllItemsFromApi()
             .then( all_items => {
                code_block.innerHTML = JSON.stringify(all_items);
             });
       }

        //  get one item by the specified id
        itemById(id) {
            store_api.getOneItem(id)
                .then( itm => {
                    code_block.innerHTML = JSON.stringify(itm);
                });
        }

        // search all items from api by search term
        searchItemsByName(search_term) {
            store_api.searchItemsFromApi(search_term)
                    .then(res => {
                    code_block.innerHTML = JSON.stringify(res);
                    });
        }

        //  function to perform live search
        liveSearching(param) {
            store_api.liveSearchingFromApi(param)
               .then(res => {
                    let html = '';
                    let items = res.items;

                    if(items.length > 0) {
                        counter.innerHTML = `${items.length} items`
                    }else {
                        counter.style.color = 'orangered';
                        counter.innerHTML = `0 items found`
                    }

                    items.forEach( (item, index) => {

                        html += `
                           <li class="list-group-item" data-name="${item.id}">${index}. ${item.name} -- $${item.price}</>
                        `;
                        
                    });

                    result_list.innerHTML = html;
                });
        }

        displaySelctedItem(item_id) {
            store_api.displaySelctedItemFromApi(item_id)
                .then( res => {                 
                    let item = res.item;
                    let html = '';
                   
                    if(Object.keys(item).length > 0) {  
                                      
                        html += `
                            <li class="list-group-item">${item.name}</li>
                        `; 
                        
                        // clear the result div
                        result_list.innerHTML = '';
                    }

                    displaying_data.innerHTML = html;
                });
        }

        // function to fetch all items from api
        responseItems(name) {
            store_api.getAllItemsFromApi(name)
       
                .then( res => {
                    let html = '';
                    let items = res.items;

                    if(items.length > 0) {
                        counter.innerHTML = `${items.length} items`
                       
                        items.forEach( item => {
                            html += `
                                <li class="list-group-item">${item.name}</li>
                            `; 
                        });

                    }else {
                        counter.style.color = 'orangered';
                        counter.innerHTML = `0 items found`
                    }
                    
                    // clear the result div
                    result_list.innerHTML = '';
                    displaying_data.innerHTML = html;
                });
        }

        // function to perform general loading
        loader() {
            const spinner = document.querySelector('#spinning');

            if(spinner) {
                spinner.style.display = 'block';
            }       
        }

}