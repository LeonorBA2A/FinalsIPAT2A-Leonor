import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
        useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };
    return (
    <div>
        <h1>Items</h1>
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <div className='output-title'>PDS of {item.sname}, {item.fname} {item.mname}</div>
                    <div className='main-container'>
                        <div className='container'>
                            <div className='output-numbering'>I. PERSONAL INFORMATION</div>
                            <div>
                                <h3>CS ID No.: </h3>
                                {item.csIDno}
                            </div>
                            <div>
                                <h3>Surname: </h3>
                                {item.sname}
                            </div>
                            <div>
                                <h3>First Name: </h3>
                                {item.fname}
                            </div>
                            <div>
                                <h3>Middle Name: </h3>
                                {item.mname}
                            </div>
                            <div>
                                <h3>Extension Name: </h3>
                                {item.extname}
                            </div>
                            <div>
                                <h3>Date of Birth: </h3>
                                {item.dob}
                            </div>
                            <div>
                                <h3>Place of Birth: </h3>
                                {item.pob}
                            </div>
                            <div>
                                <h3>Sex: </h3>
                                {item.sex}
                            </div>
                            <div>
                                <h3>Height: </h3>
                                {item.height}
                            </div>
                            <div>
                                <h3>Weight: </h3>
                                {item.weight}
                            </div>
                            <div>
                                <h3>Blood type: </h3>
                                {item.btype}
                            </div>
                            <div>
                                <h3>GSIS ID No: </h3>
                                {item.gsisid}
                            </div>
                            <div>
                                <h3>Pag-Ibig ID No: </h3>
                                {item.pagibigid}
                            </div>
                            <div>
                                <h3>Philhealth No: </h3>
                                {item.philhealthno}
                            </div>
                            <div>
                                <h3>SSS No: </h3>
                                {item.sssno}
                            </div>
                            <div>
                                <h3>TIN No.: </h3>
                                {item.tinno}
                            </div>
                            <div>
                                <h3>Angency Employee No.: </h3>
                                {item.aemployeeid}
                            </div>
                            <div>
                                <h3>Citizenship: </h3>
                                {item.citizenship}
                            </div>
                            <div>
                                <h3>Residential Address: </h3>
                                {item.raddress}
                            </div>
                            <div>
                                <h3>Zip Code: </h3>
                                {item.razipcode}
                            </div>
                            <div>
                                <h3>Permanent Address: </h3>
                                {item.paddress}
                            </div>
                            <div>
                                <h3>Zip Code: </h3>
                                {item.pazipcode}
                            </div>
                            <div>
                                <h3>Telephone No.: </h3>
                                {item.telephoneno}
                            </div>
                            <div>
                                <h3>Mobile No.: </h3>
                                {item.mobileno}
                            </div>
                            <div>
                                <h3>Email Address: </h3>
                                {item.emaddress}
                            </div>
                        </div>
                        <div className='container'>
                            <div className='output-numbering'>II. Family Background</div>
                            <div className='output-sub-title'>Spouse Information</div>
                            <div>
                                <h3>Spouse's Surname: </h3>
                                {item.ssname}
                            </div>
                            <div>
                                <h3>First Name: </h3>
                                {item.sfname}
                            </div>
                            <div>
                                <h3>Middle Name: </h3>
                                {item.smname}
                            </div>
                            <div>
                                <h3>Name Extension: </h3>
                                {item.sextname}
                            </div>
                            <div>
                                <h3>Occupation: </h3>
                                {item.sjob}
                            </div>
                            <div>
                                <h3>Employer/Business Name: </h3>
                                {item.sebname}
                            </div>
                            <div>
                                <h3>Telephone No.: </h3>
                                {item.stelephoneno}
                            </div>
                            <div className='output-sub-title'>Children</div>
                            <div>
                                <h3>Child 1 Name: </h3>
                                {item.child1name}
                            </div>
                            <div>
                                <h3>Date of Birth: </h3>
                                {item.child1dob}
                            </div>
                            <div>
                                <h3>Child 2 Name: </h3>
                                {item.child2name}
                            </div>
                            <div>
                                <h3>Date of Birth: </h3>
                                {item.child2dob}
                            </div>
                            <div>
                                <h3>Child 3 Name: </h3>
                                {item.child3name}
                            </div>
                            <div>
                                <h3>Date of Birth: </h3>
                                {item.child3dob}
                            </div>
                            <div>
                                <h3>Child 4 Name: </h3>
                                {item.child4name}
                            </div>
                            <div>
                                <h3>Date of Birth: </h3>
                                {item.child4dob}
                            </div>
                            <div>
                                <h3>Child 5 Name: </h3>
                                {item.child5name}
                            </div>
                            <div>
                                <h3>Date of Birth: </h3>
                                {item.child5dob}
                            </div>
                            <div>
                                <h3>Child 6 Name: </h3>
                                {item.child6name}
                            </div>
                            <div>
                                <h3>Date of Birth: </h3>
                                {item.child6dob}
                            </div>
                            <div className='output-sub-title'>Father's Information</div>
                            <div>
                                <h3>Surname: </h3>
                                {item.fsname}
                            </div>
                            <div>
                                <h3>First Name: </h3>
                                {item.ffname}
                            </div>
                            <div>
                                <h3>Middle Name: </h3>
                                {item.fmname}
                            </div>
                            <div>
                                <h3>Extension Name: </h3>
                                {item.fextname}
                            </div>
                            <div className='output-sub-title'>Mother's Information (Maiden)</div>
                            <div>
                                <h3>Surname: </h3>
                                {item.mmsname}
                            </div>
                            <div>
                                <h3>First Name: </h3>
                                {item.mmfname}
                            </div>
                            <div>
                                <h3>Middle Name: </h3>
                                {item.mmmname}
                            </div>
                            <div>
                                <h3>Extension Name: </h3>
                                {item.mmextname}
                            </div>
                        </div>
                        <div className='container'>
                            <div className='output-numbering'>III. EDUCATIONAL BACKGROUND</div>
                            <div className='output-sub-title'>Primary School</div>
                            <div>
                                <h3>Name of School: </h3>
                                {item.elemschoolname}
                            </div>
                            <div>
                                <h3>Basic Educational Degree/ Course: </h3>
                                {item.elemeducdegreecourse}
                            </div>
                            <div>
                                <h3>From: </h3>
                                {item.elemattendancefrom}
                            </div>
                            <div>
                                <h3>To: </h3>
                                {item.elemattendanceto}
                            </div>
                            <div>
                                <h3>Highest Level/Units Earned: </h3>
                                {item.elemhighestlevel}
                            </div>
                            <div>
                                <h3>Year Graduated: </h3>
                                {item.elemyrgrad}
                            </div>
                            <div>
                                <h3>Scholarship Academic Honors Received: </h3>
                                {item.elemaacadreceive}
                            </div>
                            <div className='output-sub-title'>Secondary School</div>
                            <div>
                                <h3>Name of School: </h3>
                                {item.secschoolname}
                            </div>
                            <div>
                                <h3>Basic Educational Degree/ Course: </h3>
                                {item.seceducdegreecourse}
                            </div>
                            <div>
                                <h3>From: </h3>
                                {item.secattendancefrom}
                            </div>
                            <div>
                                <h3>To: </h3>
                                {item.secattendanceto}
                            </div>
                            <div>
                                <h3>Highest Level/Units Earned: </h3>
                                {item.sechighestlevel}
                            </div>
                            <div>
                                <h3>Year Graduated: </h3>
                                {item.secyrgrad}
                            </div>
                            <div>
                                <h3>Scholarship Academic Honors Received: </h3>
                                {item.secaacadreceive}
                            </div>
                            <div className='output-sub-title'>Vocational School</div>
                            <div>
                                <h3>Name of School: </h3>
                                {item.vocschoolname}
                            </div>
                            <div>
                                <h3>Basic Education Degree/Course: </h3>{
                                item.voceducdegreecourse}
                            </div>
                            <div>
                                <h3>From: </h3>
                                {item.vocattendancefrom}
                            </div>
                            <div>
                                <h3>To: </h3>
                                {item.vocattendanceto}
                            </div>
                            <div>
                                <h3>Highest Level/Units Earned: </h3>
                                {item.vochighestlevel}
                            </div>
                            <div>
                                <h3>Year Graduated: </h3>
                                {item.vocyrgrad}
                            </div>
                            <div>
                                <h3>Scholarship Academic Honors Recieved: </h3>
                                {item.vocaacadreceive}
                            </div>
                            <div className='output-sub-title'>Tertiary School</div>
                            <div>
                                <h3>Name of School: </h3>
                                {item.terschoolname}
                            </div>
                            <div>
                                <h3>Basic Education Degree/Course: </h3>
                                {item.tereducdegreecourse}
                            </div>
                            <div>
                                <h3>From: </h3>
                                {item.terattendancefrom}
                            </div>
                            <div>
                                <h3>To: </h3>
                                {item.terattendanceto}
                            </div>
                            <div>
                                <h3>HIghest Level/Units Earned: </h3>
                                {item.terhighestlevel}
                            </div>
                            <div>
                                <h3>Year Graduated: </h3>
                                {item.teryrgrad}
                            </div>
                            <div>
                                <h3>Scholarship Academic Honors Recieved: </h3>
                                {item.teraacadreceive}
                            </div>
                            <div className='output-sub-title'>Graduate Studies</div>
                            <div>
                                <h3>Name of School: </h3>
                                {item.gradschoolname}
                            </div>
                            <div>
                                <h3>Basic Education Course/Degree: </h3>
                                {item.gradeducdegreecourse}
                            </div>
                            <div>
                                <h3>From: </h3>
                                {item.gradattendancefrom}
                            </div>
                            <div>
                                <h3>To: </h3>
                                {item.gradattendanceto}
                            </div>
                            <div>
                                <h3>HIghest Level/Units Earned: </h3>
                                {item.gradhighestlevel}
                            </div>
                            <div>
                                <h3>Year Graduated: </h3>
                                {item.gradyrgrad}
                            </div>
                            <div>
                                <h3>Scholarship Academic Honors Recieved: </h3>
                                {item.gradaacadreceive}
                            </div>
                        </div>
                    </div>
                    <div className='edit-delete-btn'>
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    );
};
export default ItemList;