export const isLoggedIn = () => {
    const user = localStorage.getItem("user-secure-data");
    console.log(user);
    return user;
}