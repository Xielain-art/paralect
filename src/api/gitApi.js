import {instance} from "./index";

export const gitApi = {
    async getUser(username) {
        const {data} = await instance.get(`${username}`, {})
        return data
    },
    async getRepos(username, page) {
        const {data} = await instance.get(`${username}/repos`, {

        })
        return data
    }
}
