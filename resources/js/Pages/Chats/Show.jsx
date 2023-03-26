import App from "@/Layouts/App";
import React, { useEffect, useRef, useState } from "react";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import AppChat from "@/Layouts/AppChat";
import ApplicationLogo from "@/Components/ApplicationLogo";

const sts = (x, y, option = "justify") => {
    if (option == "justify") {
        return x === y
            ? "col-start-1 col-end-8 md:p-3 rounded-lg"
            : "col-start-6 col-end-13 md:p-3 rounded-lg";
    }

    if (option == "background") {
        return x === y
            ? "relative md:ml-3 text-sm bg-white text-gray-900 py-2 px-4 shadow rounded-xl"
            : "relative md:mr-3 text-sm bg-green-100 text-green-900 py-2 px-4 shadow rounded-xl";
    }
    if (option == "col") {
        return x === y
            ? "flex flex-row items-center"
            : "flex items-center justify-start flex-row-reverse";
    }
};

export default function Show(props) {
    const { auth } = usePage().props;
    const [typing, setTyping] = useState(false);
    const scrollRef = useRef(null);
    const messageRef = useRef(null);
    const { user, chats } = props;
    const { data, setData, reset, errors, post } = useForm({ message: "" });
    const submitHandler = (event) => {
        event.preventDefault();
        post(route("chats.store", user.username), {
            onSuccess: () => {
                reset("message");
                scrollRef.current.scrollTo(0, 9999999);
            },
        });
    };

    const onTyping = () => {
        setTimeout(() => {
            Echo.private(`chats.${user.uuid}`).whisper("isTyping", {
                name: user.name,
            });
        }, 500);
    };

    Echo.private("chats." + auth.user.uuid)
        .listenForWhisper("isTyping", (e) => {
            setTyping(true);

            setTimeout(() => setTyping(false), 5000);
        })
        .listen("MessageSent", ({ chat }) => {
            Inertia.reload({
                preserveScroll: true,
                onSuccess: () => {
                    scrollRef.current.scrollTo(0, 9999999);
                    setTyping(false);
                },
            });
        });

    useEffect(() => {
        scrollRef.current.scrollTo(0, 9999999);
        messageRef.current.focus();
    }, []);

    return (
        <div className="flex flex-col flex-auto h-full p-6">
            <Head title={`Chat with ${user.name}`} />
            <div className="flex flex-col flex-auto flex-shrink-0 h-full p-4 bg-gray-100 rounded-2xl">
                <div className="p-4 border-b">
                    <div className="md:hidden">
                        <ApplicationLogo />
                    </div>
                    <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-4 text-2xl font-semibold bg-indigo-200 rounded-full">
                                {Array.from(user.name)[0]}
                            </div>
                    <h1 className="font-semibold">{user.name}</h1>
                    </div>
                    
                    {typing && (
                        <div className="text-xs text-gray-500">
                            is typing . . .
                        </div>
                    )}
                </div>
                <div className="flex flex-col h-full mb-4 overflow-x-auto">
                    <div className="flex flex-col h-full">
                        <div
                            className="grid grid-cols-12 overflow-y-auto gap-y-2"
                            ref={scrollRef}
                        >
                            {/* <div className="grid grid-cols-12 gap-y-2" ref={scrollRef}> */}
                            {chats.length ? (
                                chats.map((chat) => (
                                    <div
                                        className={`${sts(
                                            auth.user.id,
                                            chat.sender_id
                                        )}`}
                                        key={chat.id}
                                    >
                                        <div
                                            className={`md:p-4 rounded-xl ${sts(
                                                auth.user.id,
                                                chat.sender_id,
                                                "col"
                                            )}`}
                                        >
                                            {/* <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                                                        A
                                                    </div> */}

                                            <div
                                                className={`md:p-4 rounded-xl ${sts(
                                                    auth.user.id,
                                                    chat.sender_id,
                                                    "background"
                                                )}`}
                                            >
                                                {chat.message}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-500 md:ml-3">
                                    Start chat . . .
                                </div>
                            )}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="flex flex-row items-center w-full h-16 px-4 bg-white rounded-xl">
                        <div>
                            {/* <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                />
                            </svg>
                        </button> */}
                        </div>
                        <div className="flex-grow ml-4">
                            <div className="relative w-full">
                                <input
                                    onKeyUp={onTyping}
                                    ref={messageRef}
                                    value={data.message}
                                    autoComplete={"off"}
                                    onChange={(event) =>
                                        setData({
                                            ...data,
                                            message: event.target.value,
                                        })
                                    }
                                    type="text"
                                    placeholder="Start typing . . . "
                                    name="message"
                                    id="message"
                                    // className="w-full p-0 border-0 form-text focus:outline-none focus:border-0 focus:ring-0"
                                    className="flex w-full h-10 pl-4 border rounded-xl focus:outline-none focus:border-indigo-300"
                                />

                                {/* <button className="absolute top-0 right-0 flex items-center justify-center w-12 h-full text-gray-400 hover:text-gray-600">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button> */}
                            </div>
                        </div>
                        <div className="ml-4">
                            <button
                                onSubmit={submitHandler}
                                className="flex items-center justify-center flex-shrink-0 px-4 py-1 text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl"
                            >
                                <span className="hidden md:block">Send</span>
                                <span className="py-1 ml-1 md:ml-2">
                                    <svg
                                        className="w-4 h-4 -mt-px transform rotate-45"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

Show.layout = (page) => <AppChat children={page} />;
