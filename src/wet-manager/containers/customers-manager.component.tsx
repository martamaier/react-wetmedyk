import React, {ChangeEvent, useEffect, useState} from 'react';
import TextWidget from "../../shared/widgets/text-widget.component";
import {PlaceholderUser} from "../models/user.interface";
import axios, {AxiosResponse} from "axios";
import { Link } from 'react-router-dom';

function CustomersManager() {
    const [search, setSearch] = useState<string>('');
    const [customers, setCustomers] = useState<PlaceholderUser[]>([]);
    const [searchedResults, setSearchedResults] = useState<number[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((res: AxiosResponse<PlaceholderUser[]>) => {
                setCustomers(res.data);
            });
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>, name: string) => {
        setSearch(event.currentTarget.value);
    };

    useEffect(() => {
        const newSearchResults = customers
            .filter((customer: PlaceholderUser) => customer.name.toLowerCase().includes(search.toLowerCase()) || customer.username.toLowerCase().includes(search.toLowerCase()))
            .map((customer: PlaceholderUser) => customer.id);
        setSearchedResults(newSearchResults);
    }, [search, customers]);

    return (
        <>
            <p>Customers Manager</p>
            <TextWidget
                name="Search Customers"
                value={search}
                multiline={false}
                onChange={handleChange} />
            {
                searchedResults
                    .map((id: number) => customers
                    .find((customer: PlaceholderUser) => customer.id === id))
                    .map((customer: PlaceholderUser | undefined) => (
                        <div key={customer?.id}>
                            <Link to={`/manager/customers/${customer?.id}`}>
                                {customer?.name}
                            </Link>
                        </div>))
            }
        </>
    );
}

export default CustomersManager;
