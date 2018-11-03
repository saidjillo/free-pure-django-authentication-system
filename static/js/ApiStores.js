class StoreApi {

    constructor(){
        this.url = `http://127.0.0.1:5000/stores`;
        this.getAllStores();
    }



    async getAllStores() {
        const stores_response = await fetch(this.url);

        // wait for response and return as json
        const stores = await stores_response.json();

        // return stores object
        return {          
            stores
        }

    }

    async getOneStoreFromApi(url) {

        const store = await fetch(url);

        // wait for response and return a json object
        const item_store = await store.json();
        
        // return the store
        return {
            item_store
        }

    }

    // function to search for stores base on search term
    async searchByQueryParam(q) {
            const stores_response = await fetch(`http://127.0.0.1:5000/stores/${q}`);

            // wait for response and return as json
            const stores = await stores_response.json();

            // return stores object
            return {          
                stores
            }
    }


    // ITEMS SECTIONS
      // get all items from api
      async getAllItemsFromApi() {

          const all_items = await fetch('http://127.0.0.1:5000/items');

          // wait for response and return json
          const items = await all_items.json()

          // return items
          return {
              items
          }

      }

      // get one item from api with the specified id
      async getOneItem(id) {
          const one_item = await fetch(`http://127.0.0.1:5000/search/${id}`);

          // wait for response and return json
          const item = await one_item.json();

          // return item
          return {
              item
          }
      }

      // searching items from api by user input name
      async searchItemsFromApi(search_term) {
          const items_response = await fetch(`http://127.0.0.1:5000/item/search/${search_term}`);

          // wait for response and return json
          const items = await items_response.json();

          // return items as json object
          return {
              items
          }
      }

      // function to perform live search from api
      async liveSearchingFromApi(param) {
          const all_items = await fetch(`http://127.0.0.1:5000/item/search/${param}`);

          // wait for response and return json
          const items = await all_items.json();

          return {
              items
          }

      }

      // display selected item from the api
      async displaySelctedItemFromApi(item_id) {
          const one_item = await fetch(`http://127.0.0.1:5000/search/${item_id}`);

          // wait for response and return json
          const item = await one_item.json();

          return {
              item
          }
      }

      // search response from api
      async getAllItemsFromApi(name) {
          const all_items = await fetch(`http://127.0.0.1:5000/item/search/${name}`);

          // wait for response and return json
          const items = await all_items.json();

          return {
              items
          }
          
      }
 

}