import React, {useState,useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';

const column =[
    {field: 'userid', headerName: 'UserID'},
    {field: 'id', headerName: 'ID'},
    {field: 'title', headerName: 'Title', width: 300},
    {field: 'body', headerName: 'Body', width: 600},
    
]

const Bai4 = () => {

    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((data) =>  setTableData(data))
    })
    return (
        <div style={{height: 700, width:'100%'}}>
            <DataGrid 
             row= {tableData}
             column={column}
             pageSize= {10}
             checkboxSelection
            
            />
        </div>
    )
}

export default Bai4;
