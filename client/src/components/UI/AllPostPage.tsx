import React, { useState } from 'react';
import { useAppSelector } from '../../Redux/hooks';
import './styles.css';
import type { Post } from '../../Redux/Post/PostType';

export default function AllPostPAge(): JSX.Element {
  const allPosts = useAppSelector((store) => store.posts.posts);
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = (): void => {
    setIsLoading(true);
    setData(allPosts);
    setIsLoading(false);
  };

  const clearData = (): void => {
    setData([]);
  };
  return (
    <div className="container">
      <div className="button-wrapper">
        <button type="button" onClick={fetchData}>
          Get Data
        </button>
        <button type="button" onClick={clearData}>
          Clear Data
        </button>
      </div>
      <div className="table-wrapper">
        {isLoading && <p>Loading...</p>}
        {!isLoading && data.length === 0 && (
          <img
            className="nocontent"
            src="https://memesmix.net/media/created/byou2f.jpg"
            alt="Нет контента"
          />
        )}
        {!isLoading && data.length > 0 && (
          <table>
            {allPosts.slice(0, 10).map((post) => (
              <table className="table">
                <tr>
          
                    <td className="post__id">{post.id}</td>
                    <td>
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.name}
                          width="200"
                          height="200"
                        />
                      )}
                    </td>
                    <td>{post.name}</td>
                    <td>{post.gender}</td>
                    <td>{post.species}</td>
                </tr>
              </table>
            ))}
          </table>
        )}
      </div>
    </div>
  );
}
