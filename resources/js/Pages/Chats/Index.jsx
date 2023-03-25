import App from '@/Layouts/App';
import React from 'react'

export default function Index() {
    return (
        <div className="px-6 py-4">
            Start chat now . . .
        </div>
    )
}

Index.layout = (page) => <App children={page} />;
