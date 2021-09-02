class AuthService {

    //constructor(){}

    getLoginProcessingUrl() {
        return "https://mgg-ecomm-api.herokuapp.com/api/auth/signin";
    }

    getLoggedUserDetailUrl() {
        return "https://mgg-ecomm-api.herokuapp.com/api/users/me";
    }

    setAuthUser(user) {
        localStorage.setItem("authUser", JSON.stringify(user));
    }

    getAuthUser() {
        return this.isAuthenticated() ? localStorage.getItem("authUser") : null;
    }

    removeAuthUser() {
        localStorage.removeItem("authUser");
    }

    isAuthenticated() {
        return localStorage.getItem("authUser") ? true : false;
    }

    getAuthUserFullName() {
        return this.isAuthenticated() ? JSON.parse(this.getAuthUser()).firstName + " " + JSON.parse(this.getAuthUser()).lastName : "";
    }

    getAuthUserRole() {
        return "";
    }

    getAuthUserID() {
        return "";
    }

    getAuthUserLastLogin() {
        return "";
    }

}

export default new AuthService();


