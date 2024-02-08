import React, { useEffect, useState } from "react";

export default function LogOut({setLog}) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const tryLoggingOut = async () => {
        console.log("I'M TRYING");
        try {
            const response = await fetch('http://www.localhost:3000/users/logout', {
                method: "POST"
            });
            if (response.ok) {
                setLog({});
                console.log("successfully logged out");
            } else {
                throw new Error('Logout request failed');
            }
        } catch (err) {
            console.error(err);
            setError(err.message || "An error occurred during logout");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        tryLoggingOut();
    }, []);

    return (
        <>
            {isLoading ? (
                <p>Logging out...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <p>Logged out successfully!</p>
            )}
        </>
    );
}
