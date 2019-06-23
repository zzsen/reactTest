import ProjectList from './views/project/list.js'

const routes = [
    {
        key: 1,
        path: '/',
        exact: true,
        component: ProjectList
    },
    {
        key: 2,
        path: '/project/list',
        exact: true,
        component: ProjectList
    }
]

export default routes