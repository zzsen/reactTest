import ProjectTab from './views/project/tab.js'
import ProjectDetail from './views/project/detail.js'
// import test from './views/project/test.js'

const routes = [
    {
        key: '/project/list',
        path: '/project/list',
        exact: true,
        component: ProjectTab
    },
    {
        key: '/project/:id',
        path: '/project/:id',
        exact: true,
        component: ProjectDetail
    },
    {
        key: '/api/list',
        path: '/api/list',
        exact: true,
        component: ProjectTab
    },
    {
        key: 3,
        path: '/two_one',
        exact: true,
        component: ProjectTab
    },
    {
        key: 4,
        path: '/two_two',
        exact: true,
        component: ProjectTab
    },
    {
        key: 5,
        path: '/three',
        exact: true,
        component: ProjectTab
    }
]

export default routes