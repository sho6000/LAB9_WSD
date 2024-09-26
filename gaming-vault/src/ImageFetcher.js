import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageFetcher = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/sho6000/WSD-PRO/refs/heads/master/course.json')
      .then((response) => {
        setCourses(response.data.courses); // Ensure you're mapping the correct data property
      })
      .catch((error) => {
        console.error('Error fetching course images:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>CS Courses</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '15px',
        gridAutoRows: '300px',
        justifyContent: 'center',
      }}>
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              borderRadius: '15px',
            }}
          >
            <img
              src={course.url}
              alt={course.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageFetcher;
