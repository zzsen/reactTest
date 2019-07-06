import ProjectTab from './views/project/tab.js'
// import test from './views/project/test.js'

const routes = [
    {
        key: 1,
        path: '/project/list',
        exact: true,
        component: ProjectTab
    },
    {
        key: 2,
        path: '/two_one',
        exact: true,
        component: ProjectTab
    },
    {
        key: 3,
        path: '/two_two',
        exact: true,
        component: ProjectTab
    },
    {
        key: 4,
        path: '/three',
        exact: true,
        component: ProjectTab
    }
]

export default routes