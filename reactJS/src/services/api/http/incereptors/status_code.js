export default (instance) => {
  instance.interceptors.response.use(response => {
    if (response.data && [200, 201].includes(response.data.code)) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  })
}
