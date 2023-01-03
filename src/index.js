import Actionsheet from "../packages/action-sheet";
import Badge from "../packages/badge";
import Button from "../packages/button";
import Cell from "../packages/cell";
import CellGroup from "../packages/cell-group";
import Checkbox from "../packages/checkbox";
import CheckboxGroup from "../packages/checkbox-group";
import Collapse from "../packages/collapse";
import Divider from "../packages/divider";
import Drawer from "../packages/drawer";
import Grid from "../packages/grid";
import GridItem from "../packages/grid-item";
import HeaderBar from "../packages/header-bar";
import Icon from "../packages/icon";
import Index from "../packages/index";
import IndexItem from "../packages/index-item";
import Loadmore from "../packages/loadmore";
import Message from "../packages/message";
import Modal from "../packages/modal";
import $Modal from "../packages/modal/modal.js";
import Navbar from "../packages/navbar";
import NavbarGroup from "../packages/navbar-group";
import NoticeBar from "../packages/notice-bar";
import Progress from "../packages/progress";
import Radio from "../packages/radio";
import RadioGroup from "../packages/radio-group";
import Rate from "../packages/rate";
import Slider from "../packages/slider";
import Spinner from "../packages/spinner";
import Sticky from "../packages/sticky";
import StickyButton from "../packages/sticky-button";
import StickyButtonItem from "../packages/sticky-button-item";
import StickyItem from "../packages/sticky-item";
import Swipeout from "../packages/swipeout";
import Switch from "../packages/switch";
import Tag from "../packages/tag";
import Timeline from "../packages/timeline";
import TimelineItem from "../packages/timeline-item";
import Toast from "../packages/toast";

import "./assets/style/index.scss";

const components = [
  Actionsheet,
  Badge,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Collapse,
  Divider,
  Drawer,
  Grid,
  GridItem,
  HeaderBar,
  Icon,
  Index,
  IndexItem,
  Loadmore,
  Message,
  Modal,
  $Modal,
  Navbar,
  NavbarGroup,
  NoticeBar,
  Progress,
  Radio,
  RadioGroup,
  Rate,
  Slider,
  Spinner,
  Sticky,
  StickyButton,
  StickyButtonItem,
  StickyItem,
  Swipeout,
  Switch,
  Tag,
  Timeline,
  TimelineItem,
  Toast,
];

const install = function (Vue) {
  components.map((component) => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = Message;
  Vue.prototype.$toast = Toast;
  Vue.prototype.$modal = $Modal;
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const version = "1.2.0";

export {
  install,
  version,
  Actionsheet,
  Badge,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Collapse,
  Divider,
  Drawer,
  Grid,
  GridItem,
  HeaderBar,
  Icon,
  Index,
  IndexItem,
  Loadmore,
  Message,
  Modal,
  Navbar,
  NavbarGroup,
  NoticeBar,
  Progress,
  Radio,
  RadioGroup,
  Rate,
  Slider,
  Spinner,
  Sticky,
  StickyButton,
  StickyButtonItem,
  StickyItem,
  Swipeout,
  Switch,
  Tag,
  Timeline,
  TimelineItem,
  Toast,
};


export default {
  install,
  version,
  Actionsheet,
  Badge,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Collapse,
  Divider,
  Drawer,
  Grid,
  GridItem,
  HeaderBar,
  Icon,
  Index,
  IndexItem,
  Loadmore,
  Message,
  Modal,
  Navbar,
  NavbarGroup,
  NoticeBar,
  Progress,
  Radio,
  RadioGroup,
  Rate,
  Slider,
  Spinner,
  Sticky,
  StickyButton,
  StickyButtonItem,
  StickyItem,
  Swipeout,
  Switch,
  Tag,
  Timeline,
  TimelineItem,
  Toast,
};