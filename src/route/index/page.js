import asyncComponent from '../../utils/asyncComponent';

export default {
    Home:asyncComponent(()=>import('../../models/index/app')),
    Login:asyncComponent(()=>import('../../models/login/app')),
    Detail:asyncComponent(()=>import('../../models/detail/app'))
};