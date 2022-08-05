const API="http://127.0.0.1:5000/api"


export const questions = (data )=> {
    // console.log(token)
    // console.log(data)

    return fetch(`${API}/questions/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: `Bearer ${data.accessToken}`
      },
      body: JSON.stringify(data.finalData)
    })
      .then(response => {
        console.log(response)
        return response.json();
      })
      .catch(err => console.log(err));
  };


  export const answers = (data )=> {
    // console.log(token)
    // console.log(data)

    return fetch(`${API}/answers/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: `Bearer ${data.accessToken}`
      },
      body: JSON.stringify(data.finalData)
    })
      .then(response => {
        console.log(response)
        return response.json();
      })
      .catch(err => console.log(err));
  };


  export const votes = (data)=> {
    // console.log(token)
    console.log(data)

    return fetch(`${API}/votes/${data.question_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: `Bearer ${data.accessToken}`
      },
      body: JSON.stringify(data.finalData)
    })
      .then(response => {
        console.log(response)
        return response.json();
      })
      .catch(err => console.log(err));
  };