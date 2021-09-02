export const AuthService = () => {

    function setAuthUser(user) {
        localStorage.setItem("authUser", user);
    }

    function getAuthUser() {
        return isAuthenticated ? localStorage.getItem("authUser") : null;
    }

    function isAuthenticated() {
        return localStorage.getItem("authUser") ? true : false;
    }

    function removeAuthUser() {
        localStorage.removeItem("authUser");
    }


}


