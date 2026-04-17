import React, { useState, useEffect } from "react";
import { PostData } from "../helpers/PostData";
import "../assets/css/dashboard.css";

function Dashboard() {

    const [loading, setLoading] = useState(true);
    const [quotes, setQuotes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        PostData('get-quotes.php', 'GET')
            .then((response) => {
                if (response.success) {
                    setLoading(false);
                    setQuotes(response.data);
                } else {
                    console.error(response);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <main>
            <h1>Quotes</h1>
            <hr />

            {loading ?
                <p>Loading...</p>
                : <table className="quotes-table">
                    <thead>
                        <tr>
                            <th>Name <br />
                                Email <br />
                                Phone Number <br />
                                Date
                            </th>
                            <th>Message</th>
                        </tr>
                    </thead>

                    {
                        quotes.map(quote => (
                            <tr key={quote.id}>
                                <td>
                                    {quote.name} <br />
                                    {quote.email} <br />
                                    {quote.phone} <br />
                                    {quote.submit_date}
                                </td>
                                <td>{quote.description}</td>
                            </tr>
                        ))
                    }
                </table>
            }
        </main>
    );
}

export default Dashboard;