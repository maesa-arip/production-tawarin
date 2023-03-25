import React, { useEffect, useRef, useState } from 'react'
import { Head, useForm, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia';
import App from '@/Layouts/App';

const sts = (x, y, option = 'justify') => {
    if (option == 'justify') {
        return x === y ? 'justify-end' : 'justify-start';
    }

    if (option == 'background') {
        return x === y ? 'bg-green-100 text-green-900' : 'bg-gray-100 text-gray-900';
    }
};

export default function Show(props) {
    const { auth } = usePage().props;
    const [typing, setTyping] = useState(false);
    const scrollRef = useRef(null);
    const messageRef = useRef(null);
    const { user, chats } = props;
    const { data, setData, reset, errors, post } = useForm({ message: '' });
    const submitHandler = (event) => {
        event.preventDefault();
        post(route('chats.store', user.username), {
            onSuccess: () => {
                reset('message');
                scrollRef.current.scrollTo(0, 9999999);
            }
        });
    };

    const onTyping = () => {
        setTimeout(() => {
            Echo.private(`chats.${user.uuid}`)
                .whisper('isTyping', { name: user.name });
        }, 500);
    };

    Echo.private('chats.' + auth.user.uuid)
        .listenForWhisper('isTyping', (e) => {
            setTyping(true);

            setTimeout(() => setTyping(false), 5000);
        })
        .listen('MessageSent', ({ chat }) => {
            Inertia.reload({
                preserveScroll: true,
                onSuccess: () => {
                    scrollRef.current.scrollTo(0, 9999999);
                    setTyping(false)
                }
            });
        });

    useEffect(() => {
        scrollRef.current.scrollTo(0, 9999999);
        messageRef.current.focus();
    }, []);

    return (
        <div>
            <Head title={`Chat with ${user.name}`} />
            <div className="flex flex-col justify-between h-screen">
                <div className="p-4 border-b">
                    <h1 className="font-semibold">{user.name}</h1>
                    {typing &&
                        <div className="text-xs text-gray-500">is typing . . .</div>
                    }
                </div>
                <div className="flex-1 px-4 py-2 space-y-2 overflow-y-auto" ref={scrollRef}>
                    {chats.length ? chats.map((chat) => (
                        <div className={`flex text-sm ${sts(auth.user.id, chat.sender_id)}`} key={chat.id}>
                            <div className={`p-4 rounded-xl ${sts(auth.user.id, chat.sender_id, 'background')}`}>
                                {chat.message}
                            </div>
                        </div>
                    )) :

                        <div className="text-gray-500">
                            Start chat with someone . . .
                        </div>
                    }
                </div>
                <div className="px-4 py-2 border-t">
                    <form onSubmit={submitHandler}>
                        <input onKeyUp={onTyping} ref={messageRef} value={data.message} autoComplete={"off"} onChange={(event) => setData({ ...data, message: event.target.value })} type="text" placeholder="Start typing . . . " name="message" id="message" className="w-full p-0 border-0 form-text focus:outline-none focus:border-0 focus:ring-0" />
                    </form>
                </div>
            </div>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
