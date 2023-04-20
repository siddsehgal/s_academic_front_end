import axios from 'axios';

export async function APICall({ method, url, body, query }) {
    let headersList = {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    };

    let bodyContent = JSON.stringify({
        ...body,
    });

    let reqOptions = {
        url: `${process.env.REACT_APP_BACKEND_URL}${url}`,
        method,
        headers: headersList,
        data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    const { status, ...data } = response.data;
    return { status, data };
}
