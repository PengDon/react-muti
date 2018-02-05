import asyncComponent from '../../utils/asyncComponent';
import {App,Detail} from '../../models/comment/app';

const compentApp = asyncComponent(()=>import('../../models/comment/app'))

export default {
    Home:asyncComponent(()=>import('../../models/index/app')),
    Login:asyncComponent(()=>import('../../models/login/app')),
    Detail:asyncComponent(()=>import('../../models/detail/app')),
    My:asyncComponent(()=>import('../../models/my/app')),
    Test:asyncComponent(()=>import('../../models/test/app')),
    compentApp
    // CommentApp:App,
    // CommentDetail:Detail
};