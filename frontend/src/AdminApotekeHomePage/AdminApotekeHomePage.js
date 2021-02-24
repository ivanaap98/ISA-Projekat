import React from "react";
import AdminApotekeNavBar from "./AdminApotekeNavBar";
import "../HomePage/landingPage.css";
import AdminApotekeSideBar from './AdminApotekeSideBar';

export default function AdminApotekeHomePage() {
    return (
        <main id="background" className="bg-fixed h-full w-full">
            <AdminApotekeNavBar/>
            <AdminApotekeSideBar/>
        </main>
    
    )
}