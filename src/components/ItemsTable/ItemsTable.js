import React, {useContext, useEffect, useState} from "react";
import {Button, ButtonGroup, Col, Row, Table} from "react-bootstrap";
import "./ItemsTable.css"
import useRequest from "../../hooks/useRequest";
import GetItemsRequest from "../../routes/GetItemsRequest";
import GetItemsStatsRequest from "../../routes/GetItemsStatsRequest";
import GetAgentsRequest from "../../routes/GetAgentsRequest";
import {useAxios} from "../../hooks";
import {AuthContext} from "../../context";
import {Util} from "../../utils";

const initFilter = {Status: "", Agent: "", SourceCountryCode: "", DestinationCountryCode: "", from: "", to: "", PaymentMethod: "", PaymentStatus: "", CollectionOption: ""};
const initFilterSpecs = {filter_value: "", filter_by: "ALL"};
const initPagingSpecs = {page_offset: 0, page_size: 50};
function ItemsTable() {
    const [stats, setStats] = useState({});
    const [cargos, setCargos] = useState([]);
    const [agents, setAgents] = useState([]);
    const [getItems,] = useRequest(GetItemsRequest);
    const [getItemsStats,] = useRequest(GetItemsStatsRequest);
    const [getAgents,] = useRequest(GetAgentsRequest);
    const [filter, setFilter] = useState(initFilter);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterSpecs, setFilterSpecs] = useState(initFilterSpecs);
    const [pagingSpecs, setPagingSpecs] = useState(initPagingSpecs);
    const {auth: {routes, accountType, accountId}} = useContext(AuthContext);

    const axiosInstance = useAxios();

    const handleCsvDownload = () => {
        axiosInstance({
            url: '/cargo',
            method: 'POST',
            responseType: 'blob',
            headers: {
                Accept: 'text/csv'
            },
            data: {
                filter_specification: filterSpecs,
                paging_specification: {
                    page_offset: 0,
                    page_size: 2000
                }
            }
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'export.csv'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }).catch((e)=>{
            console.error(e);
        });
    };
    const loadAgents = () => {
        setAgents([]);
        getAgents().then(({data}) => {
            setAgents(data.agents);
        }).catch((e) => {});
    }
    const loadItems = () => {
        setCargos([]);
        getItems({...filterSpecs, ...pagingSpecs}).then(({data}) => {
            setCargos(data.cargos);
        }).catch((e) => {});
    }
    const loadStats = () => {
        setStats({});
        getItemsStats(filterSpecs).then(({data}) => {
            setStats(data.stats);
        }).catch((e) => {});
    }

    const handleSearch = () => {
        setFilterSpecs({filter_value: searchTerm, filter_by: "ALL"});
        setPagingSpecs(initPagingSpecs);
    };

    const handleFilter = () => {
        setFilterSpecs({filter_value: Util.filterEmpty(filter), filter_by: "COMBINE"});
        setPagingSpecs(initPagingSpecs);
    };
    const resetFilter = () => {
        setFilterSpecs(initFilterSpecs);
        setPagingSpecs(initPagingSpecs);
        setFilter(initFilter);
    };
    const updateFilter = ({key, value}) => {
        if(value) {
            setFilter((prev) => ({...prev, [key]: value}));
        }else{
            setFilter((prev) => {
                const {[key]: _, ...newFilter} = prev;
                return newFilter;
            });
        }
    }

    useEffect(() => {
        loadItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterSpecs, pagingSpecs]);

    useEffect(() => {
        loadStats();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterSpecs]);

    useEffect(() => {
        loadAgents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>Items</h1>
            <Row>
                <Col>
                    {(stats && stats.length) && (
                        <Table bordered>
                            <thead>
                            <tr>
                                <th>Q-ty</th>
                                <th>Weight</th>
                                <th>Invoice</th>
                            </tr>
                            </thead>
                            <tbody>
                            {stats.map((item, index)=>(
                                <tr key={index}>
                                    <td>{item.count}</td>
                                    <td>{item.weight}</td>
                                    <td>{item.price} {item.ccy}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
                <Col>
                    <Button variant={"info"} className={"float-right my-2"} onClick={handleCsvDownload}>Download as CSV</Button>
                </Col>
            </Row>
            <Row className={"mb-3"}>
                <Col xs={6} md={4} lg={2}>
                    <label htmlFor="paymentFilter">Payment status</label>
                    <select className={"form-control"} id="paymentFilter"
                            value={filter.PaymentStatus}
                            onChange={({target: {value}}) => {updateFilter({key: 'PaymentStatus', value})}}>
                        <option value="">All</option>
                        <option value="PAID">Paid</option>
                        <option value="PENDING">Not Paid</option>
                    </select>
                </Col>
                <Col xs={6} md={4} lg={2}>
                    <label htmlFor="paymentMethodFilter">Payment method</label>
                    <select className={"form-control"} id="paymentMethodFilter"
                            value={filter.PaymentMethod}
                            onChange={({target: {value}}) => {updateFilter({key: 'PaymentMethod', value})}}>
                        <option value="">All</option>
                        <option value="STRIPE">Stripe</option>
                        <option value="CASH">Cash</option>
                        <option value="BANK">Bank</option>
                        <option value="CARD">Card</option>
                    </select>
                </Col>
                <Col xs={6} md={4} lg={2}>
                    <label htmlFor="dateFrom">Date from:</label>
                    <input type={"date"} id="dateFrom" className={"form-control"} value={filter.from} onChange={({target: {value}}) => {updateFilter({key: 'from', value})}} />
                </Col>
                <Col xs={6} md={4} lg={2}>
                    <label htmlFor="dateTo">Date to:</label>
                    <input type={"date"} id="dateTo" className={"form-control"} value={filter.to} onChange={({target: {value}}) => {updateFilter({key: 'to', value})}} />
                </Col>
                <Col xs={6} md={4} lg={2}>
                    <label htmlFor="collectionOption">Collection:</label>
                    <select className={"form-control"} id="collectionOption"
                            value={filter.CollectionOption}
                            onChange={({target: {value}}) => {updateFilter({key: 'CollectionOption', value})}}>
                        <option value="">All</option>
                        <option value="HOME">Home</option>
                        <option value="OFFICE">Office</option>
                    </select>
                </Col>
                <div className="w-100 d-none d-lg-block"/>
                <Col xs={6} md={4} lg={2}>
                    <label htmlFor="status">Status:</label>
                    <select className={"form-control"} id="status"
                            value={filter.Status}
                            onChange={({target: {value}}) => {updateFilter({key: 'Status', value: value})}}>
                        <option value="">All</option>
                        <option value="PENDING">Pending</option>
                        <option value="PICKED_UP">Picked up</option>
                        <option value="PROCESSING">Processing</option>
                        <option value="IN_TRANSIT">In transit</option>
                        <option value="ARRIVED">Arrived</option>
                        <option value="RECEIVED">Received</option>
                        <option value="DELAYED">Delayed</option>
                        <option value="RELEASED">Released</option>
                    </select>
                </Col>
                <Col xs={6} md={4} lg={2}>
                    <label htmlFor="route">Route:</label>
                    <select className={"form-control"} id="route"
                            value={`${(filter.SourceCountryCode && filter.DestinationCountryCode)?`${filter.SourceCountryCode}/${filter.DestinationCountryCode}`:""}`}
                            onChange={({target: {value}}) => {
                                const route = value?value.split('/'):["",""];
                                updateFilter({key: 'SourceCountryCode', value: route[0]});
                                updateFilter({key: 'DestinationCountryCode', value: route[1]});
                            }}>
                        <option value="">All</option>
                        {routes.map((item, index)=>(
                          <option value={`${item.sourceCountryCode}/${item.destinationCountryCode}`} key={index}>{`${item.sourceCountryCode}/${item.destinationCountryCode}`}</option>
                        ))}
                    </select>
                </Col>
                {accountType === 'ADMIN' && accountId === "1" &&
                <Col xs={6} md={4} lg={2}>
                    <label htmlFor="agent">Agent:</label>
                    <select className={"form-control"} id="agent"
                            value={filter.Agent}
                            onChange={({target: {value}}) => {updateFilter({key: 'Agent', value: value})}}>
                        <option value="">All</option>
                        {agents && agents.map((item, index)=>(
                          <option value={item.id} key={index}>{item.username}</option>
                        ))}
                    </select>
                </Col>}
                <Col xs={4} className="ml-auto">
                    <label>&nbsp;</label>
                    <ButtonGroup className={"d-flex align-items-end"}>
                        <Button variant={"primary"} block onClick={handleFilter}>Filter</Button>
                        {(JSON.stringify(initFilterSpecs) !== JSON.stringify(filterSpecs) && JSON.stringify(initFilter) !== JSON.stringify(filter)) &&
                            <Button variant={"danger"} onClick={resetFilter}>&times;</Button>
                        }
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={10}>
                    <input type={"text"} placeholder={"Filter through parcels"} className={"form-control"} value={searchTerm} onChange={({target: {value}}) => {setSearchTerm(value)}} />
                </Col>
                <Col xs={12} md={2}>
                    <Button variant={"primary"} block onClick={handleSearch}>Search</Button>
                </Col>
            </Row>
            <br  />
            <Table responsive="md" striped bordered hover className={"items-table"}>
                <thead>
                <tr>
                    <th>Tracking number</th>
                    <th>Weight</th>
                    <th>From/To</th>
                    <th>Types</th>
                    <th>Description</th>
                    <th>Item price</th>
                    <th>Invoice</th>
                    <th>Notes</th>
                    <th>Price</th>
                    <th>Sender information</th>
                    <th>Receiver information</th>
                    <th>Payment info</th>
                </tr>
                </thead>
                <tbody>
                {cargos.map((cargo) => {
                    return (
                        <tr key={cargo.tracking_number}>
                            <td>{cargo.tracking_number}</td>
                            <td>{cargo.item.weight} KG</td>
                            <td>{cargo.shipping_specs.route.source_country_code}/{cargo.shipping_specs.route.destination_country_code}</td>
                            <td>
                                {cargo.shipping_specs.parcel_type}<br />
                                {cargo.shipping_specs.collection_option}<br />
                                {cargo.customer_type}
                            </td>
                            <td>{cargo.item.description}</td>
                            <td>{cargo.item.item_price} {cargo.item.item_currency_code}</td>
                            <td>{cargo.item.invoice_path != null ? <a href={cargo.item.invoice_path}>Download</a> : <span>N/A</span>}</td>
                            <td>{cargo.notes}</td>
                            <td>
                                <b>Freight:</b> {cargo.invoice.freight_price}&nbsp;{cargo.invoice.currency_code}<br/>
                                <b>Delivery:</b> {cargo.invoice.delivery_price}&nbsp;{cargo.invoice.currency_code}
                            </td>
                            <td>
                                {cargo.shipping_specs.sender_information.name}<br/>
                                {cargo.shipping_specs.sender_information.email}<br/>
                                {cargo.shipping_specs.sender_information.phone}<br/>
                                {cargo.shipping_specs.sender_information.address.address_line_1}<br/>
                                {cargo.shipping_specs.sender_information.address.address_line_2}<br/>
                                {cargo.shipping_specs.sender_information.address.postal_code}<br/>
                                {cargo.shipping_specs.sender_information.address.country_code}<br/>
                            </td>
                            <td>
                                {cargo.shipping_specs.receiver_information.name}<br/>
                                {cargo.shipping_specs.receiver_information.email}<br/>
                                {cargo.shipping_specs.receiver_information.phone}<br/>
                                {cargo.shipping_specs.receiver_information.address.address_line_1}<br/>
                                {cargo.shipping_specs.receiver_information.address.address_line_2}<br/>
                                {cargo.shipping_specs.receiver_information.address.postal_code}<br/>
                                {cargo.shipping_specs.receiver_information.address.country_code}<br/>
                            </td>
                            <td>
                                <b>Invoice Id:</b> {cargo.invoice.invoice_id}<br/>
                                <b>Status:</b> {cargo.invoice.payment_status}<br/>
                                <b>Code:</b> {cargo.release_code}
                                <b>Stripe payment link:</b> <a href={"https://api.georgiancargo.co.uk/billing/payment/stripe?invoice_ids=" + cargo.invoice.invoice_id}>Pay</a>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
            <Row>
                <Col>
                    <Button variant={"light"} onClick={()=>{
                        setPagingSpecs({...pagingSpecs, page_offset: pagingSpecs.page_offset - pagingSpecs.page_size});
                    }} block disabled={pagingSpecs.page_offset === 0}> Previous </Button>
                </Col>
                <Col>
                    <Button variant={"light"} onClick={ ()=> {
                        setPagingSpecs({...pagingSpecs, page_offset: pagingSpecs.page_offset + pagingSpecs.page_size});
                    }} block> Next </Button>
                </Col>
            </Row>
        </>
    );
}

export default ItemsTable;
