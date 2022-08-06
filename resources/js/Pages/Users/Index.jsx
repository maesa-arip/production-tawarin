import React, { useCallback, useEffect, useState } from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import CreateUser from "@/Components/Users/CreateUser";
import EditeUser from "@/Components/Users/EditUser"
import AddModal from "@/Components/Modal/AddModal"
import EditModal from "@/Components/Modal/EditModal"
import DestroyModal from "@/Components/Modal/DestroyModal"
import Button from "@/Components/Button"

const UpIcon = () => <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
const DownIcon = () => <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>

export default function Index(props) {
    const { data: people, meta, filtered, attributes } = props.users;
    const [pageNumber, setPageNumber] = useState([]);
    const [params, setParams] = useState(filtered);

    const reload = useCallback(
        debounce((query) => {
            Inertia.get(route("users.index"), {...pickBy(query), page: query.page}, {
                preserveState: true,
                preserveScroll: true,
            });
        }, 150),
        []
    );
    useEffect(() => reload(params), [params]);
    useEffect(() => {
        let numbers = [];
        for (let i = attributes.per_page; i < attributes.total / attributes.per_page; i = i + attributes.per_page) {
            numbers.push(i);
        }
        setPageNumber(numbers);
    }, []);
    const onChange = (event) =>
        setParams({ ...params, [event.target.name]: event.target.value });
        const sort = (item) => {
            setParams({
                ...params,
                field:item,
                direction : params.direction == 'asc' ? 'desc' : 'asc'
            })
        }

    // CRUD

    const openAddDialog = () => {
        setIsOpenAddDialog(true)
    }
    const openEditDialog = (person) => {
        setState(person)
        setIsOpenEditDialog(true)
    }
    const openDestroyDialog = (person) => {
        setState(person)
        setIsOpenDestroyDialog(true)

    }

    const destroyUser = () => {
        Inertia.delete(route('users.destroy', state.id),{
            onSuccess: () => setIsOpenDestroyDialog(false)
        });
    }
    const [isOpenAddDialog, setIsOpenAddDialog] = useState(false)
    const [isOpenEditDialog, setIsOpenEditDialog] = useState(false)
    const [isOpenDestroyDialog, setIsOpenDestroyDialog] = useState(false)
    const [state, setState] = useState([])
    return (
        <>
            <Head title="User" />
            <Container>Users <button
                type="button"
                onClick={openAddDialog}
                className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Add User
            </button>

            </Container>
            <AddModal isOpenAddDialog={isOpenAddDialog} setIsOpenAddDialog={setIsOpenAddDialog} size="2xl" title={'Add User'}>
                <CreateUser isOpenAddDialog={isOpenAddDialog} setIsOpenAddDialog={setIsOpenAddDialog}/>
            </AddModal>
            <EditModal isOpenEditDialog={isOpenEditDialog} setIsOpenEditDialog={setIsOpenEditDialog} size="2xl" title={'Edit User'}>
                <EditeUser model={state} isOpenEditDialog={isOpenEditDialog} setIsOpenEditDialog={setIsOpenEditDialog}/>
            </EditModal>
            <DestroyModal isOpenDestroyDialog={isOpenDestroyDialog} setIsOpenDestroyDialog={setIsOpenDestroyDialog} size="2xl" title={'Delete User'}>
                <Button color={'pink'} onClick={destroyUser}>
                    Delete
                </Button>
                {/* <button onClick={destroyUser} className="w-full inline-flex justify-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                        Delete
                </button> */}
            </DestroyModal>

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end">
                        <div className="w-1/2">
                            <div className="flex items-center gap-x-2 mb-6 justify-end">


                            <select
                                name="load"
                                id="load"
                                onChange={onChange}
                                value={params.load}
                                className="rounded-lg border-gray-300 focus:ring-blue-200 focus:ring transition duration-150 ease-in-out form-select"
                            >
                                {pageNumber.map((page, index)=> <option key={index}>{page}</option>)}
                            </select>
                            <div className="flex items-center gap-x-2 rounded-lg bg-white px-2 border-gray-300 border focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring transition duration-150 ease-in-out">
                                    <svg className="w-5 h-5 inline text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>
                                    <input type="text" name="q" id="q" onChange={onChange} value={params.q} className="border-0 focus:ring-0 form-text w-full" />
                            </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                                                >
                                                    <div className="cursor-pointer flex items-center gap-x-2">
                                                        #
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                                                >
                                                    <div className="cursor-pointer flex items-center gap-x-2" onClick={()=>sort('username')}>
                                                        Username
                                                        { params.field == "username" && params.direction == "asc" && <UpIcon/> }
                                                        { params.field == "username" && params.direction == "desc" && <DownIcon/> }
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                                                >
                                                     <div className="cursor-pointer flex items-center gap-x-2" onClick={()=>sort('name')}>
                                                        Name
                                                        { params.field == "name" && params.direction == "asc" && <UpIcon/> }
                                                        { params.field == "name" && params.direction == "desc" && <DownIcon/> }
                                                    </div>
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                                                >
                                                    <div className="cursor-pointer flex items-center gap-x-2" onClick={()=>sort('address')}>
                                                        Address
                                                        { params.field == "address" && params.direction == "asc" && <UpIcon/> }
                                                        { params.field == "address" && params.direction == "desc" && <DownIcon/> }
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                                                >
                                                    <div className="cursor-pointer flex items-center gap-x-2" onClick={()=>sort('email')}>
                                                        Email
                                                        { params.field == "email" && params.direction == "asc" && <UpIcon/> }
                                                        { params.field == "email" && params.direction == "desc" && <DownIcon/> }
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                                                >
                                                    <div className="cursor-pointer flex items-center gap-x-2" onClick={()=>sort('created_at')}>
                                                        Joined
                                                        { params.field == "created_at" && params.direction == "asc" && <UpIcon/> }
                                                        { params.field == "created_at" && params.direction == "desc" && <DownIcon/> }
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="relative px-6 py-3"
                                                >
                                                    <span className="sr-only">
                                                        Edit
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {people.map((person, index) => (
                                                <tr key={person.email}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {meta.from + index}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {person.username}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {person.name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {person.address}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {person.email}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {person.joined}
                                                    </td>
                                                    <td>
                                                        <button className="flex items-center gap-x-2" onClick={()=>openEditDialog(person)}>Edit</button>
                                                        <button className="flex items-center gap-x-2" onClick={()=>openDestroyDialog(person)}>Delete</button>

                                                    </td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="flex items-center gap-x-1 mt-10">
                        {meta.links.map((item, index) => (
                            // <Link
                            //     disabled={item.url == null ? true : false}
                            //     as="button"
                            //     key={index}
                            //     className={`${
                            //         item.url == null
                            //             ? "text-gray-500"
                            //             : "text-gray-800"
                            //     } w-12 h-9 rounded-lg flex items-center justify-center border bg-white`}
                            //     href={item.url}
                            // >
                            //     {item.label}
                            // </Link>
                            <button key={index} disabled={item.url == null ? true : false} className={`${item.url == null? "text-gray-500" : "text-gray-800"} w-12 h-9 rounded-lg flex items-center justify-center border bg-white`} onClick={()=>setParams({...params, page: new URL(item.url).searchParams.get('page')})}>{item.label}</button>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
Index.layout = (page) => <App children={page} />;
