

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/katie&MattP';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

const createItem = (name) => {
  const newItem = JSON.stringify( {
    name: name
  });
  
  return fetch(`${BASE_URL}/items`, 
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: newItem
    });
};

const updateItem = (id, updateData) => {
 
  return fetch(`${BASE_URL}/items/${id}`, 
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: updateData
    });
};



export default {
  getItems,
  createItem,
  updateItem
};
