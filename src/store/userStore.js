import {makeAutoObservable} from "mobx";

class UserStore {
    constructor() {
        this._loadingUser = false
        this._loadingRepos = false
        this._user = null
        this._repos = null
        this._error = null
        makeAutoObservable(this)
    }

    setLoadingUser(bool) {
        this._loadingUser = bool
    }

    setLoadingRepos(bool) {
        this._loadingRepos = bool
    }

    setUser(data) {
        this._user = data
    }

    setError(message) {
        this._error = message
    }

    setRepos(data) {
        console.log(this._repos)
        this._repos = data
    }

    get repos() {
        return this._repos
    }

    get user() {
        return this._user
    }

    get loadingUser() {
        return this._loadingUser
    }

    get loadingRepos() {
        return this._loadingRepos
    }

    get error() {
        return this._error
    }


}

export default UserStore