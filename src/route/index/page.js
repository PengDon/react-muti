import asyncComponent from '../../utils/asyncComponent';
// import Home from '../../models/index/index';

export default {
    Home:asyncComponent(()=>import('../../models/index/index'))
};