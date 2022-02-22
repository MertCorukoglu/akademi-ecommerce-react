import React, { useEffect, useState } from 'react'
import { Table, Spin } from 'antd';
import { baseService } from '../../../../service/baseService'



function CategoryList() {

    const columns = [
        {
          title: 'ID',
          dataIndex: '_id',
          key: '_id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
      ];
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       
        baseService.getAll('/category')
        .then((data) => {
            setCategories(data);
            setLoading(false)
        })

    }, [])

    
    return (
        <>
        <Spin tip="Loading..." spinning={loading}>
            <Table dataSource={categories} columns={columns} />
        </Spin>
       
        </>
    )
}

export default CategoryList
