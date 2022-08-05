const API=process.env.REACT_APP_API_URL
// const API = "https://anurag-stackoverflow-clone.herokuapp.com/api"

export const getAllQuestions = async (question_id) => {
  return await fetch(`${API}/questions/${question_id}`, { method: "GET" })
    .then(response => {
      console.log(response)
      return response.json();
    })
    .catch(err => console.log(err));
};




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