import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { usePage } from "@inertiajs/inertia-react";
registerPlugin(FilePondPluginImagePreview);

export default function EditMultipleFile({ files, onEdit }) {
    const { csrf_token } = usePage().props;
    const [fileItems, setFileItems] = useState(
        files.map((file) => ({ source: file.url }))
    );
    const handleEdit = () => {
        const editedFiles = fileItems.map((fileItem, index) => ({
            id: files[index].id,
            file: fileItem.file,
        }));
        onEdit(editedFiles);
    };
    return (
        <div>
            <FilePond
                files={fileItems}
                onupdatefiles={setFileItems}
                allowMultiple={true}
                credits={"false"}
                allowFileTypeValidation={"true"}
                acceptedFileTypes={['image/png', 'image/jpeg']}
                allowReplace = {true}
                allowReorder={"true"}
                server={{
                    // url: '/api/files/load',
                    load: {
                        method: "GET",
                        // headers: {
                        //     "X-CSRF-TOKEN": csrf_token,
                        // },
                        onload: (response) => {
                            const loadedFiles = JSON.parse(response);
                            setFileItems(
                                loadedFiles.map((file) => ({
                                    source: file.url,
                                }))
                            );
                        },
                    },
                    // process: {
                    //     url: "/upload/filepond/store",
                    //     method: "POST",
                    //     headers: {
                    //         "X-CSRF-TOKEN": csrf_token,
                    //     },
                    //     withCredentials: true,
                    //     timeout: 7000,
                    //     onerror: null,
                    // },
                    // options: {
                    //     type: "local",
                    // },
                }}
            />
            <button onClick={handleEdit}>Save</button>
        </div>
    );
}
