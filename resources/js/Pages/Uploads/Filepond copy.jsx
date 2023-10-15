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
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);

export default function Filepond({
    props,
    inputname,
    allowMultiple,
    maxFiles,
    required,
}) {
    const { csrf_token } = usePage().props;
    const [files, setFiles] = useState([]);
    // const handleFilePondInit = () => {
    //     console.log("init");
    //     let myFiles = [];
    //     let arr = ["http://127.0.0.1:8000/storage/26/1759718426953396.jpg"];
    //     for (let i = 0; i < arr.length; i++) {
    //         myFiles.push({
    //             source: [
    //                 "http://127.0.0.1:8000/storage/26/1759718426953396.jpg",
    //             ],
    //             options: {
    //                 type: "local",
    //                 metadata: {
    //                     poster: [
    //                         "http://127.0.0.1:8000/storage/26/1759718426953396.jpg",
    //                     ],
    //                 },
    //             },
    //         });
    //     }
    // };
    // const addFormImage = (image) => {
    //     let arr = ["http://127.0.0.1:8000/storage/26/1759718426953396.jpg"];
    //     arr.push(image);
    //     // this.form.image = arr.join('|');
    //     // console.log(this.form.image);
    // };
    // const handleFilePondLoad = (response) => {
    //     console.log("loadddd");
    //     addFormImage(response);
    //     return response;
    // };
    // const [files2] = useState([
    //     {
    //         source: ["http://192.168.1.6:8000/storage/26/1759718426953396.jpg"],
    //         options: { type: "local" },
    //     },
    // ]);
    // const [images, setImages] = useState([
    //     "http://192.168.1.6:8000/storage/26/1759718426953396.jpg",
    //     "http://192.168.1.6:8000/storage/28/1759718567338104.png",
    // ]);

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
                    acceptedFileTypes={['image/png', 'image/jpeg' , 'video/mp4']}
                    allowReplace = {true}
                    allowReorder={"true"}
                    server={{
                        load: (
                            source,
                            load,
                            error,
                            progress,
                            abort,
                            headers
                        ) => {
                            var myRequest = new Request(source);
                            fetch(myRequest).then(function (response) {
                                response.blob().then(function (myBlob) {
                                    load(myBlob);
                                });
                            });
                        },
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
                        // revert: {
                        //     url: "/upload/filepond/destroy",
                        //     method: "DELETE",
                        //     headers: {
                        //         "X-CSRF-TOKEN": csrf_token,
                        //     },
                        //     withCredentials: false,
                        //     timeout: 7000,
                        //     onerror: null,
                        // },
                        // revert: (uniqueFileId, load, error) => {

                        //     //delete file
                        //     console.log(uniqueFileId);
        
                        //     error('Error terjadi saat delete file');
        

                        // },
                        options: {
                            type: "local",
                        },
                    }}
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
                {/* <FilePond
                
                    files={images.map((image) => ({ source: image, options: { type: "local"}, }))}
                    onupdatefiles={(fileItems) => {
                        setImages(fileItems.map((fileItem) => fileItem.file));
                    }}
                    server={{
                        process: {
                            url: "/upload/filepond/store",
                            method: "POST",
                            headers: {
                                "X-CSRF-TOKEN": csrf_token,
                            },
                            withCredentials: false,
                            timeout: 7000,
                            onload: (response) => {
                                setImages({
                                    source: response,
                                    options: {
                                      type: 'local',
                                    },
                                  });
                                // setImages([...images, response]);
                            },
                        },
                        fetch: {
                            url: images,
                            options: { type: "local"},
                        },
                        revert: {
                            url: "https://example.com/revert",
                        },
                    }}
                    labelIdle='Drag & Drop your images or <span class="filepond--label-action">Browse</span>'
                    allowMultiple={allowMultiple}
                    maxFiles={maxFiles}
                    name={inputname}
                    credits={"false"}
                    required={required}
                    allowReorder={"true"}
                    imagePreviewHeight={200}
                    allowImagePreview={true}
                /> */}
            </Container>
        </div>
    );
}

Filepond.layout = (page) => <App children={page}></App>;
