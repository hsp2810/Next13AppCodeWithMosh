import { User } from "../../types";
import { sort } from "fast-sort";
import Link from "next/link";

interface PageProps {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: PageProps) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const data: User[] = await response.json();

  let sortedUsers: User[] = [];
  if (sortOrder === "name") {
    sortedUsers = sort(data).asc((user) => user.name);
  } else if (sortOrder === "username") {
    sortedUsers = sort(data).asc((user) => user.username);
  } else if (sortOrder === "email") {
    sortedUsers = sort(data).asc((user) => user.email);
  } else {
    sortedUsers = sort(data).asc((user) => user.id);
  }

  return (
    <table className='table rounded-lg'>
      <thead>
        <tr>
          <th>
            <Link href={`?sortOrder=id`}>Id</Link>
          </th>
          <th>
            <Link href={`?sortOrder=username`}>Username</Link>
          </th>
          <th>
            <Link href={`?sortOrder=name`}>Name</Link>
          </th>
          <th>
            <Link href={`?sortOrder=email`}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers &&
          sortedUsers.map((user) => {
            return (
              <tr className='bg-base-200' key={user.id}>
                <th>{user.id}</th>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default UserTable;
