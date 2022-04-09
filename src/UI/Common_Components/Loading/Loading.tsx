import React from 'react';
import s from './Loading.module.css'


export const Loading = React.memo(() => {
    return (
        <div className={s.loading}>Пожалуйста , подождите...</div>
    );
});
