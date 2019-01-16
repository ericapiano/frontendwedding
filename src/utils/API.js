import axios from 'axios';

export default {
  getSavedEvents: function() {
    return axios.get('/api/events')
  },
}