import ProjectTab from './views/project/tab.js'
import test from './views/project/test.js'

const routes = [
    {
        key: 1,
        path: '/',
        exact: true,
        component: test
    },
    {
        key: 2,
        path: '/project/list',
        exact: true,
        component: ProjectTab
    }
]

export default routes