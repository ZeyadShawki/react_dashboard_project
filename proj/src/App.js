import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home.jsx";
import About from "./about/about.jsx";
import MiniDrawer from "./components/drawer.jsx";
import { ThemeProvider } from "./components/themeToggle.jsx"; // Import your ThemeProvider
import Dashboard from "./pages/dashboard/Dashboard.jsx";

import Teams from "./pages/teams/Teams.jsx";
import { Link } from "react-router-dom";
import Contacts from "./pages/contact/Contacts.jsx";

import Incovices from "./pages/invoices/Invoices.jsx";
import HomeIcon from "@mui/icons-material/Home";
import {
  CalendarMonthOutlined,
  ContactsRounded,
  EqualizerOutlined,
  PersonOutline,
  PieChart,
  QuestionMark,
  ReceiptOutlined,
  SupervisedUserCircle,
} from "@mui/icons-material";
function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <MiniDrawer
            body={
              <>
                <div>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Incovices />} />
                  </Routes>
                </div>
              </>
            }
          ></MiniDrawer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

class MyPages {
  static Icons1 = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,

      path: "/",
    },

    {
      text: "Manage Team",
      icon: <SupervisedUserCircle />,

      path: "/teams",
    },

    {
      text: "Contacts Information",
      icon: <ContactsRounded />,

      path: "/contacts",
    },

    {
      text: "Invoice Balance",
      icon: <ReceiptOutlined />,

      path: "/invoices",
    },
  ];

  static Icons2 = [
    {
      text: "Profile Form",
      icon: <PersonOutline />,

      path: "/",
    },

    {
      text: "Calender",
      icon: <CalendarMonthOutlined />,

      path: "/",
    },

    {
      text: "Faq Page",
      icon: <QuestionMark />,

      path: "/",
    },
  ];

  static Icons3 = [
    {
      text: "Bar Chart",
      icon: <EqualizerOutlined />,

      path: "/",
    },

    {
      text: "Pie Chart",
      icon: <PieChart />,

      path: "/",
    },

    {
      text: "Line chart",
      icon: <QuestionMark />,

      path: "/",
    },
  ];
}
export { MyPages, App as default };
