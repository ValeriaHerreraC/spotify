import { useEffect, useState } from "react";
import { Albums } from "./Albums";

export const Songs = () => {
  const [data, setData] = useState([]);

  /*useEffect(() => {
    fetch('https://discoveryprovider.audius.co/v1/tracks/trending?app_name=ExampleApp')
    .then(async(response) => {
      const result = await response.json()
      setData(result.data)
    })
  }, []); */

  useEffect(() => {
    const token = 'AQBXFh7S87PrZzya2ijHC_vXCBC0lb78aMRxLq9hxW53i-7l40x_qztW9E6Xai7jI4zRzkzlFo_1WG020b_ujIkdqEePr9kNB4iOP990vGwOGN6YEpBKtbrrdBR3ycCr4NV5gPbnqe8MNjQFWMcTNWwCGukaEHFDBTRlJ7oEcQrYG1LNmqbiJq7xTh9WOrxahrLJ32bXIgpadts';
  async function fetchWebApi() {
    const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    });
    console.log (await res.json())
  
  }
  fetchWebApi()
  }, []);

  return (
    <>
      <Albums data={data} />
    </>
  );
};