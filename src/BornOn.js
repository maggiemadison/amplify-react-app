import React from 'react';
export const BornOn = (props) => {
    const {user} = props;

    return (
        <>
            <h2>The user {user.login} was born on {user.created_at}.</h2>
        </>
    )
}
