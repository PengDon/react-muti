import asyncComponent from '../../utils/asyncComponent';

export default {
    Login:asyncComponent(()=>import('../../models/login/app')),
    Home:asyncComponent(()=>import('../../models/index/app')),
    Auth:asyncComponent(()=>import('../../models/authentication/app')),
    Auth2:asyncComponent(()=>import('../../models/authentication/app2')),
    Bank:asyncComponent(()=>import('../../models/bank/app'))
};