// @ts-nocheck
import React, {useEffect, useRef, useState} from 'react';
import {Button, Tab, Tabs} from 'react-bootstrap';
import FileInputForm from "../../components/FileInputForm/FileInputForm";
import DataTable from "../../components/DataTable/DataTable";
import DataService, {IRecord} from "../../api/DataService";
import {Link, Navigate, useNavigate} from "react-router-dom";

const MainPage = () => {
        const [data, setData] = useState<IRecord[]>([]);
        const [totalPages, setTotalPages] = useState(0);
        const [page, setPage] = useState(0);
        const [isPostsLoading, setIsPostLoading] = useState(false);

    const lastElement = useRef();
    const observer = useRef();
    useEffect(() => {
        if(isPostsLoading) return;
        if(observer.current) observer.current.disconnect();
        let callback = function (entries, observer) {
            if(entries[0].isIntersecting && page < totalPages){
                setPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isPostsLoading])

    useEffect(() => {
        fetchData(20, page * 20);
    }, [page])
    let navigate = useNavigate()


        const fetchData: any = async (limit: number, page: number) => {
            try {
                setIsPostLoading(true)
                const result = await DataService.getRecords(limit, page)
                setTotalPages(result.data.paginationResponse.total)
                setData( [...data, ...result.data.groupedTransactions])
                setIsPostLoading(false)
            } catch (e) {
                alert(e)
            }
        }

        const download = async (e) => {
            e.preventDefault();
            console.log("rere")
            let url = await DataService.getFile()
            console.log(url)
            navigate(url)
        }

        return (
            <Tabs defaultActiveKey="dataLoading" className="mb-3 mt-1">
                <Tab eventKey="dataLoading" title="Загрузка данных">
                    <FileInputForm/>
                </Tab>
                <Tab eventKey="table" title="Таблица">
                    <DataTable records={data}/>
                    <div ref={lastElement} style={{height: 20, background: 'red'}}/>
                </Tab>
                <Tab eventKey="download" title="Скачать">
                    <a href="https://api.top-course-work.dev.daniilda.xyz/v1/common/get/grouped-average/csv">
                        Скачать
                    </a>
                </Tab>
            </Tabs>
        );
    }
;

export default MainPage;