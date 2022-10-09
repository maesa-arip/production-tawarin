import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import toast, { Toaster } from 'react-hot-toast'
import { usePage } from '@inertiajs/inertia-react'
import HideScrollBar from '@/Components/HideScrollBar';

export default function App({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { flash } = usePage().props;
    useEffect(() => {
        flash.type && toast[flash.type](flash.message)
    })
    return (
        <div className="min-h-screen">
           <Navbar/>
           <Toaster
            position="top-center"
            reverseOrder={false}
            />
            <main className="pb-20 md:pb-0">{children}</main>
            {/* <HideScrollBar/> */}
        </div>
    );
}
