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
    IconDotsVertical,
    IconHomeEdit,
    IconListNumbers,
} from "@tabler/icons";
import Header from "@/Components/Header";
import InfoModal from "@/Components/Modal/InfoModal";
import ThirdButton from "@/Components/ThirdButton";
import NavLinkMobile from "@/Components/NavLinkMobile";
import RadioCard from "@/Components/RadioCard";
import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";

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
    const [state, setState] = useState([]);
    const [selected, setSelected] = useState();

    const { data, setData, put, processing, errors, reset } = useForm({
        join_as_id: "",
    });
    // CRUD
    // console.log(plans);

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
    const updateJoinas = () => {
        put(route("reservation.updatejoinas", auth.user.id), {
            onSuccess: () => {
                return Promise.all([setIsOpenInfoDialog3(false),setIsOpenInfoDialogReservasi(false),setIsOpenInfoDialogKonstruksi(false), reset()]);
            },
        });
    };
    const closeOpenDialog2 = () => {
        setIsOpenInfoDialog2(false);
    }
    
    useEffect(() => {
        if (!auth.user.join_as_id) {
            openInfoDialog3();
        }
    }, [])
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
            {/* <InfoModal
                isOpenInfoDialog={isOpenInfoDialog}
                setIsOpenInfoDialog={setIsOpenInfoDialog}
                size="max-w-2xl"
                title={"Info"}
                header={""}
            >
                Ayo lengkapi portofoliomu untuk menarik owner menggunakan jasamu
                <Link href={"planportofolios/create"}>
                    <ThirdButton className="flex mx-4">
                        Tambah Portofolio
                    </ThirdButton>
                </Link>
            </InfoModal> */}
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
                <ThirdButtonNoLink onClick={updateJoinas}>Simpan</ThirdButtonNoLink>
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
                <ThirdButtonNoLink onClick={updateJoinas}>Simpan</ThirdButtonNoLink>
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
                    <div
                        onClick={() => setIsOpenInfoDialogReservasi(true)}
                    >
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
            <Container>
                <FeatureCard balance={balance} bonus={bonus} feewithdraw={feewithdraw} referral={referral}  />
                {portofolio.length > 0 ? (
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
                )}
                <div className="flex flex-col px-6 py-6 mt-4 bg-white border shadow-lg rounded-xl ">
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
                            </div></div></div>
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
