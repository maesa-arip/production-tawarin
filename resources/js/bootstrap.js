import _ from 'lodash';

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import axios from 'axios';

window.Pusher = Pusher;
window._ = _;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */



// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     wsHost: import.meta.env.VITE_PUSHER_HOST ?? `ws-${import.meta.env.VITE_PUSHER_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     // forceTLS: true,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });


window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'e1c698f0a47f6cfd704c',
  cluster: 'ap1',
  forceTLS: true
});


// window.Echo.channel('test').listen('.TestEvent', (e)=> {
//   console.log('Berhasil');
//   console.log(e);
// });

// window.Echo.channel('chats.aaf00402-ca31-11ed-9278-10e7c6e2b651').listen('.MessageSent', (e)=> {
//   console.log('Berhasil');
//   console.log(e);
// });