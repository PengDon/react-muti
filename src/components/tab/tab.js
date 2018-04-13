import $ from '../util/util';

/**
 * tab tab导航栏
 * @param {string} selector tab的selector
 * @param {object=} options 配置项
 * @param {number=} [options.defaultIndex=0] 初始展示的index
 * @param {function=} options.onChange 点击tab时，返回对应的index
 *
 * @example
 * don.tab('#tab',{
 *     defaultIndex: 0,
 *     onChange: function(index){
 *         console.log(index);
 *     }
 * });
 */
function tab(selector, options = {}) {
    const $eles = $(selector);
    options = $.extend({
        defaultIndex: 0,
        onChange: $.noop
    }, options);

    $eles.forEach((ele) => {
        const $tab = $(ele);
        const $tabItems = $tab.find('.don-navbar__item, .don-tabbar__item');
        const $tabContents = $tab.find('.don-tab__content');

        $tabItems.eq(options.defaultIndex).addClass('don-bar__item_on');
        $tabContents.eq(options.defaultIndex).show();

        $tabItems.on('click', function () {
            const $this = $(this), index = $this.index();

            $tabItems.removeClass('don-bar__item_on');
            $this.addClass('don-bar__item_on');

            $tabContents.hide();
            $tabContents.eq(index).show();

            options.onChange.call(this, index);
        });
    });

    return this;
}
export default tab;
