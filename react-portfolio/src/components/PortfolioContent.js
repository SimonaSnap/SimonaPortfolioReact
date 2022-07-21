import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import AboutMe from "./pages/About";
import ContactInfo from "./pages/Contact";

export default function PortfolioContent()
{
    const [currentPage, setCurrentPage] = useState("Home");

    const getPage = () =>
    {
        if (currentPage === "Home")
        {
            return <Home />;
        }
        if (currentPage === "About")
        {
            return <AboutMe />;
        }
        if (currentPage === "Contact")
        {
            return <ContactInfo />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {getPage()}
        </div>
    )

}