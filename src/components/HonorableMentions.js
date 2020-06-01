import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HonorableMentions() {
  const [repos, setRepos] = useState([]);


  const fetchRepos = async () => {
    const res = await axios.get('https://api.github.com/users/alonzuman');
    console.log(res.data);
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  return (
    <div>
      {repos.length}
    </div>
  )
}
