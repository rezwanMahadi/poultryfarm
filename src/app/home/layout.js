"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

let session_permission = false;

export default function Layout({ children }) {
    const router = useRouter();
    useEffect(() => {
        const userString = localStorage.getItem('user');
        if (userString != null) {
            const local_user_info = JSON.parse(userString);
            console.log(local_user_info);
            session_permission = true;

        } else {
            router.push('/login');
        }
    }, [router])
    return (
        <div>
            {children}
        </div>
    );
}