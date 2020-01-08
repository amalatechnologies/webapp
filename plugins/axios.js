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
  api.onRequest(config => {
    console.log('Making request to ' + config.url);
  });

  api.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
  });

  // Set baseURL to something different
  api.setBaseURL('https://kopasmart.herokuapp.com/api/');

  // Inject to context as $api
  inject('api', api);
}
