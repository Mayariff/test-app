import React from 'react';
import {CustomButton, CustomInputText} from '../index';
import {AddingFieldPropsType} from './type';

export const AddingField = React.memo(({
                                status,
                                onEnterHandler,
                                onClickAddHandler,
                                inputText,
                                onchangeHandler,
                                error, ...props
                            }: AddingFieldPropsType) => {

    return (
        <div>
            <CustomInputText onChange={onchangeHandler}
                             value={inputText}
                             error={error}
                             onEnter={onEnterHandler}
            />
            <CustomButton nameButton={'Добавить задачу'}
                          onClick={onClickAddHandler}
                          disabled={status === 'loading' || inputText.length === 0}/>
        </div>
    )
})
