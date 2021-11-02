import React, { Component } from 'react';
import  Course  from './API';
import '../../css/themify-icons/themify-icons.css';

function CvItem (prop){
    return(
        <div className="col col-third CV-item">
            <img src={prop.link} className="CV-img"/>
            <p className="CV-name">{prop.name}</p>
            <div className="CV-discr">
                <p className="address">{prop.address}</p>
                <p className="salary">{prop.salary}</p>
            </div>
        </div>
    )
}


const range = 5;
const ItemList = [Course.slice(0, range)];
let start = range;
let end = range * 2;
let theLenght = Course.length
while (true) {
    ItemList.push(Course.slice(start, end));
    start += range;
    end += range;
    if (start >= theLenght) {
        break;
    }
}


console.log(ItemList);

let a = <div>Hello</div>

let theList = function theImport(item){
    let listArray =[]
    let listQuantity = Math.ceil(Course.length/5)
    for(let i=0;i<listQuantity;i++)
    {
        let a = <CvList/>
        listArray.push(a)
    }
    let theLenght = listArray.length
    for(let i=0;i<theLenght;i++)
    {
        <CvList
            content='a'
        />
    }
    return (listArray)  
}
function CvList (prop){
    return(
        <div className="content-section" name={prop.functionName}>
        {/*Định dạng danh sách đầu tiên */}
        {/*Định dạng nút bấm */}
        <div className="button">
            <div className="left-button">{prop.functionName}</div>
            <div className="right-button">See more</div>
        </div>

        {/*Định dạng dãy các danh sách */}
        <div className="row CV-list">
            {prop.content}
        </div>
    </div>
    )
}

/*Lấy vào title thay cho name, student_count thay cho lương, level thay cho địa chỉ */
function Content (prop){
   {
    return (
        <div id="content">
            {theList()}
        </div>
        );
   }

}

export default Content