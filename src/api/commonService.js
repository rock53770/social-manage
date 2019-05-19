import axios from './axios'

export default {
  upload(data) {
    return axios({
      method: 'post',
      url: '/common/file/upload',
      data: data,
    });
  },
}
