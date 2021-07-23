const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '21800674-819b02d10e21d1802ff230ab2';

function fetchQuery(searchQuery, page) {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}
      &image_type=photo&orientation=horizontal&page=
      ${page}&per_page=12`,
  ).then(res => res.json());
}

export default fetchQuery;