import React from "react";

const styles = {
    navStyle: {
        fontSize: "40px",
        FontFaceSet: "Montserrat",
        padding: "40px",
        margin: "25px",
        fontWeight: 500,
        listStyle: "none",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    listStyle: {
        flexDirection: "row",
        display: "inline-block",
        paddingLeft: "30px"
    }
};

function NavTabs({ currentPage, handlePageChange })
{
    return (
        <ul className="nav nav-tabs" style={styles.navStyle}>
            <li className="nav-item" style={styles.listStyle}>
                <a href="#home"
                    onClick={() => handlePageChange("Home")}
                    className={currentPage === "Home" ? "nav-link active" : "nav-link"}>
                    Home
                </a>
            </li>
            <li className="nav-item" style={styles.listStyle}>
                <a href="#about"
                    onClick={() => handlePageChange("About")}
                    className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                    About
                </a>
            </li>
            <li className="nav-item" style={styles.listStyle}>
                <a href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    className={currentPage === "contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;