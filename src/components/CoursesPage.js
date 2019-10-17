import React, { useState, useEffect } from 'react';
import CourseList from "./CourseListPage";
import { Link } from "react-router-dom";
// import { getCourses } from "../api/courseApi";
import courseStore from "../stores/courseStore";
import { loadCourses, deleteCourse } from "../actions/courseActions";


function CoursesPage () {
    const [ courses, setCourses ] = useState(courseStore.getCourses());

    // console.log(courses)
    
    useEffect( () => {
        courseStore.addChangeListener(onChange);
        setCourses(courseStore.getCourses());
        if (courseStore.getCourses().length === 0) loadCourses();
        return () => courseStore.removeChangeListener(onChange);

    },[])

    function onChange() {
       setCourses(courseStore.getCourses());
    }

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">
                Add Course
            </Link>
            <CourseList courses={courses} deleteCourse={deleteCourse}/>
        </>
    )
}
    





export default CoursesPage;
