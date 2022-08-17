function GetTransactionsRequest(axios, {filter_col, filter_value }){
    return axios.post('/billing/payments', {});
}

export default GetTransactionsRequest;
