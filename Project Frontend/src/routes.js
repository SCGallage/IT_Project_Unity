/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
//import Icons from "views/Icons.js";
//import Map from "views/Map.js";
//import Notifications from "views/Notifications.js";
//import Rtl from "views/Rtl.js";
//import TableList from "views/TableList.js";
//import Typography from "views/Typography.js";
//import UserProfile from "views/UserProfile.js";

import EmergencyPro from "./components/Ambulance/EmergencyPro";
import ViewAmbulanceDetails from "./components/Ambulance/ViewAmbulanceDetails";
import EditAmbulanceTimeSlot from "./components/Ambulance/EditAmbulanceTimeSlot";
import AddAmbulanceTimeSlot from "./components/Ambulance/AddAmbulanceTimeSlot";
import EmergencyBooking from "./components/Ambulance/EmergencyBooking";
import ViewAmbulanceTimeShedule from "./components/Ambulance/ViewAmbulanceTimeShedule";
import EditAmbulanceDetails from "./components/Ambulance/EditAmbulanceDetails";
import UserProfile from "./views/UserProfile";
import AddAmb from "./views/UserProfile";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },

    //Emergency properties
  {
    path: "/emergency-pro",
    name: "Emergency",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: EmergencyPro,
    layout: "/admin"
  },

  {
    path: "/view-ambulance-details",
    rtlName: "الرموز",
    component: ViewAmbulanceDetails,
    layout: "/admin"
  },

  {
    path: "/add-ambulance",
    rtlName: "الرموز",
    component: AddAmb,
    layout: "/admin"
  },
  {
    path: "/edit-ambulance{id}",
    rtlName: "الرموز",
    component: EditAmbulanceDetails,
    layout: "/admin"
  },
  {
    path: "/view-ambulance-timeslot",
    rtlName: "الرموز",
    component:ViewAmbulanceTimeShedule,
    layout: "/admin"
  },
  {
    path: "/edit-ambulance-details",
    rtlName: "الرموز",
    component:EditAmbulanceDetails,
    layout: "/admin"
  },
  {

    path: "/edit-ambulance-timeslot/{id}",
    rtlName: "الرموز",
    component: EditAmbulanceTimeSlot,
    layout: "/admin"
  },
  {
    path: "/add-ambulance-timeslot",
    rtlName: "الرموز",
    component: AddAmbulanceTimeSlot,
    layout: "/admin"
  }
];
export default routes;
