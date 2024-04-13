// Assuming you have some kind of user authentication mechanism and a way to store the token, for example in local storage

interface User {
    token: string;
    // username:  string
}
  
const getUser = (): User => {
    // Get the token from local storage or any other storage mechanism you're using
    const token = localStorage.getItem('user') || '' // Ensure token is a string or an empty string
    console.log(token)
    return { token };
};
  
export default getUser;
  