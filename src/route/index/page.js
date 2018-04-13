import asyncComponent from '../../utils/asyncComponent';

export default {
    Home:asyncComponent(()=>import('../../models/index/app'))
};