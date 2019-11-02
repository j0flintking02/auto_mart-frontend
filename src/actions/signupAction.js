import { ADD_USER } from './actionType';
import { toast } from "react-toastify";

export const createUser = data => (dispatch) => {
  fetch('https://automart2019.herokuapp.com/api/v1/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then((response) => {
      dispatch({
        type: ADD_USER,
        payload: response,

      });
      if (response.message === "Account has been created successfully"){
        toast.success(response.message, {
          position: 'top-right',
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }else{
        toast.error("Something went wrong", {
          position: 'top-right',
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })

      }
    }).catch(error => console.error('Fetch Error =\n', error));
};