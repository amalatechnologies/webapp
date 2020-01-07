export default function ({
  $axios,
  redirect
}, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  });

  // Set baseURL to something different
  api.setBaseURL('https://kopasmart.herokuapp.com/api');

  // Inject to context as $api
  inject('api', api);
}
