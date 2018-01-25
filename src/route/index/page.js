import asyncComponent from '../../utils/asyncComponent';
// import Home from '../../models/index/index';

export default {
    Home:asyncComponent(()=>import('../../models/index/app')),
    Login:asyncComponent(()=>import('../../models/login/app')),
    My:asyncComponent(()=>import('../../models/my/app'))
};