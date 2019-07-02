import ProjectTab from './views/project/tab.js'

const routes = [
    {
        key: 1,
        path: '/',
        exact: true,
        component: ProjectTab
    },
    {
        key: 2,
        path: '/project/list',
        exact: true,
        component: ProjectTab
    }
]

export default routes