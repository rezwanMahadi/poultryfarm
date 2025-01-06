"use client";
import React, { useEffect, useState } from 'react';
// import styles from ''; // Import the CSS module

export default function IncubatorData() {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch("/api/fetchRecordData", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const all_data = await res.json();
                console.log("data without parse: ", all_data);

                if (all_data.success === true) {
                    setAllData(all_data.recordData);
                } else {
                    throw new Error("Product fetch failed!");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct(); // Initial fetch
        const intervalId = setInterval(fetchProduct, 5000);

        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className="flex justify-center">
            <div className="flex-col justify-center w-[70%]">
                <div className="bg-sky-300 w-full rounded-md h-16 flex items-center justify-center fixed top-0 left-0 z-10">
                    <h1 className="text-blue-900 text-[30px]">Brooder Section Data</h1>
                </div>
                <div className="mt-16 overflow-y-auto" style={{ marginTop: '64px', maxHeight: 'calc(100vh - 80px)' }}>
                    <table className="w-full table">
                        <thead className="bg-white sticky top-0 z-10">
                            <tr>
                                <th className="th" style={{ width: '33%' }}>Time</th>
                                <th className="th" style={{ width: '33%' }}>Temperature</th>
                                <th className="th" style={{ width: '33%' }}>Humidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allData.map(data => (
                                <tr key={data._id}>
                                    <td className="td">{data._id}</td>
                                    <td className="td">{data.brooderTemp}</td>
                                    <td className="td">{data.brooderHumi}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}