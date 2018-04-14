/**
 * Created by jf on 15/10/27.
 */
import version from './version';

//0.4.x components
import {Button, ButtonArea, PreviewButton} from './button/index';
import {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} from './cell/index';
import Mask from './mask/index';
import {Form, FormCell, TextArea, Input, Switch, Radio, Slider, Checkbox, Select, Uploader, VCode, Agreement, Preview, PreviewHeader, PreviewBody, PreviewFooter, PreviewItem} from './form/index';
import Label from './label/index';
import Toast from './toast/index';
import Progress from './progress/index';
import ActionSheet from './actionsheet/index';
import Dialog from './dialog/index';
import Msg from './msg/index';
import Article from './article/index';
import Icon from './icon/index';
import {Grids, Grid, GridIcon, GridLabel} from './grid/index';
import {Panel, PanelHeader, PanelBody, PanelFooter} from './panel/index';
import {MediaBox, MediaBoxHeader, MediaBoxBody, MediaBoxTitle, MediaBoxDescription, MediaBoxInfo, MediaBoxInfoMeta} from './mediabox/index';
import {Tab, TabBody, TabBodyItem, NavBar, NavBarItem, TabBar, TabBarItem, TabBarIcon, TabBarLabel} from './tab/index';
import SearchBar from './searchbar/index';
//1.0.0 components
import {Flex, FlexItem} from './flex/index';
import Toptips from './toptips';
import {Gallery, GalleryDelete} from './gallery';
import {Footer, FooterText, FooterLinks, FooterLink} from './footer';
import LoadMore from './loadmore';
import { Picker, CityPicker, PickerGroup } from './picker';
import Badge from './badge';
//non standard
import { Popup, PopupHeader } from './popup';
import PullToRefresh from './ptr';
import InfiniteLoader from './infiniteloader';
import Swiper from './swiper';
import Page from './page';

export {
    version,

    //0.4.x
    Button,
    ButtonArea,
    Cells,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Mask,
    Form,
    FormCell,
    Radio,
    Checkbox,
    Input,
    TextArea,
    Switch,
    Select,
    Uploader,
    Label,
    Toast,
    Progress,
    ActionSheet,
    Dialog,
    Msg,
    Article,
    Icon,
    Grids,
    Grid,
    GridIcon,
    GridLabel,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    NavBar,
    NavBarItem,
    Tab,
    TabBody,
    TabBodyItem,
    TabBar,
    TabBarIcon,
    TabBarItem,
    TabBarLabel,
    SearchBar,

    //1.0.0
    Flex,
    FlexItem,
    VCode,
    Agreement,
    Toptips,
    Gallery,
    GalleryDelete,
    Footer,
    FooterText,
    FooterLinks,
    FooterLink,
    LoadMore,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewFooter,
    PreviewItem,
    PreviewButton,
    Picker,
    PickerGroup,
    CityPicker,
    Slider,
    Badge,

    //non-standard
    Popup,
    PopupHeader,
    PullToRefresh,
    InfiniteLoader,
    Swiper,
    Page
};
