import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';


const AddBrand = () => {
    const [value, setValue] = useState('');
    const [fileList, setFileList] = useState([
        
    ]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <>
            <section className="content-header">
                <div className="header-icon">
                    <i className="fa fa-user-plus" />
                </div>
                <div className="header-title mb-3">
                    <h1>Brand</h1>
                    <small>Add New Brand</small>
                </div>
            </section>
            <form>
                <section className='content-header'>
                    
                    <div className="row mt-3">
                        <div className='col-10'>
                            <CustomInput type="text" placeholder="Type Brand Name" id="brand-name" />
                        </div>
                    </div>
                    
                    <div> 
                        <div className="row mb-3">
                        <h6>Select Image to Upload </h6>
                            <div className='col-12'>
                                <ImgCrop rotationSlider>
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onChange={onChange}
                                        onPreview={onPreview}
                                    >
                                        {fileList.length < 1 && '+ Select'}
                                    </Upload>
                                </ImgCrop>
                            </div>
                        </div>
                    </div>

                    <button to='/'
                        className='save-btn'
                        type='submit'
                    >
                        Add Brand
                    </button>
                </section>
            </form>
        </>
    )
}

export default AddBrand