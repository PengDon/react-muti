import $ from '../util/util';

/**
 * searchbar 搜索框，主要实现搜索框组件一些显隐逻辑
 * @param {string} selector searchbar的selector
 *
 * @example
 * don.searchBar('#searchBar');
 */
function searchBar(selector) {
    const $eles = $(selector);

    $eles.forEach((ele) => {
        const $searchBar = $(ele);
        const $searchLabel = $searchBar.find('.don-search-bar__label');
        const $searchInput = $searchBar.find('.don-search-bar__input');
        const $searchClear = $searchBar.find('.don-icon-clear');
        const $searchCancel = $searchBar.find('.don-search-bar__cancel-btn');

        function cancelSearch(){
            $searchInput.val('');
            $searchBar.removeClass('don-search-bar_focusing');
        }

        $searchLabel.on('click', function () {
            $searchBar.addClass('don-search-bar_focusing');
            $searchInput[0].focus();
        });
        $searchInput.on('blur', function () {
            if (!this.value.length) cancelSearch();
        });
        $searchClear.on('click', function () {
            $searchInput.val('');
            $searchInput[0].focus();
        });
        $searchCancel.on('click', function () {
            cancelSearch();
            $searchInput[0].blur();
        });
    });

    return $eles;
}
export default searchBar;
