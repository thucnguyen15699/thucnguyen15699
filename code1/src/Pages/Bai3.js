import React from "react";
import Table from '../Component/Table';
import {headerData, bodyData } from '../common/util';
const Bai3 = () => {
    const columns = headerData;
    const data = bodyData;
   
    return(
        <Table columns={columns} data={data} />
    )
}
export default Bai3;