import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Filepond({ props }) {
    const [files, setFiles] = useState([]);
    // var tokenElement = document.head.querySelector('meta[name="csrf-token"]');
    //       var token;
    //       token = tokenElement.content;
    // console.log();
    return (
        <div>
            <Head title="Filepond" />
            <Container>
                    <FilePond
                        files={files}
                        onupdatefiles={setFiles}
                        allowMultiple={false}
                        maxFiles={1}
                        server={{
                            // url: '/uploader',
                            process: {
                                url: "/upload/filepond/store",
                                method: "POST",
                                withCredentials: false,
                                timeout: 7000,
                                onload: null,
                                onerror: null,
                            },
                        }}
                        name="files"
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
            </Container>
        </div>
    );
}

Filepond.layout = (page) => <App children={page}></App>;
