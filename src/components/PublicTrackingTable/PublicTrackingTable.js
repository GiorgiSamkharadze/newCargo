import {useRequest} from "hooks";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {getPublicParcelByTrackingNumber} from "requests";
import {Modal, SpinnerButton, ValidatedInput} from "utils";
import $ from "jquery";
import "popper.js";
import "bootstrap";
import {useRouteMatch} from "react-router";
import moment from "moment";

const PublicTrackingTable = () => {
    const match = useRouteMatch();
    const [getParcel, getting] = useRequest(getPublicParcelByTrackingNumber);
    const [parcelID, setID] = useState(match.params.tracking || "");
    const steps = [
        {
            label: 'Picked up',
            value: 'PICKUP'
        },
        {
            label: 'Processing',
            value: 'PROCESS'
        },
        {
            label: 'In transit',
            value: 'TRANSIT'
        },
        {
            label: 'Arrived',
            value: 'ARRIVE'
        },
        {
            label: 'Received',
            value: 'RECEIVE'
        },
    ];
    const OnChangeHandler = ({target: {value}}) => {
        setID(value);
    };
    const [itemHistory, setItemHistory] = useState({});
    const [lastEvent, setLastEvent] = useState(null);
    const [isDelayed, setIsDelayed] = useState(false);
    const onSubmit = (e) => {
        if (e) e.preventDefault();
        setItemHistory({});
        setLastEvent(null);
        setIsDelayed(false);
        getParcel(parcelID)
            .then((r) => {
                let next = {};
                r.data.history.forEach((event, i) => {
                    next[event.type] = {
                        at: event.time
                    };
                    if(event.type === "DELAY"){
                        setIsDelayed(true);
                    } else{
                        setLastEvent(event.type);
                    }
                });
                setItemHistory(next);
                $("#public_tracking").modal("show");
            })
            .catch((e) => {
                console.error(e);
                toast.error("No parcels found");
            });
    };
    useEffect(() => {
        if (match.params.tracking) {
            onSubmit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className="row p-3 mb-2 text-dark  justify-content-center">
                <div className="search-filter w-100 w-md-50 pr-md-4 mb-2">
                    <form
                        onSubmit={onSubmit}
                        className="input-group input-group-merge input-group-borderless"
                    >
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-search"/>
                            </span>
                        </div>
                        <ValidatedInput
                            type="search"
                            className="form-control border"
                            placeholder="Track your parcel now!"
                            value={parcelID}
                            onChange={OnChangeHandler}
                        />
                    </form>
                </div>
                <div className="sort-by w-100 w-md-25">
                    <SpinnerButton
                        type="button"
                        className="btn btn-outline-info w-100"
                        data-toggle="modal"
                        data-target="#public_tracking"
                        loading={getting}
                        onClick={onSubmit}
                    >
                        Search
                    </SpinnerButton>
                </div>
            </div>
            <Modal header="Public Tracking" id="public_tracking">
                <div className="container justify-content-center bg-light">
                    <ul className="step step-md step-centered">
                        {steps.map((step, i)=>{
                            const passed = step.value in itemHistory;
                            // console.log(step.value, passed);
                            const date = passed ? moment(itemHistory[step.value].at).format("Do of MMM YYYY, h:mm a") : null;
                            return (
                                <li className="step-item" key={i}>
                                    <div className="step-content-wrapper">
                                            <span
                                                className={`step-icon step-icon${passed ? "" : "-soft"}${lastEvent === step.value ? (isDelayed ? "-danger" : "-success") : "-navy"}`}
                                            >
                                                {i + 1}
                                            </span>
                                        <div className="step-content">
                                            <h4>{step.label}</h4>
                                            {lastEvent === step.value && isDelayed && <small><b>Item is delayed</b><br/></small>}
                                            {date && <small style={{fontSize: '0.7em'}}>{date}</small>}
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Modal>
        </>
    );
};

export default PublicTrackingTable;
