import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import toast, { Toaster } from 'react-hot-toast'
import { usePage } from '@inertiajs/inertia-react'
import HideScrollBar from '@/Components/HideScrollBar';
import NavbarDefault from './NavbarDefault';
import NavbarDefault2 from './NavbarDefault2';

export default function App({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { flash } = usePage().props;
    const { permissions } = usePage().props;
    const { roles } = usePage().props;

    useEffect(() => {
        flash.type && toast[flash.type](flash.message)
    })
    return (
        <div className="min-h-screen">
           <NavbarDefault/>
           <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
                duration: 5000,
              }}
            />
            <main className="pb-20 md:pb-0">{children}</main>
            {/* <HideScrollBar/> */}
        </div>
    );
}