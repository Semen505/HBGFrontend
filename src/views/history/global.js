import { message } from 'antd';

export const gMessage = (type, msg) => (
    type === 'success'  ?   message.success(msg) :
    type === 'error'    ?   message.error(msg) :   
    type === 'warning' ?   message.warning(msg) : ''
)