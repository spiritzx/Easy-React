import React from 'react'
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

let pieChartOutlined = () => <PieChartOutlined />
let appstoreOutlined = () => <AppstoreOutlined />
let mailOutlined = () => <MailOutlined />
let desktopOutlined = () => <DesktopOutlined />
let cesktopOutlined = () => <ContainerOutlined />


export default {
  pieChartOutlined: pieChartOutlined(),
  appstoreOutlined: appstoreOutlined(),
  mailOutlined: mailOutlined(),
  cesktopOutlined: cesktopOutlined(),
  desktopOutlined: desktopOutlined()
}
