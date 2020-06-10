export default {
  getItems
};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/katie&MattP';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

