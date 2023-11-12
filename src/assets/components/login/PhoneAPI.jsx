
import axios from "axios"
import  {useQuery } from 'react-query';


export const postNumberApi = (mobile) => {

    // if (mobile[0] === 0) {
    //     mobile.slice(1);
    // }
        const requestData = {
            type: "mobile",
            mobile_prefix: "+98",
            mobile: mobile,
        };

    
           return axios.post(
                "https://demo1.metanext.biz/api/v1/auth/request",
                requestData)

        
    }
    export const usePhoneNumberApi = (mobile) => {
        return  useQuery("phoneAPI" , ()=> postNumberApi(mobile) ,{ enabled : false} );
      };