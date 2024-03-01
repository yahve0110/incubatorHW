type AddressType = {
    street: string;
    city: string;
};

type UserType = {
    // ПРИДЕТСЯ САМОМУ)
    id: number
    name: string
    age: number
  address:AddressType

};

type UserListPropsType = {
    users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
    console.log(props.users)
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>
            <ul>
              {props.users.map((user:UserType) => (
                <li key={user.id} id={`hw01-user-${user.id}`}>
                  <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
                  {user.address.street}, {user.address.city}
                </li>
              ))}
            </ul>
        </div>
    );
};
