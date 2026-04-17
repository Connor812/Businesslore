import React, { useState, useEffect, useRef } from "react";
import "../assets/css/dashboard.css";
import JSZip from 'jszip';

function Dashboard() {
    const fileUploadWrapperRef = useRef(null);
    const fileInputRef = useRef(null);
    const uploadBtnRef = useRef(null);
    const downloadBtnRef = useRef(null);
    const widthInputRef = useRef(null);
    const imageInputTextRef = useRef(null);
    const selectedFilesListRef = useRef(null);

    const MAX_FILE_SIZE_MB = 1000; // Maximum file size in MB
    const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024; // Convert MB to bytes

    const [filesToUpload, setFilesToUpload] = useState([]);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        const fileUploadWrapper = fileUploadWrapperRef.current;
        const fileInput = fileInputRef.current;
        const uploadBtn = uploadBtnRef.current;
        const downloadBtn = downloadBtnRef.current;
        const widthInput = widthInputRef.current;
        const imageInputText = imageInputTextRef.current;
        const selectedFilesList = selectedFilesListRef.current;

        const handleDragOver = (event) => {
            event.preventDefault();
            fileUploadWrapper.classList.add('dragover');
        };

        const handleDragLeave = () => {
            fileUploadWrapper.classList.remove('dragover');
        };

        const handleDrop = (event) => {
            event.preventDefault();
            fileUploadWrapper.classList.remove('dragover');
            handleFiles(event.dataTransfer.files);
        };

        const handleFiles = (files) => {
            const validFiles = [];
            for (const file of files) {
                if (file.size <= MAX_FILE_SIZE_BYTES) {
                    validFiles.push(file);
                } else {
                    alert(`File ${file.name} exceeds the ${MAX_FILE_SIZE_MB}MB size limit.`);
                }
            }
            setFilesToUpload((prevFiles) => [...prevFiles, ...validFiles]);
        };

        const handleFileInput = () => {
            if (fileInput.files.length > 0) {
                handleFiles(fileInput.files);
            }
        };

        const handleUploadClick = async () => {
            await handleUpload();
        };

        const updateFileList = () => {
            selectedFilesList.innerHTML = '';
            filesToUpload.forEach((file, index) => {
                const listItem = document.createElement('li');
                listItem.classList.add('d-flex', 'align-items-center', 'mb-2');

                const removeButton = document.createElement('button');
                removeButton.textContent = 'X';
                removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'me-2');
                removeButton.addEventListener('click', () => {
                    removeFile(index);
                });

                const fileName = document.createElement('span');
                fileName.textContent = file.name;
                fileName.classList.add('me-2');

                listItem.appendChild(removeButton);
                listItem.appendChild(fileName);
                selectedFilesList.appendChild(listItem);
            });
            imageInputText.textContent = `${filesToUpload.length} file(s) selected`;
        };

        const removeFile = (index) => {
            setFilesToUpload((prevFiles) => prevFiles.filter((_, i) => i !== index));
        };

        const handleUpload = async () => {
            if (!filesToUpload || filesToUpload.length === 0) {
                alert('No files selected.');
                return;
            }

            setUploading(true);

            const zip = new JSZip();
            const compressedImages = await Promise.all(filesToUpload.map(async (file) => {
                return compressImage(file);
            }));

            compressedImages.forEach(({ compressedFile, fileName }) => {
                zip.file(fileName, compressedFile);
            });

            zip.generateAsync({ type: 'blob' }).then((content) => {
                const formData = new FormData();
                formData.append('zipFile', content, 'compressed_images.zip');

                fetch('http://businesslore.com/api/save_zip.php', {
                    method: 'POST',
                    body: formData 
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            downloadBtn.href = data.zipFileUrl;
                            downloadBtn.classList.remove('hidden');
                            downloadBtn.textContent = 'Download Processed Images';
                        } else {
                            alert('There was an error saving the file.');
                        }
                        setUploading(false);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('Error processing files. Please try again.');
                        setUploading(false);
                    });
            });
        };

        const compressImage = (file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = function (event) {
                    const img = new Image();
                    img.onload = function () {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        const width = parseInt(widthInput.value) || img.width;
                        const height = img.height * (width / img.width);
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);
                        canvas.toBlob((blob) => {
                            resolve({
                                compressedFile: blob,
                                fileName: file.name
                            });
                        }, `image/${getSelectedImageType()}`);
                    };
                    img.src = event.target.result;
                };
                reader.readAsDataURL(file);
            });
        };

        const getSelectedImageType = () => {
            const imageTypeInputs = document.querySelectorAll('input[name="image-type"]');
            for (const input of imageTypeInputs) {
                if (input.checked) {
                    return input.value;
                }
            }
            return 'webp';
        };

        fileUploadWrapper.addEventListener('dragover', handleDragOver);
        fileUploadWrapper.addEventListener('dragleave', handleDragLeave);
        fileUploadWrapper.addEventListener('drop', handleDrop);
        fileInput.addEventListener('input', handleFileInput);
        uploadBtn.addEventListener('click', handleUploadClick);

        return () => {
            fileUploadWrapper.removeEventListener('dragover', handleDragOver);
            fileUploadWrapper.removeEventListener('dragleave', handleDragLeave);
            fileUploadWrapper.removeEventListener('drop', handleDrop);
            fileInput.removeEventListener('input', handleFileInput);
            uploadBtn.removeEventListener('click', handleUploadClick);
        };
    }, [filesToUpload]);

    useEffect(() => {
        const imageInputText = imageInputTextRef.current;
        if (filesToUpload.length > 0) {
            imageInputText.textContent = `${filesToUpload.length} file(s) selected`;
        } else {
            imageInputText.textContent = 'Drag & Drop your files here or click to upload';
        }
    }, [filesToUpload]);

    return (
        <main>
            <div className="container mt-5">
                <div className="file-upload-wrapper" id="file-upload-wrapper" ref={fileUploadWrapperRef}>
                    <input type="file" id="file-input" name="files[]" multiple ref={fileInputRef} />
                    <p id="image-input-text" ref={imageInputTextRef}>Drag & Drop your files here or click to upload</p>
                </div>
                <div id="selected-files-container" className="mt-3">
                    <h5>Selected Files:</h5>
                    <ul id="selected-files-list" className="list-unstyled" ref={selectedFilesListRef}></ul>
                </div>
                <div className="actions-container">
                    <div className="mt-2">
                        <label htmlFor="image-type">Select Image Type</label>
                        <div id="image-type">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="image-type" id="image-type-webp" value="webp" defaultChecked />
                                <label className="form-check-label" htmlFor="image-type-webp">
                                    Webp
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="image-type" id="image-type-jpg" value="jpg" />
                                <label className="form-check-label" htmlFor="image-type-jpg">
                                    JPG
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="image-type" id="image-type-png" value="png" />
                                <label className="form-check-label" htmlFor="image-type-png">
                                    PNG
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="width-input" className="form-label">Specify Width (in pixels optional):</label>
                        <input type="number" id="width-input" className="form-control" placeholder="Enter width" ref={widthInputRef} />
                    </div>
                </div>
            </div>
            <center>
                <button id="upload-btn" className="btn btn-primary mt-3" ref={uploadBtnRef} disabled={uploading}>
                    {uploading ? <div className="spinner-border text-light" role="status"><span className="visually-hidden">Loading...</span></div> : 'Upload Images'}
                </button>
                <a id="download-btn" className="btn btn-success mt-3 hidden" download ref={downloadBtnRef}>Download Processed Images</a>
            </center>
        </main >
    );
}

export default Dashboard;