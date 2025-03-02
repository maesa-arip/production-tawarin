import React, { useCallback, useEffect, useState } from "react";
import AppDefault from "@/Layouts/AppDefault";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import FeatureCard from "@/Components/FeatureCard";
import { debounce, pickBy } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import DestroyModal from "@/Components/Modal/DestroyModal";
import Button from "@/Components/Button";
import { numberFormat } from "@/Libs/helper";
import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";
import DropdownMobile from "@/Components/DropdownMobile";
import {
    IconBan,
    IconCirclePlus,
    IconClock,
    IconDotsVertical,
    IconHomeEdit,
    IconLicense,
    IconListNumbers,
    IconSquareRoundedPlus,
} from "@tabler/icons";
import Header from "@/Components/Header";
import InfoModal from "@/Components/Modal/InfoModal";
import ThirdButton from "@/Components/ThirdButton";
import NavLinkMobile from "@/Components/NavLinkMobile";
import RadioCard from "@/Components/RadioCard";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import {
    ArchiveIcon,
    ArrowCircleDownIcon,
    ArrowCircleRightIcon,
    ArrowCircleUpIcon,
    ArrowNarrowDownIcon,
    ArrowRightIcon,
    BookOpenIcon,
    ChatAlt2Icon,
    ClipboardIcon,
    ClipboardListIcon,
    ClockIcon,
    DeviceTabletIcon,
    DocumentIcon,
    InboxIcon,
    SearchCircleIcon,
    UserCircleIcon,
    UserIcon,
    UsersIcon,
} from "@heroicons/react/outline";

const UpIcon = () => (
    <svg
        className="w-5 h-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
        />
    </svg>
);
const DownIcon = () => (
    <svg
        className="w-5 h-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

export default function Dashboard(props) {
    const { data: plans, meta, filtered, attributes } = props.plans;
    const planRejectCount = props.planRejectCount;
    const permissions = props.permissions;
    const joinas_reservasi = props.joinas_reservasi;
    const joinas_konstruksi = props.joinas_konstruksi;
    const portofolio = props.portofolio;
    const balance = props.balance;
    const referral = props.referral;
    const bonus = props.bonus;
    const user = props.user;
    const feewithdraw = props.feewithdraw;
    const { auth } = usePage().props;
    const [pageNumber, setPageNumber] = useState([]);
    const [params, setParams] = useState(filtered);
    const [isOpenDestroyDialog, setIsOpenDestroyDialog] = useState(false);
    const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);
    const [isOpenInfoDialog2, setIsOpenInfoDialog2] = useState(false);
    const [isOpenInfoDialog3, setIsOpenInfoDialog3] = useState(false);
    const [isOpenInfoDialogReservasi, setIsOpenInfoDialogReservasi] =
        useState(false);
    const [isOpenInfoDialogKonstruksi, setIsOpenInfoDialogKonstruksi] =
        useState(false);
    const [isOpenInfoTimDialog, setIsOpenInfoTimDialog] = useState(false);
    const [isOpenInfoTopUpDialog, setIsOpenInfoTopUpDialog] = useState(false);
    const [state, setState] = useState([]);
    const [selected, setSelected] = useState();
    const permission_name = permissions
        ? permissions.map((permission) => permission.name)
        : "null";

    const { data, setData, put, processing, errors, reset } = useForm({
        join_as_id: "",
    });
    // CRUD
    // console.log(user);

    const openDestroyDialog = (plan) => {
        setState(plan);
        setIsOpenDestroyDialog(true);
    };

    const destroyPlan = () => {
        Inertia.delete(route("plans.destroy", state.id), {
            onSuccess: () => setIsOpenDestroyDialog(false),
        });
    };
    const openInfoDialog = () => {
        setState();
        setIsOpenInfoDialog(true);
    };
    const openInfoDialog2 = () => {
        setState();
        setIsOpenInfoDialog2(true);
    };
    const openInfoDialog3 = () => {
        setState();
        setIsOpenInfoDialog3(true);
    };
    const openInfoTimDialog = () => {
        // setState();
        setIsOpenInfoTimDialog(true);
    };
    const openInfoTopUpDialog = () => {
        // setState();
        setIsOpenInfoTopUpDialog(true);
    };
    const openInfoDialogReservasi = () => {
        setState();
        setIsOpenInfoDialogReservasi(true);
    };
    const onChangeRadio = (e) => {
        setData({ ...data, ["join_as_id"]: e.id });
    };
    const closeInfoDialogReservasi = () => {
        setIsOpenInfoDialogReservasi(false);
    };
    const closeInfoDialogKonstruksi = () => {
        setIsOpenInfoDialogKonstruksi(false);
    };
    const closeInfoTimDialog = () => {
        setIsOpenInfoTimDialog(false);
    };
    const closeInfoTopUpDialog = () => {
        setIsOpenInfoTopUpDialog(false);
    };
    const updateJoinas = () => {
        put(route("reservation.updatejoinas", auth.user.id), {
            onSuccess: () => {
                return Promise.all([
                    setIsOpenInfoDialog3(false),
                    setIsOpenInfoDialogReservasi(false),
                    setIsOpenInfoDialogKonstruksi(false),
                    reset(),
                ]);
            },
        });
    };
    const closeOpenDialog2 = () => {
        setIsOpenInfoDialog2(false);
    };

    useEffect(() => {
        if (!auth.user.join_as_id) {
            openInfoDialog3();
        }
    }, []);
    return (
        <>
            <Head title="Dashboard" />
            {/* <MyCombobox/> */}
            <DestroyModal
                isOpenDestroyDialog={isOpenDestroyDialog}
                setIsOpenDestroyDialog={setIsOpenDestroyDialog}
                size="2xl"
                title={"Hapus Perencanaan"}
            >
                <Button color={"pink"} onClick={destroyPlan}>
                    Hapus
                </Button>
            </DestroyModal>

            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog2}
                setIsOpenInfoDialog={setIsOpenInfoDialog2}
                size="max-w-2xl"
                title={"Info"}
                header={""}
                closeButton="false"
            >
                <p>Ayo lengkapi profilmu terlebih dahulu</p>
                <ThirdButtonNoLink
                    className="mx-1 mt-2"
                    color="secondary"
                    onClick={closeOpenDialog2}
                >
                    Close
                </ThirdButtonNoLink>
                <ThirdButton href={"/profile"} className="block mx-1 ">
                    Lengkapi Profil
                </ThirdButton>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialogReservasi}
                setIsOpenInfoDialog={setIsOpenInfoDialogReservasi}
                size="max-w-2xl"
                title={"Mau Sebagai Apa di Reservasi ?"}
                header={""}
                closeButton="false"
            >
                <RadioCard
                    ShouldMap={joinas_reservasi}
                    selected={selected}
                    onChange={(e) => {
                        onChangeRadio(e);
                        setSelected(e);
                    }}
                />

                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="gray"
                    onClick={closeInfoDialogReservasi}
                >
                    Close
                </ThirdButtonNoLink>
                <ThirdButtonNoLink onClick={updateJoinas}>
                    Simpan
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialogKonstruksi}
                setIsOpenInfoDialog={setIsOpenInfoDialogKonstruksi}
                size="max-w-2xl"
                title={"Mau Sebagai Apa di Konstruksi ?"}
                header={""}
                closeButton="false"
            >
                <RadioCard
                    ShouldMap={joinas_konstruksi}
                    selected={selected}
                    onChange={(e) => {
                        onChangeRadio(e);
                        setSelected(e);
                    }}
                />

                <ThirdButtonNoLink
                    className="mx-2 mt-2"
                    color="gray"
                    onClick={closeInfoDialogKonstruksi}
                >
                    Close
                </ThirdButtonNoLink>
                <ThirdButtonNoLink onClick={updateJoinas}>
                    Simpan
                </ThirdButtonNoLink>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenInfoDialog3}
                setIsOpenInfoDialog={setIsOpenInfoDialog3}
                size="max-w-2xl"
                title={"Apa Keperluanmu ?"}
                header={""}
                closeButton="false"
            >
                <div className="grid items-center justify-between grid-cols-2 mt-4 gap-x-12 gap-y-4">
                    <div onClick={() => setIsOpenInfoDialogReservasi(true)}>
                        <IconListNumbers className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                        <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                            Tawarin Reservasi
                        </p>
                    </div>
                    <div onClick={() => setIsOpenInfoDialogKonstruksi(true)}>
                        <IconHomeEdit className="w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer" />
                        <p className="flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21">
                            Tawarin Konstruksi
                        </p>
                    </div>
                </div>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenInfoTimDialog}
                setIsOpenInfoDialog={setIsOpenInfoTimDialog}
                size="max-w-2xl"
                title={"Silakan Undang Karyawan"}
                header={""}
                closeButton="true"
            >
                <div className="items-center justify-between mt-4">
                    <p>
                        Pastikan sudah undang karyawan dan pastikan undangan
                        sudah diterima oleh karyawan
                    </p>
                    {/* <ThirdButtonNoLink
                    className="mx-1 mt-2"
                    color="secondary"
                    onClick={closeInfoTimDialog}
                >
                    Close
                </ThirdButtonNoLink> */}
                </div>
            </InfoModal>
            <InfoModal
                isOpenInfoDialog={isOpenInfoTopUpDialog}
                setIsOpenInfoDialog={setIsOpenInfoTopUpDialog}
                size="max-w-2xl"
                title={"Silakan Pilih Jenis Top Up"}
                header={""}
                closeButton="true"
            >
                <div className="items-center justify-between mt-4">
                    <div className="col-span-12 px-3 py-4 mx-2 mb-6 text-sm text-left text-gray-500 rounded-lg shadow md:col-span-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                        Jika Memilih QRIS, maka akan terkena biaya 1% dari
                        jumlah Top Up, dan saldo akan otomatis masuk saat
                        selesai melakukan pembayaran.
                    </div>
                    <div className="col-span-12 px-3 py-4 mx-2 mb-6 text-sm text-left text-gray-500 rounded-lg shadow md:col-span-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                        Jika Memilih Transfer Bank, maka akan terkena biaya Rp 2.500, dan saldo akan masuk saat
                        sudah di verifikasi manual oleh admin Tawarin.
                    </div>
                    <ThirdButton
                        className="w-11/12 mx-1 mt-2"
                        color="tawarin"
                        href={'/deposit/create_auto'}
                    >
                        QRIS (Otomatis)
                    </ThirdButton>
                    <ThirdButton
                        className="w-11/12 mx-1 mt-2"
                        color="secondary"
                        href={'/deposits/create'}
                    >
                        Transfer Bank (Manual)
                    </ThirdButton>
                </div>
            </InfoModal>
            <Container>
                <div className="mt-2 border rounded-lg">
                    <p className="px-4 pt-2 pb-1 text-sm font-semibold text-left">
                        Saldo saat ini :
                    </p>
                    <p className="px-4 pb-2 text-lg font-semibold text-left">
                        Rp {numberFormat(balance)}
                    </p>
                    <hr />
                    <div className="grid grid-cols-4 gap-4 p-4 mt-2 ">
                        {[
                            {
                                href: "/deposit/create_auto",
                                icon: (
                                    <ArrowCircleDownIcon className="w-6 h-6 text-orange-400" />
                                ),
                                label: "Top Up",
                            },
                            {
                                href: "/withdraws/create",
                                icon: (
                                    <ArrowCircleUpIcon className="w-6 h-6 text-orange-400" />
                                ),
                                label: "Tarik",
                            },
                            {
                                href: "/wallet/transfers",
                                icon: (
                                    <ArrowCircleRightIcon className="w-6 h-6 text-orange-400" />
                                ),
                                label: "Kirim",
                            },
                            {
                                href: "/wallets",
                                icon: (
                                    <ClipboardIcon className="w-6 h-6 text-orange-400" />
                                ),
                                label: "Rincian",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                            >
                                {item.label === "Top Up" ? (
                                    <button
                                        onClick={() => openInfoTopUpDialog()}
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 border border-orange-100 rounded-xl bg-orange-50">
                                            {item.icon}
                                        </div>
                                        <p className="mt-2 text-xs font-semibold text-center">
                                            {item.label}
                                        </p>
                                    </button>
                                ) : (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="flex flex-col items-center "
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 border border-orange-100 rounded-full bg-orange-50">
                                            {item.icon}
                                        </div>
                                        <p className="mt-2 text-xs font-semibold text-center">
                                            {item.label}
                                        </p>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {user.company ? (
                    <div className="mt-2 border rounded-lg">
                        <div className="grid grid-cols-4 gap-4 p-4 ">
                            {[
                                {
                                    href: route("reservationprofile.edit"),
                                    icon: (
                                        <IconLicense className="w-6 h-6 text-orange-400" />
                                    ),
                                    label: "Perusahaan",
                                },
                                {
                                    href: route("reservationemployees.index"),
                                    icon: (
                                        <UsersIcon className="w-6 h-6 text-orange-400" />
                                    ),
                                    label: "Karyawan",
                                },
                                {
                                    href: route("reservationCounters.index"),
                                    icon: (
                                        <DeviceTabletIcon className="w-6 h-6 text-orange-400" />
                                    ),
                                    label: "Produk",
                                },
                                {
                                    href: route("reservation.teamheader"),
                                    icon: (
                                        <UserIcon className="w-6 h-6 text-orange-400" />
                                    ),
                                    label: "Tim",
                                },

                                {
                                    href: route(
                                        "reservation.myemployeebreaksetting"
                                    ),
                                    icon: (
                                        <ClockIcon className="w-6 h-6 text-orange-400" />
                                    ),
                                    label: "Pengajuan Istirahat",
                                },

                                {
                                    href: route(
                                        "reservation.myemployeerequestoff"
                                    ),
                                    icon: (
                                        <InboxIcon className="w-6 h-6 text-orange-400" />
                                    ),
                                    label: "Permintaan Libur",
                                },
                                {
                                    href: route("company.summary"),
                                    icon: (
                                        <ClipboardListIcon className="w-6 h-6 text-orange-400" />
                                    ),
                                    label: "Laporan",
                                },
                                {
                                    href: route("userguide"),
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-orange-400"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                                            />
                                        </svg>
                                    ),
                                    label: "Panduan",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center"
                                >
                                    {item.label === "Tim" &&
                                    user.employees &&
                                    user.employees.length === 0 ? (
                                        <button
                                            onClick={() => openInfoTimDialog()}
                                        >
                                            <div className="flex items-center justify-center w-12 h-12 border border-orange-100 rounded-xl bg-orange-50">
                                                {item.icon}
                                            </div>
                                            <p className="mt-2 text-xs font-semibold text-center">
                                                {item.label}
                                            </p>
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="flex items-center justify-center w-12 h-12 border border-orange-100 rounded-xl bg-orange-50">
                                                {item.icon}
                                            </div>
                                            <p className="mt-2 text-xs font-semibold text-center">
                                                {item.label}
                                            </p>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="mt-2 border rounded-lg">
                        <div className="grid grid-cols-1 gap-4 p-4 ">
                            {[
                                {
                                    href: route("reservationprofile.edit"),
                                    icon: (
                                        <IconLicense className="w-6 h-6 text-orange-400" />
                                    ),
                                    label: "Buat Perusahaan",
                                },
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="flex flex-col items-center "
                                >
                                    <div className="flex items-center justify-center w-full h-12 border border-orange-100 rounded-xl bg-orange-50">
                                        {item.icon}
                                    </div>
                                    <p className="mt-2 text-xs font-semibold text-center">
                                        {item.label}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-2 border rounded-lg">
                    {permission_name.indexOf("lihat menu pekerja reservasi") >
                        -1 && (
                        <>
                            <div className="grid grid-cols-4 gap-4 p-4 ">
                                {[
                                    {
                                        href: route(
                                            "reservationemployeedayoff.index"
                                        ),
                                        icon: (
                                            <IconClock className="w-6 h-6 text-orange-400" />
                                        ),
                                        label: "Libur dan Istirahat",
                                    },
                                    {
                                        href: route(
                                            "reservation.myteaminvitations"
                                        ),
                                        icon: (
                                            <UsersIcon className="w-6 h-6 text-orange-400" />
                                        ),
                                        label: "Undangan",
                                    },
                                    {
                                        href: route("reservation.mycustomers"),
                                        icon: (
                                            <DeviceTabletIcon className="w-6 h-6 text-orange-400" />
                                        ),
                                        label: "Pelanggan",
                                    },
                                    {
                                        href: route("reservation.mycounters"),
                                        icon: (
                                            <UserIcon className="w-6 h-6 text-orange-400" />
                                        ),
                                        label: "Produk",
                                    },
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="flex flex-col items-center "
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 border border-orange-100 rounded-xl bg-orange-50">
                                            {item.icon}
                                        </div>
                                        <p className="mt-2 text-xs font-semibold text-center">
                                            {item.label}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                            <hr />
                        </>
                    )}
                    <div className="grid grid-cols-3 gap-2 p-4 ">
                        {[
                            {
                                href: route("reservation.list"),
                                icon: (
                                    <SearchCircleIcon className="w-6 h-6 text-orange-400" />
                                ),
                                label: "Cari Reservasi",
                            },
                            {
                                href: route("reservation.myreservations"),
                                icon: (
                                    <BookOpenIcon className="w-6 h-6 text-orange-400" />
                                ),
                                label: "Reservasi Saya",
                            },
                            {
                                href: "/chat",
                                icon: (
                                    <ChatAlt2Icon className="w-6 h-6 text-orange-400" />
                                ),
                                label: "Live Chat",
                            },
                        ].map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="flex flex-col items-center "
                            >
                                <div className="flex items-center justify-center w-24 h-12 border border-orange-100 rounded-xl bg-orange-50">
                                    {item.icon}
                                </div>
                                <p className="mt-2 text-xs font-semibold text-center">
                                    {item.label}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* <FeatureCard
                    balance={balance}
                    bonus={bonus}
                    feewithdraw={feewithdraw}
                    referral={referral}
                /> */}
                {/* {portofolio.length > 0 ? (
                    <> </>
                ) : (
                    useEffect(() => {
                        openInfoDialog();
                    }, [])
                )}
                {auth.user.formattedAddress ? (
                    <> </>
                ) : (
                    useEffect(() => {
                        openInfoDialog2();
                    }, [])
                )} */}
                {/* <div className="flex flex-col px-6 py-6 mt-4 bg-white border shadow-lg rounded-xl ">
                    <div className="">
                        <div className="flex items-center justify-between">
                            <div className="w-full">
                                <div className="flex items-center mb-0 justify-evenly gap-x-1">
                                    <ThirdButton
                                        type="button"
                                        href={"/myreservations"}
                                    >
                                        History Reservasi
                                    </ThirdButton>
                                    <ThirdButton
                                        type="button"
                                        href={route("plan.list")}
                                    >
                                        History Konstruksi
                                    </ThirdButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* {plans.length > 0 ? (
                    <div className="flex flex-col px-2 py-2 mt-4 bg-white border shadow-lg rounded-xl ">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="w-full">
                                    <div className="flex items-center justify-start mt-2 mb-0 gap-x-1">
                                        <ThirdButton
                                            type="button"
                                            href={"plans/create"}
                                        >
                                            Tambah Perencanaan
                                        </ThirdButton>
                                        <ThirdButton
                                            type="button"
                                            href={route("plan.list")}
                                        >
                                            Perencanaan Lainnya
                                        </ThirdButton>
                                    </div>
                                </div>
                            </div>

                            <div className="grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                                {plans.map((plan, index) => (
                                    <div
                                        key={index}
                                        className="relative w-full mx-auto"
                                    >
                                        <div className="flex flex-col bg-white border shadow-lg rounded-xl ">
                                            <div className="flex flex-col items-center justify-center flex-auto p-2">
                                                <div className="grid w-full grid-cols-12 gap-1">
                                                    <div className="col-span-4 col-start-1">
                                                        <p className="text-sm font-semibold">
                                                            {plan.owner.name}
                                                        </p>
                                                        <p className="text-xs font-medium text-gray-500">
                                                            {
                                                                plan
                                                                    .plan_category
                                                                    .name
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center justify-end col-span-6 col-end-12">
                                                        {plan.plan_bids_sum_is_approved ==
                                                        "1" ? (
                                                            <p className="px-1 py-1 text-xs font-semibold text-blue-900 rounded bg-sky-200">
                                                                Sudah Memilih
                                                                Pemenang
                                                            </p>
                                                        ) : (
                                                            <>
                                                                {plan.is_approved ==
                                                                1 ? (
                                                                    <p className="px-1 py-1 text-xs font-semibold text-blue-900 rounded bg-sky-200">
                                                                        Diterima
                                                                    </p>
                                                                ) : (
                                                                    <p className="px-1 py-1 text-xs font-semibold text-red-500 bg-yellow-200 rounded">
                                                                        Menunggu
                                                                        Konfirmasi
                                                                    </p>
                                                                )}
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center justify-center col-span-1 col-end-13">
                                                        <span className="items-center justify-center px-1 ml-1 text-xs font-thin rounded-lg select-none ">
                                                            <DropdownMobile>
                                                                <DropdownMobile.Trigger>
                                                                    <button>
                                                                        <IconDotsVertical />
                                                                    </button>
                                                                </DropdownMobile.Trigger>
                                                                <DropdownMobile.Content>
                                                                    {plan.is_approved ==
                                                                    1 ? (
                                                                        ""
                                                                    ) : (
                                                                        <>
                                                                            <DropdownMobile.Link
                                                                                href={route(
                                                                                    "plans.edit",
                                                                                    `${plan.slug}`
                                                                                )}
                                                                            >
                                                                                Edit
                                                                            </DropdownMobile.Link>
                                                                            <button
                                                                                className="items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2"
                                                                                onClick={() =>
                                                                                    openDestroyDialog(
                                                                                        plan
                                                                                    )
                                                                                }
                                                                            >
                                                                                Hapus
                                                                            </button>
                                                                        </>
                                                                    )}

                                                                    <DropdownMobile.Link
                                                                        href={route(
                                                                            "plans.show",
                                                                            `${plan.slug}`
                                                                        )}
                                                                    >
                                                                        Lihat
                                                                        Detail
                                                                    </DropdownMobile.Link>
                                                                    {plan.plan_bids_count >
                                                                        0 && (
                                                                        <DropdownMobile.Link
                                                                            href={route(
                                                                                "bidplans.listpenawar",
                                                                                `${plan.id}`
                                                                            )}
                                                                        >
                                                                            Lihat
                                                                            Penawaran
                                                                        </DropdownMobile.Link>
                                                                    )}
                                                                    {plan.plan_bids_sum_is_approved ==
                                                                        "1" && (
                                                                        <DropdownMobile.Link
                                                                            href={route(
                                                                                "plan.tahapan",
                                                                                `${plan.slug}`
                                                                            )}
                                                                        >
                                                                            Tahapan
                                                                            Perencanaan
                                                                        </DropdownMobile.Link>
                                                                    )}
                                                                </DropdownMobile.Content>
                                                            </DropdownMobile>
                                                        </span>
                                                    </div>
                                                    <div className="col-span-12 col-start-1 border-b border-gray-100"></div>
                                                    <div className="flex items-center justify-center col-span-2 col-start-1 mb-2">
                                                        <img
                                                            className="object-cover w-12 h-12 border rounded-lg"
                                                            src={
                                                                plan.media
                                                                    ? plan.media
                                                                    : "storage/files/default/NoImage.svg"
                                                            }
                                                            alt="0"
                                                        ></img>
                                                    </div>
                                                    <div className="col-span-10 col-start-3 mb-2">
                                                        <Link
                                                            className="text-base font-semibold"
                                                            href={route(
                                                                "plans.show",
                                                                `${plan.slug}`
                                                            )}
                                                        >
                                                            {plan.name}
                                                        </Link>

                                                        <p className="text-xs font-medium text-gray-500">
                                                            {
                                                                plan.plan_bids_count
                                                            }{" "}
                                                            Penawar
                                                        </p>
                                                    </div>
                                                    <div className="col-span-6 col-start-1">
                                                        <p className="text-xs font-medium text-gray-500">
                                                            Total Anggaran
                                                        </p>
                                                        <p className="text-sm font-semibold">
                                                            Rp.{" "}
                                                            {numberFormat(
                                                                plan.anggaran_proyek
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="col-span-5 col-end-13">
                                                        <div className="flex items-center justify-end col-span-3 col-end-6 ">
                                                            {plan.plan_bids_sum_is_approved ==
                                                            "1" ? (
                                                                <Link
                                                                    href={route(
                                                                        "plan.tahapan",
                                                                        `${plan.slug}`
                                                                    )}
                                                                    className="px-2 py-1 text-xs font-semibold text-white rounded bg-sky-700"
                                                                >
                                                                    Tahapan
                                                                </Link>
                                                            ) : (
                                                                <>
                                                                    {plan.is_approved ==
                                                                    1 ? (
                                                                        <Link
                                                                            href={route(
                                                                                "bidplans.listpenawar",
                                                                                `${plan.id}`
                                                                            )}
                                                                            className="px-2 py-1 text-xs font-semibold text-white rounded bg-sky-700"
                                                                        >
                                                                            Lihat
                                                                            Penawaran
                                                                        </Link>
                                                                    ) : (
                                                                        <Link
                                                                            href={route(
                                                                                "plans.edit",
                                                                                `${plan.slug}`
                                                                            )}
                                                                            className="px-2 py-1 text-xs font-semibold text-white bg-yellow-700 rounded"
                                                                        >
                                                                            Edit
                                                                        </Link>
                                                                    )}
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )} */}
            </Container>
        </>
    );
}

Dashboard.layout = (page) => <AppDefault children={page}></AppDefault>;
