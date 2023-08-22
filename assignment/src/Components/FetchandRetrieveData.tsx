import React, { useState, useEffect } from 'react';
import { Post } from './types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import TableLists from './TableLists';

//list items
const checkboxListProps = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

//table
const FetchandRetrieveData: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0,15));
        setLoading(false); // Data fetching completed, set loading to false
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        setLoading(false); // Data fetching failed, set loading to false
      });
  }, []);

  return (
    <div>
      {loading ? ( // Show loading spinner while loading is true
        <CircularProgress />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Body</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map(post => (
                  <TableRow key={post.id}>
                    <TableCell>{post.id}</TableCell>
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{post.body}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className='tablelisting'>
            <TableLists departments={checkboxListProps} />
          </div>
        </>
      )}
    </div>
  );
};

export default FetchandRetrieveData;
