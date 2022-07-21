import React from "react";

const styles = {
    homeStyle: {
        fontSize: "100px",
        FontFaceSet: "Georgia",
    }
};

export default function Home()
{
    return (
        <div>
            <h1 style={styles.homeStyle}>Simona's Portfolio</h1>
        </div>
    );
};