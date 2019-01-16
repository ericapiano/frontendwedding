import axios from 'axios';

export default {
  getAllEvents: function() {
    return axios.get('/api/events')
  }
}