'use client';

import { useEffect, useState } from "react";
import type { Task } from '../../types/task';

export default function Home() {
  const [data, setData] = useState<Task[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => { 
    fetch("http://localhost:3001/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
    });
  }, []);

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      {data?.map((item, i) => 
        <div key={i}>
          {item.title}
        </div>) 
      }
    </div>
  );
}
