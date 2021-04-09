import axios from 'axios'
import authHeader from './AuthHeader'
import API_URL from '../constant/apiUrl'

class UserService {

  sendMails(body) {
    try {
      return axios.post(API_URL + 'mail/contact',
        body
      ).then(response => {
        return response.data;
      }).catch((err) => {
        return { err, data: { msg: 'Server error!!!' } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }

  
  sendMailsInscripcion(body) {
    try {
      return axios.post(API_URL + 'mail/inscripcion-contacto',
        body
      ).then(response => {
        return response.data;
      }).catch((err) => {
        return { err, data: { msg: 'Server error!!!' } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }


  
  // sendMails(body) {
  //   try {
  //     return axios.post(API_URL + 'mail/contact',
  //       body
  //     ).then(response => {
  //       return response.data;
  //     }).catch((err) => {
  //       return { err, data: { msg: 'Server error!!!' } };
  //     });

  //   } catch (error) {
  //     console.log('error: ', error);
  //   }
  // }


  sendMailsEmpresa(body) {
    try {
      return axios.post(API_URL + 'mail/contactEmpresa',
        body
      ).then(response => {
        return response.data;
      }).catch((err) => {
        return { err, data: { msg: 'Server error!!!' } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }

}
export default new UserService();