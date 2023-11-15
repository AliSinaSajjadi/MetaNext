import React from "react"
import axios from "axios";
import { useQuery, UseQueryResult } from 'react-query';
interface PostNumberApiData {
  type: string;
  mobile_prefix: string;
  mobile: string;
}

const postNumberApi = (mobile: string) => {
    
    
    const requestData: PostNumberApiData = {
        type: "mobile",
        mobile_prefix: "+98",
        mobile: mobile,
    };
    
    return axios.post(
        "https://demo1.metanext.biz/api/v1/auth/request",
        requestData
        );
    };
    
    export const usePhoneNumberApi = (mobile: string): UseQueryResult<any> => {
        
        return useQuery("phoneAPI", () => postNumberApi(mobile), { enabled: false });
    };
