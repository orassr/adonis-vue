'use strict'

const Project = use('App/Models/Project')
const AuthorizationService = use('App/Services/AuthorizationService')

class ProjectController {
    async index({ auth }) {
        const user = await auth.getUser()
        console.log(user)
        return await user.projects().fetch()
    }

    async create({ auth, request }) {
        const user = await auth.getUser()
        const { title } = request.all()
        const project = new Project()
            // project.title = title
        project.fill({
            title
        })
        await user.projects().save(project)
        return project
    }

    async destroy({ auth, request, params }) {
        // fetch the user who made the request.
        const user = await auth.getUser()
            // getting the project id with params
        const { id } = params
        // fetch the project that associate with the id
        const project = await Project.find(id)
            // verify the user has access to the project
            // if (project.user_id !== user.id) {
            //     return response.status(403)
            // }
        AuthorizationService.verifyPermission(project, user)
        await project.delete()
        return project
    }

    async update({ auth, request, params }) {
        const user = await auth.getUser()
        const { id } = params
        const project = await Project.find(id)
        AuthorizationService.verifyPermission(project, user)
        project.merge(request.only('title'))
        await project.save()
        return project
    }
}
module.exports = ProjectController