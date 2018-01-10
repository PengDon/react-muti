import Mock from 'mockjs';

// 模拟数据
Mock.mock('/home/menu', {
    'list|1-9': [{
      'id|+1': 1,
      'name': '@cname',
      'text':'@paragraph',
      'address':'@province',
      'img':"@image('200x100', '#ffcc33', '#FFF', 'png', 'の')"
    }]
});

Mock.mock('/names', {
  'list|1-9': [{
    'id|+1': 1,
    'name': '@cname',
    'age|16-60':1,
    'address':'@province'
  }]
});
