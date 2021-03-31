export default function ({
  $axios,
  redirect
}, inject) {

  // Create a custom axios instance
  const api = $axios.create({

    headers: {
      common: {
        'Accept': 'text/plain, */*',
      },

    }
  });
  api.onRequest(config => {
    if (localStorage.getItem('qAccessToken') != null) {
      api.setHeader('Authorization', 'Token ' + localStorage.getItem('qAccessToken'));
    }
    console.log('Making request to ' + config.url);
  });

  api.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
  });

  console.log(process.env.NODE_ENV);
  api.setBaseURL(process.env.NODE_ENV === "development" ? process.env.releaseUrl : process.env.releaseUrl);

  // Inject to context as $api
  inject('api', api);
}
