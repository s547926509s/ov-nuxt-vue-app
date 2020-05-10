import Vue from 'vue'
import {
  Tag,
  Col,
  Row,
  Spin,
  List,
  Tabs,
  Icon,
  Menu,
  Form,
  Card,
  Calendar,
  Steps,
  Badge,
  Input,
  Table,
  Radio,
  Modal,
  Alert,
  Switch,
  Upload,
  Avatar,
  Layout,
  Drawer,
  Select,
  Button,
  Divider,
  Tooltip,
  Popover,
  Timeline,
  Checkbox,
  Dropdown,
  DatePicker,
  Breadcrumb,
  Pagination,
  Popconfirm,
  InputNumber,
  AutoComplete,
  LocaleProvider,
  Empty,
  notification,
  message
} from 'ant-design-vue'

message.config({ maxCount: 3 })
Vue.prototype.$message = message
Vue.prototype.$notification = notification

export default () => {
  Vue.use(Tag)
  Vue.use(Col)
  Vue.use(Row)
  Vue.use(Spin)
  Vue.use(List)
  Vue.use(Tabs)
  Vue.use(Icon)
  Vue.use(Menu)
  Vue.use(Form)
  Vue.use(Card)
  Vue.use(Calendar)
  Vue.use(Steps)
  Vue.use(Badge)
  Vue.use(Input)
  Vue.use(Table)
  Vue.use(Radio)
  Vue.use(Modal)
  Vue.use(Alert)
  Vue.use(Switch)
  Vue.use(Upload)
  Vue.use(Avatar)
  Vue.use(Layout)
  Vue.use(Drawer)
  Vue.use(Select)
  Vue.use(Button)
  Vue.use(Divider)
  Vue.use(Tooltip)
  Vue.use(Popover)
  Vue.use(Timeline)
  Vue.use(Checkbox)
  Vue.use(Dropdown)
  Vue.use(DatePicker)
  Vue.use(Breadcrumb)
  Vue.use(Pagination)
  Vue.use(Popconfirm)
  Vue.use(InputNumber)
  Vue.use(Empty)
  Vue.use(AutoComplete)
  Vue.use(LocaleProvider)
}
