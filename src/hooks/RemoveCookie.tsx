import Cookie from 'js-cookie';

const RemoveCookie = (cookiename:string) =>{
    return Cookie.remove(cookiename);
};

export default RemoveCookie;