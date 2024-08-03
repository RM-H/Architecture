import axios from "axios";

export const url = 'https://wenar.hemaseh.tv/api/v1'
export const baseUrl='https://wenar.hemaseh.tv'









// -------------------------------------registration


export const getCode = (phone) => {
  return axios.post(`${url}/phone`,{phone})
}


export const verifyCode = (code)=>{
return axios.post(`${url}/Code`,{code})
}


export const registerWorkman = (info) => {
  return axios.post(`${url}/save`,{info})
}






// -------------------------------------profile

export const Workmaninfo = (token) => {
  return axios.get(`${url}/workman/info`, token)
}


export const WorkmanEdit = (info) => {
  return axios.post(`${url}/workman/editprofile`, info)
}

export const WorkmanaddCertificate = (info) => {
  return axios.post(`${url}/workman/certificateadd`, info)
}

export const WorkdmanremoveCertificate = (id) => {
  return axios.post(`${url}/workman/certificatedell` , id)
}

