

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      return axios.get(this.BASE_URL+"/characters");
    
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL+"/characters/"+id)
  }

  createOneRegister (newInfo) {
     return axios.post(this.BASE_URL+"/characters", newInfo)
  }

  updateOneRegister (id,newInfo) {
    return axios.put(this.BASE_URL+"/characters/:"+id, newInfo)
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL+"/characters/"+id)
  }
}

