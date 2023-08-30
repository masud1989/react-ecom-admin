import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import 'react-quill/dist/quill.snow.css';


const AddProduct = () => {
    const [value, setValue] = useState('');
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
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
                    <h1>Product</h1>
                    <small>Add New Product</small>
                </div>
            </section>
            <form>
                <section className='content-header'>
                    
                    <div className="row mt-3">
                        <div className='col-6'>
                            <CustomInput type="text" placeholder="Type Coupon Name" id="coupon-name" />
                        </div>
                        <div className='col-6'>
                            <CustomInput type="text" placeholder="Discount Percentage" id="coupon-discount" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className='col-6'>
                            <CustomInput type="text" placeholder="Type Coupon Name" id="coupon-name" />
                        </div>
                        <div className='col-6'>
                            <CustomInput type="text" placeholder="Discount Percentage" id="coupon-discount" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className='col-12' >
                            <ReactQuill value={value} onChange={setValue} placeholder='Description' />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className='col-6'>
                            <CustomInput type="text" placeholder="Type Coupon Name" id="coupon-name" />
                        </div>
                        <div className='col-6'>
                            <CustomInput type="text" placeholder="Discount Percentage" id="coupon-discount" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className='col-6'>
                            <CustomInput type="text" placeholder="Type Coupon Name" id="coupon-name" />
                        </div>
                        <div className='col-6'>
                            <CustomInput type="text" placeholder="Discount Percentage" id="coupon-discount" />
                        </div>
                    </div>
                    <div> 
                        <div className="row mb-3">
                        <h6>Select Images to Upload </h6>
                            <div className='col-12'>
                                <ImgCrop rotationSlider>
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onChange={onChange}
                                        onPreview={onPreview}
                                    >
                                        {fileList.length < 10 && '+ Select'}
                                    </Upload>
                                </ImgCrop>
                            </div>
                        </div>
                    </div>

                    <button to='/'
                        className='save-btn'
                        type='submit'
                    >
                        Add Product
                    </button>
                </section>
            </form>
        </>
    )
}

export default AddProduct