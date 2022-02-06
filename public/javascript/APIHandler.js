class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
       axios.get(this.BASE_URL+"/characters")
       .then((data)=>{
         console.log(data);
       })
       .catch((error)=>{
         console.log(error);
       })
  }

  getOneRegister (id) {
    axios.get(this.BASE_URL+"/characters/:id")
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  createOneRegister (newInfo) {
     axios.post(this.BASE_URL+"/characters", newInfo)
     .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  updateOneRegister (id,newInfo) {
    axios.put(this.BASE_URL+"/characters/:id", newInfo)
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL+"/characters/:id")
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
