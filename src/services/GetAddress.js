const getAddress = () => {
    fetch(`http://api.positionstack.com/v1/reverse/`, {
        method: "GET",
        mode: 'no-cors',
        params: {
            access_key: '2752a4b2400bcfe3f2bf07dcb36d3dc2',
            query: '40.7638435, -73.9729691',
        },
        //access_key: '2752a4b2400bcfe3f2bf07dcb36d3dc2',
        //access_key: `${process.env.ADDRESS_API_KEY}`,
        //query: '40.7638435, -73.9729691',
        //query: document.getElementById('latlong').textContent,
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
})
.then((addressRes) => {
    if (!addressRes.ok)
      return addressRes.json().then((e) => Promise.reject(e));
      return addressRes.json()
})
.then((address) => {
    document.getElementById('address').textContent = address
  })
  .catch((error) => {
    console.error({ error })
  });
}


export default getAddress();