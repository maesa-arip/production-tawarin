import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head, usePage } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

// Register the plugins
registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType
);

export default function Filepond({
    props,
    inputname,
    allowMultiple,
    maxFiles,
    required,
}) {
    const { csrf_token } = usePage().props;
    const [files, setFiles] = useState([]);

    const deleteImage = async (nameFile) => {
        try {
            const uniqueFileIdArray = JSON.parse(nameFile);

            // Extract the filename from the parsed array
            const folder = uniqueFileIdArray[0];
            const filename = uniqueFileIdArray[1];
            const sessionfolder = uniqueFileIdArray[2];
            const sessionfilename = uniqueFileIdArray[3];
            console.log(folder);
            console.log(filename);
            const response = await fetch("/upload/filepond/destroy", {
                method: "DELETE",
                headers: {
                    "X-CSRF-TOKEN": csrf_token,
                    "Content-Type": "application/json", // Add this line
                },
                body: JSON.stringify({
                    folder: folder,
                    filename: filename,
                    sessionfolder: sessionfolder,
                    sessionfilename: sessionfilename,
                }),
            });
            if (response.ok) {
                console.log("Image deleted successfully");
            } else {
                console.log("Error deleting image");
            }
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

    return (
        <div>
            <Head title="" />
            <Container>
                <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={allowMultiple}
                    maxFiles={maxFiles}
                    name={inputname}
                    credits={"false"}
                    required={required}
                    allowFileTypeValidation={"true"}
                    acceptedFileTypes={["image/png", "image/jpeg", "video/mp4"]}
                    allowReplace={true}
                    allowReorder={"true"}
                    server={{
                        process: {
                            url: "/upload/filepond/store",
                            method: "POST",
                            headers: {
                                "X-CSRF-TOKEN": csrf_token,
                            },
                            withCredentials: false,
                            timeout: 7000,
                            onerror: null,
                        },
                        revert: (uniqueFileId, load, error) => {
                            // console.log(uniqueFileId);
                            deleteImage(uniqueFileId); // Make sure uniqueFileId is passed correctly
                            load();
                        },
                    }}
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
            </Container>
        </div>
    );
}

Filepond.layout = (page) => <App children={page}></App>;
