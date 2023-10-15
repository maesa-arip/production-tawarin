import ThirdButtonNoLink from "@/Components/ThirdButtonNoLink";
import React from "react";

export default function Team({ setIsOpenDialog, model }) {
    // console.log(model)
    const model2 = model.model;
    const handleOnClick = (event) => {
        // console.log(event.target.id);
        // console.log(model2)
        // console.log(model.timeRange);
        alert("Jadwal Anda Pada Tanggal : " + model2.date + " Untuk Layanan " + model2.reservationCounter.name + " Jam " + model.timeRange.timeRange + " Dengan Tim " + event.target.id)
    }
    return (
        <>
            <div className="p-4 mb-4 text-left border rounded-lg">
                <h2>Team: {model2.reservationCounter.name}</h2>
                <p>Tanggal: {model2.date}</p>
                <p>Waktu: {model.timeRange.timeRange}</p>
                <p>Service duration: {model2.reservationCounter.service_duration} minutes</p>
            </div>
            <p>Team Tersedia:</p>
            {model2.team.map((team,index)=>(
                 <div key={index} className="relative w-full mx-auto">
                 <div className="flex flex-col my-4 bg-white border shadow-lg rounded-xl">
                     <div className="flex flex-col items-center justify-center flex-auto p-2">
                         <div className="grid w-full grid-cols-12 gap-4">
                             <div className="col-span-8 lg:col-span-10">
                                 <p>{team.name}</p>
                             </div>
                             <div className="col-span-4 lg:col-span-2">
                                 <ThirdButtonNoLink onClick={handleOnClick} id={team.id}>Pilih</ThirdButtonNoLink>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
            ))}
            {/* {calculateAvailableTimes(
                model.reservationCompany.open_at,
                model.reservationCompany.close_at,
                model.reservationCounter.service_duration
            ).map((timeRange, index) => (
                <div key={index} className="relative w-full mx-auto">
                    <div className="flex flex-col my-4 bg-white border shadow-lg rounded-xl">
                        <div className="flex flex-col items-center justify-center flex-auto p-2">
                            <div className="grid w-full grid-cols-12 gap-4">
                                <div className="col-span-8 lg:col-span-10">
                                    <p>{timeRange}</p>
                                </div>
                                <div className="col-span-4 lg:col-span-2">
                                    <ThirdButtonNoLink>Pilih</ThirdButtonNoLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))} */}
            <hr />
        </>
    );
}


