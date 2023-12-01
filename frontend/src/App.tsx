import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CourseStreamListPage from './pages/CourseStreamListPage/CourseStreamListPage';
import AuthPage from './pages/AuthPage/AuthPage';
import AddCourseStreamPage from './pages/AddCourseStreamPage/AddCourseStreamPage';
import AddCourseTemplatePage from "./pages/AddCourseTemplatePage/AddCourseTemplatePage";
import TopMenu from "./pages/TopMenu/TopMenu";
import CourseTemplateListPage from "./pages/CourseTemplateListPage/CourseTemplateListPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import Profile from "./pages/ProfilePage/Profile";

function App() {
  return (
      <Router>
          <TopMenu/>
        <Routes>
            <Route path="/courselist" element={<CourseStreamListPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/addcourse" element={<AddCourseStreamPage />} />
            <Route path="/template" element={<AddCourseTemplatePage />} />
            <Route path="/templatelist" element={<CourseTemplateListPage />} />
            <Route path="/course/:courseId/:templateId" element={<CoursePage/>} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
  );
}

export default App;
