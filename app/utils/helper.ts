export const getToken = () => {
    if(typeof Window !== "undefined") {
        return localStorage.getItem("token");
    }
    return null;
}